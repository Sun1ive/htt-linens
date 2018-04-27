import Vue from 'vue';
import Button from '@/components/Shared/Button.vue';
import Wrapper from '@/components/Shared/Wrapper.vue';
import Modal from '@/components/Shared/Modal.vue';
import 'swiper/dist/css/swiper.css';
import App from './App.vue';
import './registerServiceWorker';
import './style/main.styl';

Vue.component('Button', Button);
Vue.component('Wrapper', Wrapper);
Vue.component('Modal', Modal);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
