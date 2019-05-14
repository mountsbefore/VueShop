import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

require("./mock.js")

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
