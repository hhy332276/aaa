import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n/i18n'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueClipboard from 'vue-clipboard2'
import VueCookies from 'vue-cookies'
Vue.use(VueClipboard)
Vue.use(ElementUI)
Vue.use(VueCookies)
Vue.config.productionTip = false
import VueCropper from 'vue-cropper'
Vue.use(VueCropper)

new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app')
