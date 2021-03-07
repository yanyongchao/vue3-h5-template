import { App } from 'vue'
import report from '@/utils/report'

const errorCapturePlugin = {
  install (app: App) {
    app.config.errorHandler = (err: any, vm, info) => {
      console.log(err, vm, info)
      // report.log('出错了')
    }
  }
}

export default errorCapturePlugin
