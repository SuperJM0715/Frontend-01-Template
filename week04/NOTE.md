# 每周总结可以写在这里

  其实所有的JS代码都是一个微任务，只是哪些微任务构成了一个宏任务；
  执行在JS引擎里的就是微任务，执行在JS引擎之外的就是宏任务，
  循环宏任务的工作就是事件循环。

  resolve的执行，产生了一个额外的微任务，添加在微任务队列的最后。

  拿浏览器举例：setTimeout、setInterval 这种其实不是 JS 语法本身的 API，
  是 JS 的宿主浏览器提供的 API， 所以是宏任务。 
  而 Promise 是 JS 本身自带的 API，这种就是微任务。

  我们把宿主发起的任务称为宏观任务，把 JavaScript 引擎发起的任务称为微观任务。
  
  在宏观任务中，JavaScript 的 Promise 还会产生异步代码，JavaScript 必须保证这些异步代码在一个宏观任务中完成，因此，每个宏观任务中又包含了一个微观任务队列
  
  
  重学前端相关链接
  
  https://time.geekbang.org/column/article/82764?utm_source=time_web&utm_medium=menu&utm_term=timewebmenu
