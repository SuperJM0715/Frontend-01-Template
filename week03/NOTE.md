 
	Completion Record
		定义： JavaScript 语句执行的完成状态，用于描述异常、跳出等语句执行过程
		表示语句执行之后的结果
			[[type]]
				表示完成的类型，有 break continue return throw 和 normal 几种类型
			[[value]]
				表示语句的返回值，如果语句没有，则是 empty
			[[target]]
				表示语句的目标，通常是一个 JavaScript 标签
	语句类型
		普通语句
			声明类语句
				var 语句
				let 语句
				const 语句
				函数声明
				类声明
			表达式语句
			with 语句
			debugger 语句
			空语句
		语句块
		控制型语句
			if
			switch
			for
				for
				for...of
				for...in
				for-await-of
			while
				while
				do-while
			try
			throw
			break
			continue
			return
		带标签的语句
			语法
				任何 JavaScript 语句是可以加标签的，在语句前加冒号即可
			作用
				大部分时候，这个东西类似于注释，没有任何用处。
				唯一有作用的时候是：与完成记录类型中的 target 相配合，用于跳出多层循环;
				break/continue 语句
				
	for 语句中 var 的副作用
	for 的作用域在 block 外 ？ 34：33：00 


	for in  遍历 key     标准：expression 都考虑是否有 in   page：716
	for of  遍历 value   （访问可迭代的对象  iterator 机制）
			yield *g 或者 数组（有 iterator 内置方法的对象）

	消费 穿透		
	
![](https://user-gold-cdn.xitu.io/2020/4/28/171c0cf7317c1c9e?w=376&h=495&f=png&s=100719)

	错误的模仿语言的示范
		function Cls(){
		    public:
			this.a = 1;
			this.b = 2;
		    private:
			var x = 3;
			var y = 4;
		}

		var o = new Cls();
		0.a; =>1
		o.b; =>2
		o.x; => 访问不到
		o.y; => 访问不到
		本质上 public 是无效的， 即使去掉也是相同的效果      （52:00:00 附近）
				
	除了 throw 还有会产生completion record 为 throw 的结果的语句  60:00:00 (需要再听)
	    运行时逻辑错误
	    FunctionStatement 最有可能产生throw   function 中含有 throw
	    ExpressionStatement 产生 throw
	    null.a    1=a; 	
	
![](https://user-gold-cdn.xitu.io/2020/4/28/171c0d6a00b66141?w=372&h=283&f=png&s=59005)

	
	作用域和上下文  1：08：00
	作用域： 代码作用的文本区域
	上下文： 用户电脑上 JavaScript 引擎的这块内存
	
	分清函数声明和函数表达式的区别
	
	yield  function*  next();

	with 设计失误

	var 变量提升 boundNames

	对象状态的改变即是行为  狗咬人，咬是谁的行为？
	    state identifier behavior
	原型
	    采用“相似”的方式去描述对象

	图灵完备：循环+分支

	特殊对象 Special Object
	    js 模拟不出来的

	getOwwnPropertyDescriptor    
	setPrototypeOf
	总结 JS 中所有的特殊对象, 以 Array 为例
![](https://user-gold-cdn.xitu.io/2020/4/29/171c3dece3cd016a?w=646&h=462&f=png&s=145206)
	
	convert string to utf-8
![](https://user-gold-cdn.xitu.io/2020/4/29/171c3e49c822b9e5)
