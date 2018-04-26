import Vue from 'vue';
import Button from '@/components/Shared/Button.vue';
import App from './App.vue';
import './registerServiceWorker';
import './style/main.styl';

Vue.component('Button', Button);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
