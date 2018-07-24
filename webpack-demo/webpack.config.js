/*CommonJS定义的模块分为:{模块引用(require)} {模块定义(exports)} {模块标识(module)}*/
/*require()用来引入外部模块；exports对象用于导出当前模块的方法或变量，唯一的导出口；module对象就代表模块本身。*/
/*CommonJS是主要为了JS在后端的表现制定的，他是不适合前端的*/
/*entry支持三种格式:1.字符串 2.字符串数组 3.对象.
    对象的键就是chunk,值就是输入文件路径*/
/*output的filename支持三种占位符:[name]对象的key  [hash]打包hash值  [chunkhash]文件的hash值,文件改变才会改变*/

/*commonJS模块引用*/
var htmlWebpackPlugin = require('html-webpack-plugin');

/*commonJS模块化的输出*/
module.exports = {
    // entry: ['./src/script/main.js', './src/script/a.js'],   //打包入口
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js'
    },
    output: {
        path: './dist',
        filename: 'js/[name]-[chunkhash].js'
    },
    /**
     * webpack插件  简单创建 HTML 文件，用于服务器访问
     * template HTML的模版文件 路径是context 代表的路径
     * filename  生成的文件名
     * inject  script标签所在的位置
     */
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index-[hash].html',
            inject: 'head'
        })
    ]
}