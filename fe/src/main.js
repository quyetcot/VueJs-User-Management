import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

createApp(App).use(Buefy).use(router).use(store).mount('#app')
