import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue' // 追加
import 'bootstrap/dist/css/bootstrap.css' // 追加
import 'bootstrap-vue/dist/bootstrap-vue.css' // 追加
import VueScrollTo from 'vue-scrollto' // 追加

Vue.config.productionTip = false
Vue.use(BootstrapVue) // 追加
Vue.use(VueScrollTo) // 追加

new Vue({
  render: h => h(App)
}).$mount('#app')
