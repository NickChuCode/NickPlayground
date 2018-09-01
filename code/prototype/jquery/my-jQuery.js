// 1. 使用IIFE，避免全局污染，同时传入全局变量
(function (window) {


    jQuery.fn = {}

    // 4.完成具体的构造函数
    var init = jQuery.fn.init = function (selector) {
        var slice = Array.prototype.slice
        var dom = slice.call(document.querySelector(selector))

        var i, len = dom ? dom.length : 0
        for (i = 0; i < len; i++) {
            this[i] = dom[i]
        }
        this.length = len
        this.selector = selector || ''
    }

    // 3. 然后补全jQuery，实际就是把一个构造函数的new过程封装了起来
    var jQuery = function (selector) {
        return new jQuery.fn.init(selector)
    }


    // 将这些方法挂载到构造函数的原型中（方便后面的插件机制，随时可以导入新的方法）
    init.prototype = jQuery.fn

    // 2. 初始化jquery实例，并把它挂载到全局变量中，方便调用
    window.$ = jQuery
})(window)
