const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const webpack = require('webpack'); //访问内置的插件
const path = require('path');  //无法被浏览器识别，但是loaders编译过后可以变成浏览器可识别的。在Node环境中可以直接运行
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); //压缩
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// var ManifestPlugin = require('webpack-manifest-plugin');

//开发环境
const config = {
  mode:'development',
  entry: './import.ts',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    publicPath:'/',
    chunkFilename: '[name]-[id].js',
  },
  devtool: 'inline-source-map',
  devServer:{
    contentBase:'./bulid',
    historyApiFallback:true,
    port:'8000',
    inline:true,
    compress: true,
    hot:true
  },
  //监听配置,想要提升webapck-dev-server的监听更改速度，但是实际上并没有用.....
  watchOptions: {
    aggregateTimeout: 300,
    ignored:/node_modules/
    // poll: 1000
  },
  resolve: {
    extensions: [ '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
   rules: [
     {
        test: /\.tsx?$/,
        use: ['ts-loader']
     },
     // {
     //    test:/\.(png|jpg|gif)$/,
     //    loaders:[
     //    //小于8k的图片编译为base64，大于10k的图片使用file-loader
     //    'url-loader?limit=8192&name:img/[name]-[hash:5].[ext]',
     //    //图片压缩
     //    'image-webpack-loader'
     //    ]
     //  },
     // {
     //    test:/\.css$/,
     //    use: ['style-loader', 'css-loader']
     // },
     // {
     //    test: /\.(js|jsx)$/,
     //    use: ['babel-loader']
     // }
   ]
  },
  plugins: [
    // new CleanWebpackPlugin(['build']),  //打包前清理文件;
    new webpack.BannerPlugin('版权所有，哈哈哈哈哈哈哈哈哈哈哈哈哈'),
    // new UglifyJSPlugin({
    //    sourceMap: true
    // }),//压缩
    new HtmlWebpackPlugin({
      template:'./template.html'
    }),//创建html页面  https://www.cnblogs.com/wonyun/p/6030090.html 详解配置设置模板，输出位置，多个HTML页面
    new webpack.NamedModulesPlugin(),
    //热更新时，模块名字更加友好
    new webpack.HotModuleReplacementPlugin(),
    //热更新，启动后别再命令行中添加 --hot  要不然会报maximum call stack size exceeded错误(栈溢出)；
    // new ManifestPlugin()
  ]
}


module.exports = config;
