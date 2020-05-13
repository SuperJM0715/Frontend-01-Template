# 每周总结可以写在这里

1. 用代码的形式获取了全部 JavaScript 固有对象
  
   重学前端链接： https://time.geekbang.org/column/article/80011?utm_source=time_web&utm_medium=menu&utm_term=timewebmenu

   getOwnPropertyNames 返回一个自身属性的属性名数组， 该数组对元素是 obj自身拥有的枚举或不可枚举属性名称字符串

       var arr = ["a","b","c"];
       Object.getOwnPropertyNames(arr).sort(); // ["0", "1", "2", "length"]
  
   getOwnPropertyDescriptor 返回自有属性对应的属性描述符，对象没有该属性时返回 undefined
  
        var o, d;
        o = { get foo() { return 17; } };
        d = Object.getOwnPropertyDescriptor(o, "foo");
        // d {
        //   configurable: true,
        //   enumerable: true,
        //   get: /*the getter function*/,
        //   set: undefined
        // }

        o = { bar: 42 };
        d = Object.getOwnPropertyDescriptor(o, "bar");
        // d {
        //   configurable: true,
        //   enumerable: true,
        //   value: 42,
        //   writable: true
        // }
        
2. toy-browser 
  ```![](https://user-gold-cdn.xitu.io/2020/5/13/1720c2c8e9394641?w=591&h=201&f=png&s=11413)```
    通过 client.js （状态机）的编写，对浏览器的 requeset line, status line, headers, body, response 有了更深入的理解
