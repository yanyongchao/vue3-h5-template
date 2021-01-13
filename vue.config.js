const path = require('path')
const StyleLintPlugin = require('stylelint-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 基本路径
  publicPath: '/',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // webpack配置
  chainWebpack: config => {
    config.resolve.alias
      .set('assets', resolve('src/assets'))
  },
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        // 正则匹配想要lint监测的文件
        files: ['src/**/*.vue', 'src/**/*.(s|l)?(e|c)ss'],
        fix: true
      })
    ]
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://mock.wxy-zc-forever.com/mock/5d396d9fbeb3de22d3a7247d/fs-vue-mobile',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
