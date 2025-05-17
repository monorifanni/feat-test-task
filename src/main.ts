import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import ToastPlugin, { useToast } from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-default.css'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import i18n from './i18n/index'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ToastPlugin)
app.use(i18n)

const $toast = useToast()

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        router.push('/login')
        $toast.error(i18n.global.t('error.unauthorized'), {
          position: 'top-right',
          duration: 3000,
        })
      }
    } else {
      $toast.error(i18n.global.t('error.globalMessage'), {
        position: 'top-right',
        duration: 3000,
      })
    }
    return Promise.reject(error)
  },
)

app.mount('#app')
