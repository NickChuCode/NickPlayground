// 1. 使用IIFE，避免全局污染，同时传入全局变量
(function (window) {

    var zepto = {}

    // 6. 所以这个是真正的构造函数
    // 这里要做的是把所有的dom元素，length和selector都挂载到实例对象下
    function Z(dom, selector) {
        var i, len = dom ? dom.length : 0
        for (i = 0; i < len; i++) {
            this[i] = dom[i]
        }
        this.length = len
        this.selector = selector
    }

    // 5. zeoto.Z 返回一个构造函数Z的实例（所以内部的Z是真正的构造函数）
    zepto.Z = function(dom, selector) {
        return new Z(dom, selector)
    }

    // 3. 定义zepto的初始化
    zepto.init = function(selector) {
        // 4. 这里做了简化，真实的要复杂一些
        // Array.prototype.slice.call(arguments)能将具有length属性的对象转成数组
        var slice = Array.prototype.slice
        var dom = slice.call(document.querySelector(selector))
        return zepto.Z(dom, selector)
    }

    // 2. 初始化zepto实例，并把它挂载到全局变量中，方便调用
    var $ = function(selector) {
        return zepto.init(selector)
    }
    // 7. 在这里定义$.fn，表示$的所有方法，然后将其赋值给Z.prototype
    $.fn = {
        css: function(key, value){},
        html: function (key, value) {}
    }

    Z.prototype = $.fn
    
    window.$ = $

})(window)
