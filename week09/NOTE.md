### Animation
  * @keyframes 定义
        例子：
          @keyframes mykf{
           from{background: red;}
           to{background: yellow;}
          }

          div{
           animation: mykf 5s infinite;
          }

          <div style="width:100px;height:100px;"></div>
  * animation
      属性
         
         时间曲线 animation-name
         动画的时长 animation-duration
         动画的时间曲线 animation-timing-function
         动画开始前的延迟  animation-delay
         动画的播放次数 animation-iteration-count
         动画的方向 animation-direction
         
  ```  
     @keyframes mykf{
       0% { top: 0; transition: top ease }
       50% { top: 30px; transition:top ease-in }
       75% { top: 10px; transition: top ease-out }
       100% { top: 0; transition: top linear }
     }
  ```  
### Transition

    * 要变换的属性 transition-property
    * 变换的时长 transition-duration
    * 时间曲线 transition-timing-function
    * 延迟 transition-delay
  
####  小 demo：transition.html
  
### 渲染与颜色
    * CMYK：Cyan-青色，Magenta-品红，Yellow-黄色，blacK-黑色
    * RGB：Red-红色，Green-绿色，Blue-蓝色
      上述两个符合物理描述，但是不符合人类色相的直觉

    * HSL：Hue-颜色（0-360），Saturation-饱和度（0-100%）,Lightness-亮度（0-100%，黑-白）
    * HSV：Hue-颜色（0-360），Saturation-饱和度（0-100%），Value-明度（0-100%，黑-白）

#### demo:  hsv.html  （视频打点 01:09:00）

### 形状
     * border
     * box-shadow
     * border-radius

    data uri + svg

    * data:image/svg+xml,<svg>...</svg> ( 视频打点 01:13:00 )

    css 也是讲究语义的，不要用 border 去画三角形，五角星等，用 svg 去画矢量图形才是合理的

    作业： 总结 CSS 脑图 （ 生活不易，猫猫叹气 ）
          getComputedStyle(document.body)  // length: 280
      
### HTML

    SGML 与 XML

    nbsp; no break space 零宽空格
    不要用 nbsp; 代替空格
 
 
    https://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd

    获取 dtd 文件中字符的两种方式，以 λ 为例
    "\u03bb"
    document.body.innerHTML = "&lambda";
 
#### HTML 语义
    前一个小时，当堂写了 worldwide 的 google 词条
    后半部分开始讲重学 HTML（ 01：12：00 ）
  
#### 合法元素 
    * DocumentType: <!Document html>
    * ElementL: <tag></tag> 标签
    * Text: text 文本
    * Comment: <!-- xxx -->  每一个符号否是一个人状态
    * ProcessingInstruction: <?a 1?>  预处理  没用 
    * CDATA: <![CDATA[]]>   类似 js 的反引号
#### 字符引用
    * &#161; = !
    * &amp; = &
    * &lt; = <
    * &gt; = >
    * &quot; = "
### 重学DOM （ 01：17：00 ）

    Element：元素型节点，跟标签对应 (HTMLElement SVGElement)
    Document：文档根节点
    CharacterData：字符数据 （Text Comment ProcessingInstruction）
    DocumentFragment ： 文档片段    可以被 append 到其它元素上
    DocumentType : 文档类型
 
#### 导航类操作

    * parentNode 父节点
    * childNodes  子节点
    * firstChild  第一个子节点
    * lastChild  最后一个子节点
    * nextSibling  相邻的兄弟节点
    * previousSibling  前一个兄弟节点
    
    推荐用 Node 不要用 element 来操作，上述的 Node 操作都有对应的 element 操作

     对应的 Element 操作
    * parentElement 父节点
    * children  子节点
    * firstElementChild  第一个子节点
    * lastElementChild  最后一个子节点
    * nextElementSibling  相邻的兄弟节点
    * previousElementSibling  前一个兄弟节点
    
#### 修改操作

    * appendChild
    * insertBefore
    * removeChild
    * replaceChild
    
    API 设计： 最小化实现
    潜规则： 所有的 DOM 元素只有一个父元素
    重要考点二： 一个元素不能被两次插入到DOM元素中，如果把一个元素插入到A位置，然后再调用一次，把它插入到B位置，那么它会自动从A位置remove掉，即使是两个互不相关的 DOM 树，也是如此（01：27：00）
        
    重要考点一：修改操作是 living collection 的，会实时改变 childrenNode 和 child 的值, 即使取出来重新赋值，取出来的也不是 js 数组，而是会实时变化的（01：28：00）

#### 高级操作

    * compareDocumentPosition：一个用于比较两个节点中关系的函数
    * contains：检查一个节点是否包含另一个节点的函数
    * isEqualNode：检查两个节点是否完全相同
    * isSameNode: (废的 API, JS 中用 "===" 或者 "==" 就可以判断，完全没有问题 )
    * cloneNode(deep)：复制一个节点，如果传入参数 true，则会连同元素做深拷贝

```
wrong.html
  <div id="x">
     <div>1</div>
     <div>2</div>
     <div>3</div>
     <div>4</div>
  </div>
  
  <div id="b"></div>
  <script>
     var x = document.getElementById("x");
     var b = document.getElementById("b");
     for(var i = 0; i < x.children.length; i++){
         b.appendChild(x.children[i]);
     }
  </script>
  
  因为是 living collection， 所以会直接挪过去，childlength在变化，最终不会全部取到，得到的结果是 2 4 1 3
  
```
```
right.html
  <div id="x">
     <div>1</div>
     <div>2</div>
     <div>3</div>
     <div>4</div>
  </div>
  
  <div id="b"></div>
  <script>
     var x = document.getElementById("x");
     var b = document.getElementById("b");
     while( x.children.length ){
         b.appendChild(x.children[0]);
     }
  </script>
```
#### 事件机制 event
     参考链接： https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

     addEventListener (三个参数)

     捕获
           由外层向内
     冒泡
           由内向外层
           
    ```
    <div id="a" style="width:100%;height:300px;background:lightblue">
       <div id="b" style="width:100%;height:200px;background:pink">
       </div>
    </div>
    
    <script>
      var a = document.getElementById("a");
      var b = document.getElementById("b");
      
      // 捕获  a b 
      a.addEventListener("click", ()=>console.log("a"), true);
      b.addEventListener("click", ()=>console.log("b"), true);
      
      // 冒泡 a b b2 a2
      a.addEventListener("click", ()=>console.log("a2"), false);
      b.addEventListener("click", ()=>console.log("b2"), false);
    </script>
    ```
