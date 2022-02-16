import Vue from 'vue'
import App from './App.vue'
import ace from 'ace-builds'

Vue.config.productionTip = false
Vue.use(ace)
Vue.directive('highlight', () => {
  // eslint-disable-next-line no-debugger
  debugger
})

new Vue({
  render: h => h(App),
}).$mount('#app')
