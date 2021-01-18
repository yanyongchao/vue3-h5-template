import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vconsole from 'vconsole'

// eslint-disable-next-line no-new
new Vconsole()

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
