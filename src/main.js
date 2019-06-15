import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'

import { createProvider } from './vue-apollo'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
