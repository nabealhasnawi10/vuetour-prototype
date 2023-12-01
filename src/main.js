import { createApp } from 'vue'
import App from './App.vue'
import VueJsTour from '@globalhive/vuejs-tour';
import '@globalhive/vuejs-tour/dist/style.css';

createApp(App).use(VueJsTour).mount('#app');
