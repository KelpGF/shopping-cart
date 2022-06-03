import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Styles imports
import PrimeVueComponents from './plugins/primevue';
import 'primevue/resources/themes/tailwind-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const app = createApp(App);

app.use(store).use(router);

PrimeVueComponents(app);

app.mount('#app');
