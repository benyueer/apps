const MonacoEditorWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  runtimeCompiler: true,
  // ...
  // chainWebpack: config => {
  //   config.plugins.push(new MonacoEditorWebpackPlugin({
  //     languages: ['sql']
  //   }));
  // }
  // configureWebpack: {
  //   plugins: [new MonacoEditorWebpackPlugin({
  //     languages: ['sql']
  //   })]
  // },
  // chainWebpack: config => {
  //   config.module
  //   .rule('css')
  //   .test(/\.css$/)
  //   .use(['style-loader', 'css-loader'])
  //   config.module
  //   .rule('ttf')
  //     .test(/\.(png|jpg|gif|svg|ttf)$/)
  //     .use('file-loader')
  //       .tap(options => {
  //         // 修改它的选项...
  //         return options
  //       })
  // }
  chainWebpack: config => {
    config.plugin('monaco-editor').use(MonacoEditorWebpackPlugin, 
    //   [
    //   {
    //     // Languages are loaded on demand at runtime
    //     languages: ['json', 'javascript', 'html', 'xml']
    //   }
    // ]
    )
  }
}