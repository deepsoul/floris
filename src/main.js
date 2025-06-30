import {createApp} from 'vue';
import App from './App.vue';
import {createVuetify} from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

// Vuetify Theme (optional, aber empfohlen)
import {aliases, mdi} from 'vuetify/iconsets/mdi';

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {mdi},
  },
});

createApp(App).use(vuetify).mount('#app');
