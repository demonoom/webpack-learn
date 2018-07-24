require('./world')  //commonJs的方式
// require('style-loader!css-loader!./style.css')  //css-loader使webpack可以处理css文件,style-loader把处理后的文件加入html中
require('./style.css')

function hello(str) {
    alert(str)
}

hello('hello noom!!!')