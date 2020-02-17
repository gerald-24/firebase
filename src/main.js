import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {firestorePlugin} from 'vuefire'
import firebase from 'firebase'
import vuetify from './plugins/vuetify'
import myMixins from './plugins/myMixins'

Vue.use(firestorePlugin)
Vue.use(firebase)
Vue.use(myMixins)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
