import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import $ from 'jquery'
import 'bootstrap'
import 'swiper/dist/css/swiper.css'



Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
	router,
    render: h => h(App),
}).$mount('#app')
