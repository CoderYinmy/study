# 继承

在现实中我们的说法是子承父业，在计算机里是子类继承父类的方法和属性，重新定义、追加属性和方法

### 原型链继承

```JS
    function father() {
        this.list = [1,2,3]
        this.name = 'www'
    }
    function child() {}

    child.prototype = new father
    child.prototype.construtor = child

    let child1 = new child()
    let child2 = new child()

    child1.list.push(4)
    child2.name = 'sss'
    console.log(child1.list, child1.name,child2.list,child2.name)
    //child.prototype 没有constructor 需要重新指向当前构造函数
```

### 借用构造函数继承

```JS
    function father(name) {
        this.list = [111,222,333]
        this.name = name
    }
    function Child(name) {
        father.call(this, name)
    }

    let child1 = new Child('这是child  1')
    let child2 = new Child('这是child  2')

    console.log(child1.list,child1.name,child2.list,child2.name,)
```

### 组合继承

```JS
    function father(name){
        this.list = [111,222,333]
        this.name = name
    }
    father.prototype.say = function(){
        console.log('its father say')
    }

    function Child(name) {
        father.call(this, name)
    }

    Child.prototype = new father()
    Child.prototype.constructor = Child

    let child1 = new Child('child 1')
    let child2 = new Child('child 2')

    console.log(child1.name,child1.list,child2.name,child2.list,child1.say == child2.say)

```

### 原型式继承

```JS
    let person = {
        name:'111',
        list: [1,2,3]
    }
    let obj1 = Object.create(person)
    obj1.name = 'wj'
    obj1.list.push(4)
    let obj2 = Object.create(person)
    obj2.name = 'lj'
    obj2.list.push(5)
    console.log(obj1.name,obj1.list,obj2.name, obj2.list)

```

### 寄生式继承

```JS
    function createObj(obj){
        let clone = Object.create(obj)
        clone.sayHi = function(){
            console.log('sayHi')
        }
        return clone
    }
```

### 寄生式组合继承

```JS
    function father(name) {
        this.list = [1,2,3]
        this.name = 'lj'
    }
    father.prototype.say = function(){
        console.log('its father say')
    }
    function Child(name, like) {
        father.call(this, name, like)
        this.like = like
    }
    Child.prototype = Object.create(father.prototype)
    Child.prototype.constructor = Child
    let child1 = new Child()
    console.log(child1.list, child1.name,child1.like)

```

### class 继承

```JS
    class Father {
        constructor(){}
        say() {
            console.log('father say')
        }
    }
    class Son extends Father {}
    let son1 = new Son()
    son1.say()

    //class 就近原则
    class Father {
        say(){
            console.log('Father Say')
        }
    }

    class Son extends Father{
        say(){
            console.log('Father2 Say')
        }
    }
    let son1 = new Son()
    son1.say()

    //
    class Father {
        constructor(name,age){
            this.name = name
            this.age = age
        }

        intro(){
            console.log(this.name, this.age)
        }
    }

    class Son extends Father{
        constructor(name,age){
            super(name, age)//解决this报错（调用父类构造函数）
        }
    }
    let son1 = new Son('wj', 18)
    son1.intro()

```
