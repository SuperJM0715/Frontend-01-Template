### 1. convert string to number
```
function convertStringToNumber(string, x){
        // 二 四 八 十六  小数  e
        if(string.indexOf("e") < 0){
            if(arguments.length < 2){
                x = 10;
            }
            var chars = string.split('');
            var number = 0;
            var i = 0;
            while(i < chars.length && chars[i] !== '.'){
                number = number * x;
                number += chars[i].codePointAt(0) - '0'.codePointAt(0); //单个字符转成数字
                i++;
            }
            if(chars[i] === '.'){
                i++;
            }
            var fraction = 1;
            while(i < chars.length){
                fraction = fraction / x;
                number += (chars[i].codePointAt(0) - '0'.codePointAt(0)) * fraction; 
                i++;
            }
        }else{
            var eChars = string.split('e');
                var left = Number(eChars[0]);
                var right = Number(eChars[1]);
                number = left * Math.pow(10, right);
        }
        return number;
    }
    convertStringToNumber("10.02");
```

### 2. convert number to string
```
    // 小数（考虑无限循环）     指数
    function convertNumberToString(number, x){
        var integer = Math.floor(number);
        var fraction = String(number).match(/\.\d+$/);
        fraction && fraction = fraction[0].replace('.','');
        var string = '';
        while(integer > 0){
            string = String(integer % x) + string;
            integer = Math.floor( Number(integer / x));
        }
        return fraction ? `${string}.${fraction}` : string;
    }
```

### 3. find special objects in JavaScript
```
        Bound Function：跟原来的函数相关联
        
        Array：Array 的 length 属性根据最大的下标自动发生变化。
        
        String：为了支持下标运算，String 的正整数属性访问会去字符串里查找。
        
        Arguments：arguments 的非负整数型下标属性跟对应的变量联动。
        
        Integer-Indexed: performs special handling of integer index property keys.
                         跟内存块相关联，下标运算比较特殊。（类型数组和数组缓冲区）
        
        Module Namespace：特殊的地方非常多，跟一般对象完全不一样，尽量只用于 import 吧。
        
        Immutable Prototype:  [[Prototype]] 一旦初始化便不会再改变， 
                              [[SetPrototypeOf]] ，SetImmutablePrototype
                              作为所有正常对象的默认原型，不能再给它设置原型了。   
```
