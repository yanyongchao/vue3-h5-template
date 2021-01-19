/**
 * 判断是否是微信浏览器
 * */
export const isWxBrowser = () => {
  const ua: string = window.navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i)) {
    return true
  } else {
    return false
  }
}
/**
 * 判断是否是支付宝浏览器
 * */
export const isAliBrowser = () => {
  const ua = window.navigator.userAgent.toLowerCase()
  if (ua.match(/alipaydefined/i)) {
    return true
  } else {
    return false
  }
}
/**
 * 判断手机是android 还是 ios
 * */
export const mobileVersion = () => {
  const u = navigator.userAgent
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
  const isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端

  if (isAndroid) {
    return 'android'
  } else if (isIos) {
    return 'ios'
  } else {
    return 'windows'
  }
}
