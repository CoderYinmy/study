### 面向对象

1. 设计模式分为： 静态类型和动态类型

2. 静态类型语言： 在编译时便已经确定变量的类型
3. 动态类型语言： 程序运行时，变量被赋予某个值后才会具有类型
4. 鸭子类型： 只关注对象行为，不关注对象本身

```js
let duck = {
    duckSinging: function () {
        console.log('嘎嘎嘎')
    },
}
let chicken = {
    duckSinging: function () {
        console.log('嘎嘎嘎')
    },
}
let choir = []
let joinChoir = function (animal) {
    if (animal && typeof animal === 'function') {
        choir.push(animal)
        console.log('恭喜加入合唱团')
    }
}
joinChoir(duck)
joinChoir(chicken)
```

5. 多态： 同一操作作用于不同对象上，产生不同的解释和结果

```js
var a = function (animal) {
    animal.sound()
}

var Duck = function () {}
Duck.prototype.sound = function () {
    console.log('嘎嘎嘎')
}
var Chicken = function () {}
Chicken.prototype.sound = function () {
    console.log('咯咯咯')
}
a(new Duck())
a(new Chicken())
```

6. 类型检查

-   面向对象类型一般设计为可以向上转型： 当给一个类变量赋值时，这个变量类型既可以使用这个类本身，也可以使用这个类的超类

7. 使用继承得到多态效果

-   实现继承
-   接口继承
-   java 使用可以向上转型实现多态
-   js 是一门动态类型语言（与生俱来有多态性）

8. 多态的作用

-   通过把过程化的条件分支语句转化为对象的多态性，从而消除这些条件分支语句
-   一个对象内：事先约定 ，并明确职责，各自负责自己行为
-   将行为分布在各个对象中，并让这些对象各自负责各自的行为（面向对象设计的有点）

9. 设计模式与多态

-   通过封装、继承、多态、组合等技术的反复使用，提炼出一些可以重复使用的

10. 封装

-   封装数据

```js
//通过函数创建作用于
var myObject = function () {
    var _name = 'sven' //私有（private）变量
    return {
        getName: function () {
            // 公开方法（pubilc）
            return _name
        },
    }
}
console.log(myObject.getName()) //sven
console.log(myObject._name) //undefined
//ES6 通过 Symbol创建私有属性
```

-   封装实现（不管实现过程，只要结果正确就可以）
-   封装类型 （通过抽象类和接口来进行的）
-   封装变化（将稳定和变化分开，从而达到多次复用）

11. 原型模式(找到一个对象，通过克隆来创建)

12. js 中的原型继承

-   所有数据都是对象
-   要得到一个对象，不通过实例化类，而是找到一个对象作为原型克隆他
-   对象会记住他的原型
-   如果对象无法响应某个请求，它会把这个请求委托给它的原型

- object.create()、class、prototype、new
13. new 构造器函数的过程

```js
function Person(name) {
    this.name = name
}

Person.prototype.getName = function () {
    return this.name
}
var objectFactory = function () {
    var obj = new Object(),
        Constructor = [].shift.call(arguments)
    obj.__proto__ = Constructor.prototype
    var ret = Constructor.apply(obj, arguments)
    return typeof ret === 'object' ? ret : obj
}
var a = objectFactory(Person, 'sven')
console.log(a.name)
console.log(a.getName)
console.log(Object.getPrototypeOf(a) === Person.prototype)
```

### this、call、apply