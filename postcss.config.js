/**
 * https://www.cnblogs.com/zhangnan35/p/12682925.html
 */
const path = require('path')

module.exports = ({ file }) => {
  const designWidth = file.dirname.includes(path.join('node_modules', 'vant')) ? 375 : 750

  return {
    plugins: {
      autoprefixer: {},
      'postcss-px-to-viewport': {
        unitToConvert: 'px',
        viewportWidth: designWidth,
        unitPrecision: 6,
        propList: ['*'],
        viewportUnit: 'vw',
        fontViewportUnit: 'vw',
        selectorBlackList: ['ignore'],
        minPixelValue: 1,
        mediaQuery: true,
        exclude: [],
        landscape: false
      }
    }
  }
}
