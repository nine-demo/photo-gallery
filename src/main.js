import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './registerServiceWorker'
import './plugins/iview.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
