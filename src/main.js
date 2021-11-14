import { createApp, defineAsyncComponent } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

const store = createStore({
  state () {
    return {
      counter: 0
    }
  }
})
const BaseCard = defineAsyncComponent(() => import('./components/UI/BaseCard.vue'))
const app = createApp(App)
app.component('base-card', BaseCard)

app.use(store).use(router).mount('#app')
