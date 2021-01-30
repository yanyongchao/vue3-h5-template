import { App } from 'vue'
import FsLayout from './fs-layout'
import FsChild from './fs-child'

let isInstall = false

const install = (app: App) => {
  if (!isInstall) {
    isInstall = true
    app.use(FsLayout)
    app.use(FsChild)
  }
}

export default {
  install
}
