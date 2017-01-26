// Import System requirements
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import App from './App'
import Resource from 'vue-resource'
import VueRouter from 'vue-router'
import routes from './routes'

// Resource logic
Vue.use(Resource)
Vue.use(VueRouter)
Vue.use(BootstrapVue);

// Routing logic
var router = new VueRouter({
  routes: routes,
  mode: 'history'
})
/* eslint-disable no-new */
new Vue({
   el: '#app',
   router,
   render: h => h(App)
});
