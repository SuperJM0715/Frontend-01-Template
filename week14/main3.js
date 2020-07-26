function create(Cls, attributes, ...children){
    let o;

    if(typeof Cls === "string"){
        o = new Wrapper(Cls);
    }else{
        new Cls({
            timer: {}
        });
    }
 

    for(let name in attributes){
        // o[name] = attributes[name]; property 和 attribute  会同时改
        o.setAttribute(name, attributes[name]); //  property 和 attribute  会同时改
    }

    for(let child of children){
        // o.children.push(child);  // 让属性触发一些事件
        if(typeof child === "string")
            child = new Text(child);
        o.appendChild(child);
    }
    return o;
}

class Text{
    constructor(text){
        this.children = [];
        this.root = document.createTextNode(text);
    }

    mountTo(parent){
        parent.appendChild(this.root);
    }
}

class Wrapper{
    constructor(type){
        this.children = [];
        this.root = document.createElement(type);
    }

    setAttribute(name, value){
        this.root.setAttribute(name, value);
    }

    appendChild(child){
        child.mountTo(this.root);
    }

    mountTo(parent){
        parent.appendChild(this.root);
    }
}

class Div{
    constructor(config){
        this.children = [];
        this.root = document.createElement("div");
    }

    setAttribute(name, value){
        this.root.setAttribute(name, value);
    }

    appendChild(child){
        child.mountTo(this.root);
    }

    mountTo(parent){
        parent.appendChild(this.root);
    }
}

let component = <div id="a" class="b" style="width: 100px; height: 100px; background-color: aqua;">
    <div>中国</div>
    <p></p>
    <div></div>
    <div></div>
</div>

component.mountTo(document.body);
console.log(component);
// component.setAttribute("id","a");