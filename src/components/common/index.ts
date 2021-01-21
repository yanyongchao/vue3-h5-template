import { App } from 'vue'
import FsLayout from './fs-layout'

const isInstall = false

const install = (app: App) => {
  if (!isInstall) {
    app.use(FsLayout)
  }
}

export default {
  install
}
