// 这是传统的回调函数写法
function loadImg(src, callback, failure) {
    var img = document.createElement('img')
    img.onload = function () {
        callback(img)
    }
    img.onerror = function () {
        failure(img)
    }

    img.src = src
}

// 调用
var src = 'https://www.imooc.com/static/img/index/logo.png'
loadImg(src, function (img) {
    console.log('读取图片成功')
    console.log(img.width)
}, function (img) {
    console.log('failed')
})
