# 每周总结可以写在这里

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
    
    
  
  
  
  
