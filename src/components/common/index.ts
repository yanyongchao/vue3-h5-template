import { App } from 'vue'
import FsLayout from './fs-layout'

let isInstall = false

const install = (app: App) => {
  if (!isInstall) {
    isInstall = true
    app.use(FsLayout)
  }
}

export default {
  install
}
