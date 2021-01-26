import { App } from 'vue'
import router from '@/router'
import vuePageStack from './vuePageStack'

let isInstall = false

const install = (app: App) => {
  if (!isInstall) {
    isInstall = true
    app.use(vuePageStack, { router })
  }
}

export default {
  install
}
