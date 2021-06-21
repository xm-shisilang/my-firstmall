import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'swiper'
// import 'vue'

// createApp.devtools = true
createApp(App).use(store).use(router).mount('#app')
// Vue.config.devtools = true
// if (process.env.NODE_ENV === "development") {
//   alert("开发环境");
// } else {
//   alert("生产环境");
// }
