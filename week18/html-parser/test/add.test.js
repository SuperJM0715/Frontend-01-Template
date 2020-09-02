import {parseHTML} from '../src/parser.js';
var assert = require('assert');

it('parse a single element', () => {
    let doc = parseHTML("<div></div>");
    let div = doc.children[0];
    console.log(div);
    assert.equal(div.tagName, "div");
    assert.equal(div.children.length, 0);
    assert.equal(div.type, "element");
    assert.equal(div.attribute && div.attribute.length, 2);
});

it('parse a single element with text content', () => {
    let doc = parseHTML("<div>hello</div>");
    let text = doc.children[0].children[0];
    
    assert.equal(text.content, "hello");
    assert.equal(text.type, "text");
    // console.log(text);
});