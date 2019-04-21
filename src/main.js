import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as filters from '@/utils/filters'
import VueTimeago from 'vue-timeago'

Vue.config.productionTip = false

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(VueTimeago, {
  name: 'Timeago', // Component name, `Timeago` by default
  locale: 'en', // Default locale
  // We use `date-fns` under the hood
  // So you can use all locales from it
  locales: {
    'tr-TR': require('date-fns/locale/tr')
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
