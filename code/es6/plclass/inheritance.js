// 构造函数的写法
function Animal() {
    this.eat = function () {
        console.log('eat food')
    }
}

function Dog() {
    this.bark = function () {
        console.log('wangwang')
    }
}

//继承
Dog.prototype = new Animal() // 注意是继承的是new出来的对象

// 调用
aDog = new Dog()
console.log(aDog.eat())
console.log(aDog.bark())
