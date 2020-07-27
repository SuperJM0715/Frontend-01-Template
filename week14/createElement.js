export function create(Cls, attributes, ...children){
    let o;

    if(typeof Cls === "string"){
        o = new Wrapper(Cls);
    }else{
        o = new Cls({
            timer: {}
        });
    }
 

    for(let name in attributes){
        // o[name] = attributes[name]; property 和 attribute  会同时改
        o.setAttribute(name, attributes[name]); //  property 和 attribute  会同时改
    }

    let visit = (children) => {
        for(let child of children){
            // o.children.push(child);  // 让属性触发一些事件
            if(child instanceof Array){
                visit(child);
                continue;
            }
            if(typeof child === "string")
                child = new Text(child);
                o.appendChild(child);
        }
    }
    visit(children);
    return o;
}

export class Text{
    constructor(text){
        this.children = [];
        this.root = document.createTextNode(text);
    }

    mountTo(parent){
        parent.appendChild(this.root);
    }
}

export class Wrapper{
    constructor(type){
        this.children = [];
        this.root = document.createElement(type);
    }

    setAttribute(name, value){
        this.root.setAttribute(name, value);
    }

    appendChild(child){
        child.mountTo(this.root);
        // this.children.push(child);

    }

    addEventListener(type, handler, config){
        this.root.addEventListener(...arguments);
    }

    get style(){
        return this.root.style;
    }
    mountTo(parent){
        parent.appendChild(this.root);
    }
}