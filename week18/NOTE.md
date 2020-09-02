# 每周总结可以写在这里

# 工具链测试
## nyc
### method1（旧语法）
> add.js
```
function add(a, b){
     return a + b;
 }

module.exports.add = add;
```
> add.test.js
```
var add = require('../src/add.js');
var assert = require('assert');

方法调用 add.add()
```

### method2（新语法）

> add.js
```
export function add(a, b){
    return a + b;
}
```
> add.test.js
```
import {add} from "../src/add.js";
import assert from "assert";

方法调用 add()
```

> package.json
```
 "type": "module",
 tips：安装最新版的 node
```

## 安装 nyc

> npm install nyc
> package.json
```
"scripts": {
    "test": "mocha",
    "coverage": "nyc mocha"
  },
```
> npm run coverage

此时生成的报告数据是空的，需要指定文件 .nycrc

新建 .nycrc 文件, 重新执行 run coverage, 就会生成有数据的报告

---------------------emmmm， 搞错了 重来----------------------------

新语法生成不了正确的报告，所以还是换回 require 的语法

> 安装 webpack， 安装 babel
```
npm install --save-dev webpack
npm install --save-dev babel-loader @babel/core @babel/preset-env

```

> 新建 babelrc 文件, 
```
{
    "presets": ["@babel/preset-env"]
}
```
> 用 babel 转换到 dist 文件夹中
    babel ./src/add.js > ./dist/add.js

> 更改 nycrc 文件的路径  dist/*.js

> 运行 npm run coverage, okk

## ava (在 mocha 的基础上支持 import 语法)
npm install --save-dev ava
## jest
