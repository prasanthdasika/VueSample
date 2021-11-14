import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import BaseCard from './components/UI/BaseCard.vue'

const store = createStore({
  state () {
    return {
      counter: 0
    }
  }
})

const app = createApp(App)
app.component('base-card', BaseCard)

app.use(store).use(router).mount('#app')
