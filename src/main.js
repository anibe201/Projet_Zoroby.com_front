import '@/plugins/vue-composition-api'
import '@/styles/styles.scss'
import 'vuesax/dist/vuesax.css'

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import Vuesax from 'vuesax'
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import ConfirmPopup from 'primevue/confirmpopup';
import Toast from 'primevue/toast';



Vue.use(PrimeVue);
Vue.use(Vuesax);
Vue.use(ConfirmationService);
Vue.use(ToastService);


Vue.component('Dialog', Dialog);
Vue.component('Button', Button);
Vue.component('ConfirmPopup', ConfirmPopup);
Vue.component('Toast', Toast);








Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
