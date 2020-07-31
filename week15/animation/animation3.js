export class Timeline {
    constructor(){
        this.animations = [];
    }
    tick(){
        let t = Date.now() - this.startTime;
        let animations = this.animations.filter(animation => !animation.finished);
        console.log(t)
        for(let animation of this.animations){
            
            let {object, property, template, start, end, duration, timingFunction, delay} = animation;

            let progression = timingFunction((t - delay)/duration); // 0-1 之间的数

            // 解决 1.js 中，对不齐的问题
            if(t > animation.duration + animation.delay){
                progression = 1;
                animation.finished = true;
            }
            let value = start + progression * (end - start);
            // object[property] = template(timingFunction(start, end)(t - delay));
            object[property] = template(value);
        }
        if(animations.length){
            requestAnimationFrame(()=> this.tick())
        }
    }
    start(){
        this.startTime = Date.now();
        this.tick();
    }

    add(animation){
        this.animations.push(animation);
    }
}

export class Animation{
    constructor(object, property, template, start, end, duration, delay, timingFunction){
        this.object = object;
        this.property = property;
        this.template = template;
        this.start = start;
        this.end = end;
        this.duration = duration;
        this.delay = delay;
        this.timingFunction = timingFunction;
    }
}