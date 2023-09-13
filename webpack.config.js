const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
module.exports = {
  entry:{
    index:'./src/index.js',
    index_2:'./src/index_2.js'},
  output:{
    filename:'[name]-bundle.js',
    path: path.resolve(__dirname,'dist')
  },
  devServer:{
    // contentBase: path.join(__dirname,'dist'),
    compress:true,
    port:9000
  },
  plugins:[
    new CompressionPlugin({
      filename:"[path].gz[query]",
      algorithm:"gzip",
      test: /\.(js)$/,
      threshold:10,
      minRatio:0.05
    }),
    new HtmlWebpackPlugin({
      chunks:['index'],
      filename:'index.html',
      minify:{
        collapseWhitespace:false
      },
      hash:true,
      title:'i hate webpack',
      template:'./src/index.html'
    }),
    new HtmlWebpackPlugin({
      chunks:['index_2'],
      filename:'index_2.html',
      minify:{
        collapseWhitespace:false
      },
      hash:true,
      title:'i hate webpack',
      template:'./src/index_2.html'
    })
  ]
}