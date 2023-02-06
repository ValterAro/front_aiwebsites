import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from "vue-axios";
import axios from "axios";

Vue.use(VueAxios, axios);
createApp(App).use(router).mount('#app')
