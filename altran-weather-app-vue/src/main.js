// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// Config Variables Sass to Element-UI and Compile .css
// import '@/assets/scss/custom-element-theme.scss'
import locale from 'element-ui/lib/locale/lang/es'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faTimes, faSignOutAlt, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* Librerías (Third Party) */
Vue.use(VueAxios, axios)
Vue.use(ElementUI, { locale })

library.add(faCheck, faTimes, faSignOutAlt, faSun)
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
