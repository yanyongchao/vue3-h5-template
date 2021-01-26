import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import globalComponents from '@/components/common'
import plugins from '@/plugins'
import routerEach from '@/router/settings'
import 'vant/lib/index.css'
import '@/assets/styles/index.scss'

createApp(App)
  .use(store)
  .use(router)
  .use(plugins)
  .use(routerEach, { router })
  .use(Vant)
  .use(globalComponents)
  .mount('#app')
