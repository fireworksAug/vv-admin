import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// iView 库
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// i18n
import i18n from './lang';
//icons
import './icons'
//config
import config from './config';
// mock
if(process.env.NODE_ENV === 'development') {
  require('./mock')
}
Vue.prototype.$config = config;
Vue.config.productionTip = false;
Vue.use(iView);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
