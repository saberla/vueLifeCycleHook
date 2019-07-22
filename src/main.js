import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import animate from 'animate.css'

Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App),
//   template: '<App/>',
//   components: { App },
//   runtimeCompiler: true
// }).$mount('#app')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// compiler
// new Vue({
//   el: '#app',
//   router: router,
//   store: store,
//   template: '<App/>',
//   components: { App }
// })

