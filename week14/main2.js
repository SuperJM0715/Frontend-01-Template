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

let component = <Div id="a" class="b" style="width: 100px; height: 100px; background-color: aqua;">
    <Div></Div>
    <Div></Div>
    <Div></Div>
</Div>

component.mountTo(document.body);
console.log(component);
// component.setAttribute("id","a");