import {createElement, Text, Wrapper} from './createElement';
import {Timeline, Animation} from "./animation";
import {ease} from './cubicBezier.js'; 

export class ListView{
    constructor(config){
        this.children = [];
        this.attributes = new Map();
        this.properties = new Map();
        this.state = Object.create(null);
        // this.root = document.createElement("div");
    }

    setAttribute(name, value){
        // this.root.setAttribute(name, value);
        this[name] = value;
    }

    getAttribute(name){
        return this[name];
    }

    appendChild(child){
        this.children.push(child);
    }
 
     

    render(){ 
         let data = this.getAttribute("data");
        return <div class="tlist-view" style="width: 300px;">
             {
                 data.map(this.children[0])
             }
        </div>;
    }

    mountTo(parent){ 
        this.render().mountTo(parent);
    }
}
