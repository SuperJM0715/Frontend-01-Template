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
         
    @keyframes mykf{
      0% { top: 0; transition: top ease }
      50% { top: 30px; transition:top ease-in }
      75% { top: 10px; transition: top ease-out }
      100% { top: 0; transition: top linear }
    }
    
### Transition
* 要变换的属性 transition-property
* 变换的时长 transition-duration
* 时间曲线 transition-timing-function
* 延迟 transition-delay
### 颜色
* CMYK：Cyan-青色，Magenta-品红，Yellow-黄色，blacK-黑色
* RGB：Red-红色，Green-绿色，Blue-蓝色
* HSL：Hue-颜色（0-360），Saturation-饱和度（0-100%）,Lightness-亮度（0-100%，黑-白）
* HSV：Hue-颜色（0-360），Saturation-饱和度（0-100%），Value-明度（0-100%，黑-白）

### 形状
* data:image/svg+xml,<svg>...</svg>

### HTML
#### 合法元素
* DocumentType: <!Document html>
* ElementL: <tag></tag>
* Text: text
* Comment: <!-- xxx -->
* ProcessingInstruction: <?a 1?>
* CDATA: <![CDATA[]]>
#### 字符引用
* &#161; = !
* &amp; = &
* &lt; = <
* &gt; = >
* &quot; = "
### DOM
#### 导航类操作
* parentNode
* childNodes
* firstChild
* lastChild
* nextSibling
* previousSibling
#### 修改操作
* appendChild
* insertBefore
* removeChild
* replaceChild
#### 高级操作
* compareDocumentPosition：比较两个节点的位置关系
* contains：是否包含另一个节点
* isEqualNode：两个节点是否完全相同
* cloneNode(deep)：拷贝一个节点，支持深度拷贝
#### 事件
捕获
冒泡
