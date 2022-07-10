import { createApp } from 'vue'

import App from './App.vue'
import router from './router/index';

import 'normalize.css';
import './assets/style/main.css';

const app = createApp(App);

app.use(router);
app.mount('#app')
