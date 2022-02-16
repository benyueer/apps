import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from './store'
import defineComp from './custorm-components'

createApp(App).use(store).use(router).use(defineComp).mount('#app')
