import { App } from 'vue'
import router from '@/router'
import vuePageStack from './vuePageStack'
import errorCapture from './errorCapture'

let isInstall = false

const install = (app: App) => {
  if (!isInstall) {
    isInstall = true
    app.use(vuePageStack, { router })
    app.use(errorCapture)
  }
}

export default {
  install
}
