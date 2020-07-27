# 每周总结可以写在这里

1. 安装 webpack， sudo npm install --save-dev "webpack"
2. 安装 babel，把低版本的语法翻译成高版本的语法
        sudo npm install babel-loader --save-dev
        @babel/core
        @babel/preset-env

3. 配置 webpack 入口文件 main.js , 相对路径
4. 新建 index.html
5. jsx  npm install babel-plugin-transform-react-jsx --save-dev
        在 webpack 配置文件中添加 plugins: ['babel-plugin-transform-react-jsx']

6. 开发环境下源码不压缩
    在 webpack 配置文件中添加
        mode: 'development',
        optimization: {
            minimize: false
        }

7. pragma: "create", 自定义函数名成， 默认 createElement
