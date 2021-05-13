import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { useElementPlus } from "../src/plugins/element-plus";

const app = createApp(App)
app.use(router).use(useElementPlus).mount('#app')
