/*CommonJS定义的模块分为:{模块引用(require)} {模块定义(exports)} {模块标识(module)}*/
/*require()用来引入外部模块；exports对象用于导出当前模块的方法或变量，唯一的导出口；module对象就代表模块本身。*/
/*CommonJS是主要为了JS在后端的表现制定的，他是不适合前端的*/
/*entry支持三种格式:1.字符串 2.字符串数组 3.对象.
    对象的键就是chunk,值就是输入文件路径*/
/*output的filename支持三种占位符:[name]对象的key  [hash]打包hash值  [chunkhash]文件的hash值,文件改变才会改变*/

/*commonJS模块引用*/
var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

/*commonJS模块化的输出*/
module.exports = {
    entry: './src/app.js',
    output: {
        path: './dist',
        filename: 'js/[name].bundle.js',  //增加一个相对路径
    },
    module: {
        loaders: [
            //babel  是一个 JavaScript 编译器  用于将项目中的es6转化为浏览器支持的js文件
            {
                test: /\.js$/,
                loader: 'babel',
                //include: './src',   //指定打包范围
                //exclude: './node_modules',  //babel在处理语法转化的时候非常耗时,拖慢打包速度,exclude可以将某些文件排除打包
                include: path.resolve(__dirname, 'src'),      //路径的另一种写法,利用node的方法将相对路径转化为绝对路径,认识一下就好
                exclude: path.resolve(__dirname, 'node_modules'),
                query: {
                    presets: ['latest']         //babel的各个年代版本支持插件
                }
            },
            {
                test: /\.css$/,
                //loader: 'style-loader!css-loader',  //首先用css-loader处理,通过这个就可以在Js中处理css !使两个loader串联起来 处理过后的文件可以在style-loader处理下生成style标签插入到html中
                loader: 'style-loader!css-loader?importLoaders=1!postcss-loader',
            },
            {
                test: /\.less$/,
                loader: 'style!css!postcss!less'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.ejs$/,
            }
        ]
    },
    postcss: [
        //autoprefixer插件,postcss插件之一,对css样式进行浏览器兼容(浏览器前缀)
        require('autoprefixer')({
            broswers: ['last 5 versions']
        })
    ],
    /**
     * webpack插件  简单创建 HTML 文件，用于服务器访问
     * template HTML的模版文件 路径是context(上下文) 代表的路径
     * filename  生成的文件名
     * inject  script标签所在的位置
     * title date  设置参数传到html中
     */
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',   //生成的html文件名
            template: 'index.html',
            inject: 'body',
        })
    ]
}