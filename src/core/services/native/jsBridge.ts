function setupWebViewJavascriptBridge (callback: Function) {
  const u = navigator.userAgent
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
  if (isAndroid) {
    if (window.WebViewJavascriptBridge) {
      callback(window.WebViewJavascriptBridge)
    } else {
      document.addEventListener('WebViewJavascriptBridgeReady', () => {
        callback(window.WebViewJavascriptBridge)
      }, false)
    }
  } else {
    if (window.WebViewJavascriptBridge) {
      return callback(window.WebViewJavascriptBridge)
    }
    if (window.WVJBCallbacks) {
      return window.WVJBCallbacks.push(callback)
    }
    window.WVJBCallbacks = [callback]
    const WVJBIframe = document.createElement('iframe')
    WVJBIframe.style.display = 'none'
    WVJBIframe.src = 'https://__bridge_loaded__'
    document.documentElement.appendChild(WVJBIframe)
    setTimeout(() => {
      document.documentElement.removeChild(WVJBIframe)
    }, 0)
  }
}

/**
 * @func 调用原生的方法
 * @param {String} fun 桥接名
 * @param {Object} params 参数
 * @param {Bollean} hasCallback 原生是否执行我们的回调函数
 * @author yyc
 */
function invoke (fun: string, params: any, hasCallback = false) {
  console.log('invoke', fun, params)
  return new Promise<void>((resolve, reject) => {
    try {
      setupWebViewJavascriptBridge(function (bridge: any) {
        bridge.callHandler(fun, params, function (res: any) {
          // 如果有回调就从回调中resolve
          console.log('*******', res)
          if (typeof res === 'string' && /^\{.+\}$/.test(res)) {
            res = JSON.parse(res)
          }
          hasCallback && resolve(res)
        })
      })
      // 如果没有回调就直接resolve
      !hasCallback && resolve()
    } catch (err) {
      reject(err)
    }
  })
}

/**
 * @func 原生调用我们的方法
 * @param {String} name 桥接名
 * @author yyc
 */
function register (name: string) {
  return new Promise((resolve, reject) => {
    try {
      setupWebViewJavascriptBridge((bridge: any) => {
        bridge.registerHandler(name, (res: any) => {
          resolve(typeof res === 'string' ? JSON.parse(res) : res)
        })
      })
    } catch (err) {
      reject(err)
    }
  })
}

export {
  invoke,
  register
}
