import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import axios from 'axios'
import '@/assets/font/font.css'
// 注册全局组件
Vue.use(ElementUI)
// 将提醒关掉
Vue.config.productionTip = false

// 设置axios请求的基础路径
// axios.defaults.baseURL = 'http://127.0.0.1:8888/'
axios.defaults.baseURL = 'http://yxianlin.f3322.net:8888/'
// axios.defaults.baseURL = 'http://api.shuxinxin.top:8888/'
// 设置axios别名
Vue.prototype.$axios = axios
// 设置axios携带的Token
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')

new Vue({
  // 挂载路由对象(相当于 router:router)
  router,
  render: h => h(App)
}).$mount('#app')
