 把 object 处理成 
 {
    "id": "Modeling Methods",
    "children": [
        {
            "id": "Classification",
            "children": [
                {
                    "id": "Logistic regression"
                },
              ...
              ]
         }
      ],
    }
      的格式
 
  const objects = [
     "eval",
     "isFinite",
     "isNaN",
     "parseFloat",
     "parseInt",
     "decodeURI",
     "decodeURIComponent",
     "encodeURI",
     "encodeURIComponent",
     "Array",
     "Date",
     "RegExp",
     "Promise",
     "Proxy",
     "Map",
     "WeakMap",
     "Set",
     "WeakSet",
     "Function",
     "Boolean",
     "String",
     "Number",
     "Symbol",
     "Object",
     "Error",
     "EvalError",
     "RangeError",
     "ReferenceError",
     "SyntaxError",
     "TypeError",
     "URIError",
     "ArrayBuffer",
     "SharedArrayBuffer",
     "DataView",
     "Float32Array",
     "Float64Array",
     "Int8Array",
     "Int16Array",
     "Int32Array",
     "Uint8Array",
     "Uint16Array",
     "Uint32Array",
     "Uint8ClampedArray",
     "Atomics",
     "JSON",
     "Math",
     "Reflect"
   ];

   const set = new Set();

   const globalObject = {
     id: "Global Object",
     children: [

     ]
   }

   for (let i of objects) {
     globalObject.children.push({
       children: [],
       id: i
     })
   }


   for (let i = 0; i < objects.length; i++) {
     const current = objects[i]
     if (set.has(objects[i]))
       continue;
     set.add(objects[i])
     for (let p of Object.getOwnPropertyNames(window[objects[i]])) {
       let d = Object.getOwnPropertyDescriptor(window[objects[i]], p)
       if (d.hasOwnProperty("value") && ((d.value !== null && typeof d.value === "object") || (typeof d.value === "function")) && d.value instanceof Object) {
         let childrenThird = []
         for (let k of Object.getOwnPropertyNames(d.value)) {
           if (k !== 'name' && k !== 'length') {
             childrenThird.push({ id: k })
           }
         }
         globalObject["children"][i].children.push({
           children: childrenThird,
           id: p
         })
       }
       if (d.hasOwnProperty("get") && typeof d.get === "function") {
         let childrenThird = []
         for (let k of Object.getOwnPropertyNames(d.get)) {
           if (k !== 'name' && k !== 'length') {
             childrenThird.push({ id: k })
           }
         }
         globalObject["children"][i].children.push({
           children: childrenThird,
           id: p
         })
       }
       if (d.hasOwnProperty("set") && typeof d.set === "function") {
         let childrenThird = []
         for (let k of Object.getOwnPropertyNames(d.set)) {
           if (k !== 'name' && k !== 'length') {
             childrenThird.push({ id: k })
           }
         }
         globalObject["children"][i].children.push({
           children: childrenThird,
           id: p
         })
       }
     }
   }
 

import G6 from '@antv/g6';

fetch(globalObject)
  .then(res => res.json())
  .then(data => {
    const width = document.getElementById('container').scrollWidth;
    const height = document.getElementById('container').scrollHeight || 500;
    const graph = new G6.TreeGraph({
      container: 'container',
      width,
      height,
      modes: {
        default: [
          {
            type: 'collapse-expand',
            onChange: function onChange(item, collapsed) {
              const data = item.get('model').data;
              data.collapsed = collapsed;
              return true;
            },
          },
          'drag-canvas',
          'zoom-canvas',
        ],
      },
      defaultNode: {
        size: 26,
        anchorPoints: [
          [0, 0.5],
          [1, 0.5],
        ],
        style: {
          fill: '#C6E5FF',
          stroke: '#5B8FF9',
        },
      },
      defaultEdge: {
        type: 'cubic-horizontal',
        style: {
          stroke: '#A3B1BF',
        },
      },
      layout: {
        type: 'compactBox',
        direction: 'TR',
        getId: function getId(d) {
          return d.id;
        },
        getHeight: function getHeight() {
          return 16;
        },
        getWidth: function getWidth() {
          return 16;
        },
        getVGap: function getVGap() {
          return 10;
        },
        getHGap: function getHGap() {
          return 100;
        },
      },
    });

    graph.node(function(node) {
      return {
        label: node.id,
        labelCfg: {
          offset: 10,
          position: node.children && node.children.length > 0 ? 'left' : 'right',
        },
      };
    });

    graph.data(data);
    graph.render();
    graph.fitView();
  });
