# 每周总结可以写在这里
## css

  脑图：
	http://naotu.baidu.com/file/6b827dd5df27fd61fcfb95a4bdd05076?token=a5755353377e0908
	
  tips：
  
  	1. 计算优先级的方式及练习
	
	   四元组[inline, id, class, tag|attr|... ]
	   
		div#a.b .c[id=x]   [0，1，3，1]
		#a:not(#b)	   [0,2,0,0]
		*.a		   [0,0,1,0]
		div.a		   [0,0,1,1]
	
	2. 权威查询链接
	
	思考题
	1. 为什么 first-letter 可以设置 display:block 之类的，而 first-line 不行呢？
	
	2. 为什么 first-letter 可以设置 display:block 之类的，而 first-line 不行呢？
	
## 盒模型及特性

  1. box-sizing: border-box;
  
    特性：width = content + padding + border
    
  2. box-sizing: content-box;
  
    特性：width = content
    
  图片  
    
## 正常流 

  正常的部分👧：
  
    思考： 如何写字
      书写顺序，换行，对齐
      
    IFC 从左到右  inline formatting context
    BFC 从上到下  block formatting context
    
  正常流的三大难题
  
  大礼包一： 基线
  
    inline-block 里面没有文字的时候 基线在底部
      inline-block 配合 vertival-align: bottom 配合使用，可以跟有文字的效果一致
      最高的元素的行高 > line-height ? 最高的元素的行高 ： line-height （删掉）
      
           1.	Vertical-align: baseline，是拿自己的 baseline 去对其行的 baseline 

	   2.	Vertical-align: top，middle，bottom，是拿自己的 ”顶部“ “中线” ”底部“ 去对其行的 ”顶部“ “中线” ”底部“ 

	   3.	vertical-align: text-top，text-bottom，是拿自己的 ”顶部“ ”底部“ 去对齐行的 text-top 和 text-bottom 线吗？
  不正常的部分👿：
  
    float 与 clear
    
    代码：文字的大海上浮着几个小岛
    
    
  
  
  
  
