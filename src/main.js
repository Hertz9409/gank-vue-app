import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import infiniteScroll from 'vue-infinite-scroll'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
import VueProgressBar from 'vue-progressbar'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'

Vue.config.productionTip = false
Vue.use(infiniteScroll)
Vue.use(VueLazyload, {
  error: require('./assets/404.jpg'),
  attempt: 1
})
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})
Vue.use(Viewer)
// 导航守卫
router.beforeEach((to, from, next) => {
  console.log(Vue.prototype)
  if (to.meta.progress !== undefined) {
    let meta = to.meta.progress
    Vue.prototype.$Progress.parseMeta(meta)
  }
  Vue.prototype.$Progress.start()
  store.commit('updateModular', to.name)
  next()
})
router.afterEach((to, from) => {
  Vue.prototype.$Progress.finish()
})
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
