import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'swiper'
import FastClick from "fastclick"
import VueLazyLoadNext from "vue-lazyload-next"
FastClick.attach(document.body)

// createApp(App).use(VueLazyLoad)
createApp(App).use(store).use(router).use(VueLazyLoadNext, {
  preLoad: 1.3,
  // error: errorimage,
  loading: require('@/assets/img/common/placeholder-xm.png'),
  attempt: 1
}).mount('#app')


