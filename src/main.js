import { createApp } from 'vue'
import MasterView from './views/MasterView.vue'
import router from './router'
import store from './store'

createApp(MasterView).use(store).use(router).mount('#app')
