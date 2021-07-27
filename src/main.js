import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/reset.css'
import './style/index.less'

// error
// import './utils/error'
// plugin
import D from 'dayjs'
import {TinyEmitter} from "tiny-emitter";

import { useElementPlus } from "../src/plugins/element-plus";

const app = createApp(App)
app.use(router).use(store).use(useElementPlus).mount('#app')
// 配置element的size属性
app.config.globalProperties.$ELEMENT = {
  size: 'mini'
}
app.config.globalProperties.$D = D
app.config.globalProperties.emitter = new TinyEmitter()
app.config.errorHandler = (err,vm,info) => {
  console.log('通过vue errorHandler捕获的错误:',{err,vm,info})
}