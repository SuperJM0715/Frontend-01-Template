# 每周总结可以写在这里

panel

tabPanel   容器

ListView

cssloader


工具

cd ..
mkdir generator-winter
cd generator-winter/
npm init

sudo npm install yeoman-generator

open .

构建目录结构
配置 package.json
        
        "files": [
            "app",
            "router"
        ]
        

app/index.js
增加方法 method1 method2

npm link

cd ..
mkdir winter-app
cd winter-app
yo winter

method1 和 method2 会自动运行

https://stackoverflow.com/questions/10585683/how-do-you-edit-existing-text-and-move-the-cursor-around-in-the-terminal/10830168

mkdir console-tooltik
cd console-tooltik
npm init
index.js 
    tty
    ttys
    rl
sudo npm install ttys



Cursor Movement
- Move the cursor up N lines:
  \033[<N>A
- Move the cursor down N lines:
  \033[<N>B
- Move the cursor forward N columns:
  \033[<N>C
- Move the cursor backward N columns:
  \033[<N>D