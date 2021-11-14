import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import BaseCard from './components/UI/BaseCard.vue'

const app = createApp(App)
app.component('base-card', BaseCard)

app.use(store).use(router).mount('#app')
