import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as filters from '@/utils/filters'

Vue.config.productionTip = false

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
