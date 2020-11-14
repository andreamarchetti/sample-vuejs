import Vue from 'vue'
import App from './App.vue'
import './assets/index.css';

Vue.config.productionTip = false

console.log(process.env.NODE_ENV)
console.log(process.env)

new Vue({
  el: "#app",
  render: h => h(App)
})
