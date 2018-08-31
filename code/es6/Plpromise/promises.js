// promise版本的读取图片
function loadImg(src) {
    const promise = new Promise(function (resolve, reject) {
        var img = document.createElement('img')
        img.onload = function () {
            console.log('promise版本的读取图片成功')
            resolve(img)
        }
        img.onerror = function () {
            console.log('读取图片失败')
            reject()
        }
        img.src = src
    })

    return promise
}

// 调用
var src = 'https://www.imooc.com/static/img/index/logo.png'
console.log('start')
var result = loadImg(src)
result.then(function (img) {
    console.log(img.width)
}, function () {
    console.log('fail')
})

result.then(function (img) {
    console.log(img.height)
})

// Promise版本的定义写起来比较复杂，但用起来简单，很好的实现了开闭原则，
// 与之前的callback hell相比，它把过程“分开”了，一个.then做一件事，
// 整个逻辑很清晰，一旦能分开，就可以集成和扩展，方便了软件工程
