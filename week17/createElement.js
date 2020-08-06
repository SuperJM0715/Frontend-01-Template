import {enableGesture} from "./gesture"
export function createElement(Cls, attributes, ...children){
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

    getAttribute(name){
        return;
    }
}

export class Wrapper{
    constructor(type){
        this.children = [];
        this.root = document.createElement(type);
    }

    setAttribute(name, value){
        this.root.setAttribute(name, value);
         
        
        if(name.match(/^on([\s\S]+)$/)){
            let eventName = RegExp.$1.replace(/^[\s\S]/, c => c.toLowerCase());
            this.addEventListener(eventName, value);
        }
        if(name === "enableGesture"){
            enableGesture(this.root);
        }
    }

    appendChild(child){
        // child.mountTo(this.root);
        this.children.push(child);

    }

    getAttribute(name){
        return this.root.getAttribute(name);
    }

    addEventListener(type, handler, config){
        this.root.addEventListener(...arguments);
    }

    get style(){
        return this.root.style;
    }

    get classList(){
        return this.root.classList;
    }

    set innerText(text){
        return this.root.innerText = text;
    }
    mountTo(parent){
        parent.appendChild(this.root);

        for(let child of this.children){
            child.mountTo(this.root)
        }
    }
}