import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../node_modules/semantic-ui-css/semantic.min.css'

import Ads from 'vue-google-adsense'

import VueLocalStorage from 'vue-localstorage'

import './registerServiceWorker'

Vue.use(VueLocalStorage)

Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
