function create(Cls, attributes, ...children){
    let o = new Cls({
        timer: {}
    });

    for(let name in attributes){
        // o[name] = attributes[name]; property 和 attribute  会同时改
        o.setAttribute(name, attributes[name]); //  property 和 attribute  会同时改
    }

    for(let child of children){
        // o.children.push(child);  // 让属性触发一些事件
        o.appendChild(child);
    }
    return o;
}

class Parent{
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

    // set class(v){ // property
    //     console.log("Parent::class", v);
    // }

    // setAttribute(name, value){ // attribute
    //     console.log(name, value);
    // }

    // appendChild(child){ // children
    //     console.log("Parent::appendChild", child)
    // }
}

class Child{
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

let component = <Parent id="a" class="b">
    <Child></Child>
    <Child></Child>
    <Child></Child>
</Parent>

component.mountTo(document.body);
console.log(component);
// component.setAttribute("id","a");