import Vue from 'vue'
import axios from 'axios'
axios.defaults.baseURL = 'https://curso-vue-4b6e7-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue){
        Vue.prototype.$htpp = axios

    }
})
