const path = require('path')
const Webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const VConsolePlugin = require('vconsole-webpack-plugin')
// 删掉未引用的文件
// const UselessFileWebpackPlugin = require('useless-files-webpack-plugin')
const NODE_ENV = process.env.NODE_ENV || 'development'
const IS_PROD = NODE_ENV === 'production'

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
  productionSourceMap: false,
  // webpack配置
  chainWebpack: config => {
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
    config.optimization
      .minimizer('terser')
      .tap(args => {
        Object.assign(args[0].terserOptions.compress, {
          // eslint-disable-next-line @typescript-eslint/camelcase
          pure_funcs: ['console.log']
        })
        return args
      })
    config.resolve.alias
      .set('assets', resolve('src/assets'))
  },
  configureWebpack: () => {
    let plugins = [
      new StyleLintPlugin({
        // 正则匹配想要lint监测的文件
        files: ['src/**/*.vue', 'src/**/*.(s|l)?(e|c)ss'],
        fix: true
      }),
      new VConsolePlugin({
        filter: [],
        enable: process.env.VUE_APP_MODE !== 'production'
      })
    ]
    if (IS_PROD) {
      plugins = [
        ...plugins,
        // 压缩
        new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: /\.(js|css)$/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据压缩
          deleteOriginalAssets: false, // 不删除源文件
          minRatio: 0.8 // 压缩比
        }),
        new Webpack.DllReferencePlugin({
          context: process.cwd(),
          manifest: require('./public/vendor/vendor-manifest.json')
        })
        // new UselessFileWebpackPlugin({
        //   root: path.resolve(__dirname, './src/assets/images'),
        //   clean: true,
        //   exclude: /node_modules/
        // })
      ]
    }
    return {
      devtool: !IS_PROD ? 'source-map' : false,
      plugins
    }
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
