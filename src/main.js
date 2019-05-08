// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import semantic from 'semantic'
import '../node_modules/semantic-ui-css/semantic.min.css'

import Ads from 'vue-google-adsense'

import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)

Vue.use(require('vue-script2'))

Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
