// es6版本的类继承
class Animal {
    constructor(name) {
        this.name = name
    }

    eat() {
        console.log(`${this.name} eat`)
    }
}

class Dog extends Animal{
    constructor(name){
        super(name)
    }

    bark() {
        console.log(`${this.name} bark`)
    }
}

// 调用
var m = new Dog('kitty')
m.eat()
m.bark()

//类的继承写法更易懂一些
