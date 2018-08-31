// 这是构造函数
function MathWorks(x, y) {
    this.x = x
    this.y = y
}

// 这是对构造函数原型的扩展
MathWorks.prototype.add = function () {
    return this.x + this.y
}

// 下面是构造函数的使用方法
var m = new MathWorks(1, 2)
console.log(m.add())
