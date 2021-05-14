import axios from 'axios'
import {getToken} from "../storage/cookie";

const base_url = import.meta.env.VUE_APP_BASE_API
const config = {
  baseURL: base_url, // url = base url + request url
  withCredentials: true, // 跨域请求是否允许发送cookie
  timeout: 10000, // 超时设置
}
const service = axios.create(config)
service.interceptors.request.use((config) => {
  //设置content-type
  if (config.dataType && config.dataType.toLowerCase() == 'form') {
    config.headers['Accept'] = 'application/x-www-form-urlencoded';
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  }
  //token处理
  if (getToken()) {
    config.headers['X-Access-Token'] = getToken();
  }

  return config
})
service.interceptors.response.use((response) => {
  const res = response.data
  return res
})

export default service