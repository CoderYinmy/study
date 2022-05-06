class animal {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
}
class Dog extends animal {
    constructor(name) {
        super(name)
    }
    speak() {
        return 'woof'
    }
}

var dog = new Dog('scamp')
console.log(dog.getName(), dog.speak())
