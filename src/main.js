import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/element-ui'; // 引入element
import 'element-ui/lib/theme-chalk/index.css'; // 引入elementui样式
import '@/assets/scss/index.scss'; // 引入全局scss样式
import i18n from './i18n'
import './single-spa-config.js'

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');