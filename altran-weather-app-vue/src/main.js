import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import moment from 'vue-moment'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/es'

// require styles swiper
import 'swiper/dist/css/swiper.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faSignOutAlt, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* Librerías (Third Party) */
// Axios
axios.defaults.baseURL = 'http://api.openweathermap.org/data/2.5'
Vue.use(VueAxios, axios)

// Swiper
Vue.use(VueAwesomeSwiper, {
  slidesPerView: 3,
  spaceBetween: 30
})

// Moment
Vue.use(moment)

// Element
Vue.use(ElementUI, { locale })

// Font Awesome
library.add(faEye, faSignOutAlt, faSun)
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
