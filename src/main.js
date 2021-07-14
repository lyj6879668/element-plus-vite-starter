import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/reset.css'
import './style/index.less'

// plugin
import D from 'dayjs'

import { useElementPlus } from "../src/plugins/element-plus";

const app = createApp(App)
app.use(router).use(store).use(useElementPlus).mount('#app')
// 配置element的size属性
app.config.globalProperties.$ELEMENT = {
  size: 'mini'
}
app.config.globalProperties.$D = D
