var parser = require("./parser");

module.exports = function(source, map){
    // console.log(source);
    // console.log(parser.parseHTML(source))
    let tree = parser.parseHTML(source);
    // console.log(tree.children[1].children[0].content);
    // console.log("my loader is running...\n", this.resourcePath);

    let template = null;
    let script = null;

    for(let node of tree.children){
        if(node.tagName === "template"){
            template = node.children.filter(e => e.type != "text")[0];
        }
        if(node.tagName === "script"){
            script = node.children[0].content;
        }
    }

    let createCode = "";

    console.log(template);

    let visit = (node) => {
        if(node.type === "text"){
            return JSON.stringify(node.content);
        }
        let attrs = {};
        // console.log("3------"+ JSON.stringify(node));
        for(let attribute of node.attribute){
            attrs[attribute.name] = attribute.value;
        }
        let children = node.children.map(node => visit(node));
        return `createElement("${node.tagName}", ${JSON.stringify(attrs)}, ${children})`;
    }

    let r =  `
import {createElement, Text, Wrapper} from './createElement'
export class Carousel{

    setAttribute(name, value){
        this[name] = value;
    }

    render(){
        ${visit(template)}
    }

    mountTo(parent){ 
        this.render().mountTo(parent);
    }
}
    `;
    return r;
}