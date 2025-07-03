import {createApp} from 'vue';
import App from './App.vue';
import {createVuetify} from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import {createRouter, createWebHistory} from 'vue-router';
import {aliases, mdi} from 'vuetify/iconsets/mdi';
import './style.css';

import Index from './pages/Index.vue';
import Leistungen from './pages/Leistungen.vue';
import Erkrankungen from './pages/Erkrankungen.vue';
import Operationen from './pages/Operationen.vue';
import Koloskopie from './pages/Koloskopie.vue';
import Gastroskopie from './pages/Gastroskopie.vue';
import Praxisrundgang from './pages/Praxisrundgang.vue';
import Kontakt from './pages/Kontakt.vue';
import Impressum from './pages/Impressum.vue';
import Datenschutz from './pages/Datenschutz.vue';

const routes = [
  {path: '/', redirect: '/index'},
  {path: '/index', component: Index},
  {path: '/leistungen', component: Leistungen},
  {path: '/erkrankungen', component: Erkrankungen},
  {path: '/operationen', component: Operationen},
  {path: '/koloskopie', component: Koloskopie},
  {path: '/gastroskopie', component: Gastroskopie},
  {path: '/praxisrundgang', component: Praxisrundgang},
  {path: '/kontakt', component: Kontakt},
  {path: '/impressum', component: Impressum},
  {path: '/datenschutz', component: Datenschutz},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {top: 0};
  },
});
// Vuetify Theme (optional, aber empfohlen)
const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {mdi},
  },
  theme: {
    defaultTheme: 'floris',
    themes: {
      floris: {
        dark: false,
        colors: {
          primary: '#223a5e', // elegantes dunkles Blau
          secondary: '#bfbe37', // Curry Akzent
          background: '#f5f7fa',
          surface: '#fff',
          error: '#e53935',
          info: '#2196f3',
          success: '#43a047',
          warning: '#fbc02d',
          'on-primary': '#fff',
          'on-secondary': '#fff',
          'on-background': '#223A5E',
          'on-surface': '#223A5E',
          'on-panel': '#e3f2fd',
        },
      },
    },
  },
});

createApp(App).use(vuetify).use(router).mount('#app');
