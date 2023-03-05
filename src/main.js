import { createApp } from 'vue'
import App from '../src/Views/Pages/App.vue'

import router from "../src/Router/index"

createApp(App).use(router).mount('#app')
