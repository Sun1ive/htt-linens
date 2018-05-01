import Vue from 'vue';
import VueCarousel from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.min.css';
import Button from '@/components/Shared/Button.vue';
import Wrapper from '@/components/Shared/Wrapper.vue';
import Modal from '@/components/Shared/Modal.vue';
import App from './App.vue';
import './registerServiceWorker';
import './style/main.styl';

Vue.component('Button', Button);
Vue.component('Wrapper', Wrapper);
Vue.component('Modal', Modal);

Vue.config.productionTip = false;

Vue.use(VueCarousel);

new Vue({
  render: h => h(App),
}).$mount('#app');
