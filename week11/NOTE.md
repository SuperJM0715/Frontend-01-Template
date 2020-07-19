# 每周总结可以写在这里

  > 红路灯问题

    绿灯亮 10 秒， 黄灯亮 2 秒， 红灯亮 5 秒 的顺序无线循环， 用 JS 代码实现
    ```
      function light(){
        
      }
    ```
function* g(){
    yield 1;
    yield 2;
    yield 3;
}
for(v of g()){
    console.log(v); // 1 2 3 依次输出
}


async function* g(){
    let i = 0;
    while(true){
        await sleep(1000);
        yield i++;
    }
}

for await(let v of g()){
    console.log(v)
}