
// vue3 导入方式
import { createApp, reactive } from 'vue'
// Toast 组件导入
import Toast from "./Toast.vue"

const toast1 = reactive(Toast)


const $toast = createApp(Toast, { toast1 }).mount(document.createElement('div'))
document.body.appendChild($toast.$el);
console.log(Toast.data);
const toast = {
  show(message, duretion) {
    Toast.message = message
    Toast.isShow = true

    setTimeout(() => {
      Toast.isShow = false
      Toast.message = ''
    }, duretion)

  },
}
export default {
  install(app) {
    app.config.globalProperties.$toast = toast
  }
}