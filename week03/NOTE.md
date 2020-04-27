# 0425 直播课
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
				大部分时候，这个东西类似于注释，没有任何用处。唯一有作用的时候是：与完成记录类型中的 target 相配合，用于跳出多层循环;
				break/continue 语句
