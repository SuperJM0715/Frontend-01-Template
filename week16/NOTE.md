# 每周总结可以写在这里

手势

手势和动画 是组件的基础

第一步 实现监听器 
    把 鼠标事件和触屏事件整合在一起

    touchend 和 touchcancel 只能同时出现一个
第二步 判断四种手势
    tap
    pan-  panstart panmove panend
    flick
    press- pressstart pressend

    start->end  
        时间短 tap
        时间长 pressstart

    start->move
        pan

tips:

    let e = new CustomEvent('pan');
            Object.assign(e, {
                startX: context.startX,
                startY: context.startY,
                clientX: point.clientX,
                clientY: point.clientY
            })
            element.dispatchEvent(e);
