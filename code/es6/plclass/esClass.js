// es6 的class 写法
class MathWorks {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    add() {
        return this.x + this.y
    }
}

// class的调用方法
var m = new MathWorks(1, 2)
console.log(`class的结果是${m.add()}`)

// 但实际上，class只不过是一个语法糖，为什么这么说？
console.log(`class的类型仍然是${typeof MathWorks}`)
console.log(`而且所谓类和类的prototype的constructor属性的对比是${MathWorks === MathWorks.prototype.constructor}, 这与构造函数的写法是一致的`)

// 这种语法糖的写法见仁见智，对于C++, JAVA程序员来说，可能会比较好理解，但它掩盖了JS的特殊性和灵活性
