function create(Cls, attributes, ...children){
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
        // this.children.push(child);

    }

    mountTo(parent){
        parent.appendChild(this.root);
    }
}

class MyComponent{
    constructor(config){
        this.children = [];
        // this.root = document.createElement("div");
    }

    setAttribute(name, value){
        this.root.setAttribute(name, value);
    }

    appendChild(child){
        this.children.push(child);
    }

    render(){
        
        return <article>
            <header>header</header>
            {this.slot}
            <footer>footer</footer>
        </article>
    }

    mountTo(parent){
        this.slot = <div></div>

        for(let child of this.children){
            this.slot.appendChild(child);
        }

        this.render().mountTo(parent);

    }
}

let component = <MyComponent>
    <div>text text text</div>
</MyComponent>

component.mountTo(document.body);
console.log(component);
// component.setAttribute("id","a");