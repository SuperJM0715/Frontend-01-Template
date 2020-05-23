const net = require('net');
const parser = require('./css7/parser.js');

class Request{
    // method, url = host + 
    // body k/v
    // 
    constructor(options){
        this.method = options.method || "GET";
        this.host = options.host;
        this.port = options.port ||80;
        this.path = options.path || "/";
        this.body = options.body || {};
        this.headers = options.headers || {};
        if(!this.headers["Content-Type"]){
            this.headers["Content-Type"] = "application/x-www-form-urlencoded";
        }

        if(this.headers["Content-Type"] === "application/json"){
            this.bodyText = JSON.stringify(this.body);
        }else if(this.headers["Content-Type"] === "application/x-www-form-urlencoded"){
            this.bodyText = Object.keys(this.body).map( key => `${key}=${encodeURIComponent(this.body[key])}`).join("&");

            this.headers["Content-Length"] = this.bodyText.length;
        }
    }
    toString(){
            return `${this.method} ${this.path} HTTP/1.1\r
${Object.keys(this.headers).map(key=> `${key}: ${this.headers[key]}`).join("\r\n")}\r
\r
${this.bodyText}`
    }
    send(connection){
        return new Promise((resolve, reject)=>{
            const parser = new ResponseParser;
            if(connection){
                connection.write(this.toString());
            }else{
                connection = net.createConnection({
                    host: this.host,
                    port: this.port
                }, ()=>{
                    connection.write(this.toString())
                });
            }
                connection.on('data', (data)=> {
                    parser.receive(data.toString());
                    // resolve(data.toString());
                    if(parser.isFinished){
                        resolve(parser.response);
                    }
                    console.log(parser.statusLine);
                    // console.log(parser.headers);
                    connection.end();
                });
                connection.on('error', (err)=> {
                    reject(err)
                    connection.end();
                });
        });
    }
}

class Response{

}

class ResponseParser{
    // 状态机
    constructor(){
        this.WAITING_STATUS_LINE = 0;
        this.WAITING_STATUS_LINE_END = 1;  // 接收到 \r\n
        this.WAITING_HEADER_NAME = 2; // header 的名字
        this.WAITING_HEADER_SPACE = 3; // header 的名后面有 冒号
        this.WAITING_HEADER_VALUE= 4; // header 的名后面有 冒号
        this.WAITING_HEADER_LINE_END = 5; // header 结束
        this.WAITING_HEADER_BLOCK_END = 6; // header 读取结束
        this.WAITING_BODY = 7;

        
        this.current = this.WAITING_STATUS_LINE;
        this.statusLine = "";
        this.headers = {};
        this.headerName = "";
        this.headerValue = "";
        this.bodyParser = null;
    }

    get isFinished(){
        return this.bodyParser && this.bodyParser.isFinished;
    }

    get response(){
        this.statusLine.match(/HTTP\/1.1 ([0-9]+) ([\s\S]+)/);
        return {
            statusCode: RegExp.$1,
            statusText: RegExp.$2,
            headers: this.headers,
            body: this.bodyParser.content.join(''),
        }
    }

    receive(string){ // 处理字符流 用 string 代替 buffer
        for(let i = 0; i < string.length; i++){
            this.receiveChar(string.charAt(i));
        }
    }

    receiveChar(char){
        if(this.current === this.WAITING_STATUS_LINE){ //等待statusLine
            if(char === '\r'){ // 接收到 \r 代表结束，该改变状态了

                this.current = this.WAITING_STATUS_LINE_END;
            }else{
                this.statusLine += char;
            }
        }else if(this.current === this.WAITING_STATUS_LINE_END){ //等待statusLine
            if(char === '\n'){ // 接收到 \n 代表结束，该改变状态了
                this.current = this.WAITING_HEADER_NAME;
            }
        }else if(this.current === this.WAITING_HEADER_NAME){ //
            if(char === ':'){  
                this.current = this.WAITING_HEADER_SPACE;
            }else if(char === '\r'){ 
                this.current = this.WAITING_HEADER_BLOCK_END;
                if(this.headers['Transfer-Encoding'] === 'chunked'){
                    this.bodyParser = new TrunkedBodyParser();
                }
            }else{
                this.headerName += char;
            }
        }else if(this.current === this.WAITING_HEADER_SPACE){
            if(char === " "){
                this.current = this.WAITING_HEADER_VALUE;
            }
        }else if(this.current === this.WAITING_HEADER_VALUE){ //
            if(char === '\r'){ // 接收到 \n 代表结束，该改变状态了
                this.current = this.WAITING_HEADER_LINE_END;
                this.headers[this.headerName] = this.headerValue;
                this.headerName = "";
                this.headerValue = "";
            }else{
                this.headerValue += char;
            }
        }else if(this.current === this.WAITING_HEADER_LINE_END){
            if(char === "\n"){
                this.current = this.WAITING_HEADER_NAME;
            }
        }else if(this.current === this.WAITING_HEADER_BLOCK_END){ //等待statusLine
            if(char === '\n'){ // 接收到 \n 代表结束，该改变状态了
                this.current = this.WAITING_BODY;
            }
        }else if(this.current === this.WAITING_BODY){
            this.bodyParser.receiveChar(char);
        }
    }
}

class TrunkedBodyParser{
    constructor(){
        this.WAITING_LENGTH = 0;
        this.WAITING_LENGTH_LINE_END = 1;
        this.READING_TRUNK = 2;
        this.WAITING_NEW_LINE = 3;
        this.WAITING_NEW_LINE_END = 4;
        this.length = 0;
        this.content = [];
        this.isFinished = false;
        this.current = this.WAITING_LENGTH;
    }

    receiveChar(char){
        //console.log(JSON.stringify(char));
        if(this.current === this.WAITING_LENGTH){ //等待statusLine
            if(char === '\r'){ // 接收到 \r 代表结束，该改变状态了
                if(this.length === 0){
                    this.isFinished = true;
                }
                this.current = this.WAITING_LENGTH_LINE_END;
            }else{
                // this.length *= 10;
                // this.length += char.charCodeAt(0) - '0'.charCodeAt(0);
                this.length *= 16;
                this.length += parseInt(char, 16);
            }
        }else if(this.current === this.WAITING_LENGTH_LINE_END){ //等待statusLine
            if(char === '\n'){
                this.current = this.READING_TRUNK;
            }
        }else if(this.current === this.READING_TRUNK){
            this.content.push(char);
            this.length--;
            if(this.length === 0){
                this.current = this.WAITING_NEW_LINE;
            }
        }else if(this.current === this.WAITING_NEW_LINE){ //等待statusLine
            if(char === '\r'){
                this.current = this.WAITING_NEW_LINE_END;
            }
        }else if(this.current === this.WAITING_NEW_LINE_END){ //等待statusLine
            if(char === '\n'){
                this.current = this.WAITING_LENGTH;
            }
        }
    }
}

void async function(){
    let request = new Request({
        method: "POST",
        host: "127.0.0.1",
        port: "8088",
        path: "/",
        headers: {
            ["X-Foo3"]: "customed"
        },
        body: {
            name: "inn"
        }
    });
    let response = await request.send();
    let dom = parser.parseHTML(response.body);
    console.info(dom);
}();
