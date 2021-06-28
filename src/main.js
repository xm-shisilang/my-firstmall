import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'swiper'
// import 'vue'

// createApp.devtools = true
createApp(App).use(store).use(router).mount('#app')
