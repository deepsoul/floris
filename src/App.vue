<template>
  <v-app>
    <v-app-bar color="primary" dark flat>
      <v-btn text to="/" tag="router-link" class="d-flex align-center">
        <img
          src="/assets/enddarmzentrum/logo_enddarmzentrum.png"
          style="max-width: 160px; max-height: 60px; vertical-align: middle"
          alt="Enddarmzentrum Bietigheim"
        />
      </v-btn>
      <v-spacer />
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" />
      <template v-if="mdAndUp">
        <v-btn
          v-for="item in navItems"
          :key="item.to"
          text
          :to="item.to"
          tag="router-link"
          :block="smAndDown"
          >{{ item.label }}</v-btn
        >
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app temporary class="d-md-none">
      <v-list>
        <v-list-item
          v-for="item in navItems"
          :key="item.to"
          @click="drawer = false"
          class="mobile-nav-item"
        >
          <v-list-item-icon>
            <v-icon :icon="item.icon" size="28" color="primary" />
          </v-list-item-icon>
          <v-list-item-title>
            <router-link :to="item.to" class="mobile-nav-link">{{
              item.label
            }}</router-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid class="pa-0">
        <router-view v-slot="{Component}">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </v-container>
    </v-main>
    <v-footer color="primary" dark class="pa-3 small-footer">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <div class="font-weight-bold mb-2">Kontakt</div>
            <div>Enddarmzentrum Bietigheim</div>
            <div>Bahnhofsplatz 4</div>
            <div>74321 Bietigheim-Bissingen</div>
            <div>Tel.: 07142 / 53232</div>
            <div>Fax: 07142 / 54655</div>
            <div>info@enddarmzentrum-bietigheim.de</div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="font-weight-bold mb-2">Links</div>
            <div>
              <router-link to="/impressum" class="text-white"
                >Impressum</router-link
              >
            </div>
            <div>
              <router-link to="/datenschutz" class="text-white"
                >Datenschutzerklärung</router-link
              >
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="text-md-right">
            <div>
              <span>© 2025 Enddarmzentrum Bietigheim</span>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>

    <!-- Cookie Banner -->
    <v-snackbar
      v-model="cookieBanner"
      location="bottom"
      :timeout="-1"
      color="#fff"
      class="cookie-banner"
      elevation="8"
      multi-line
    >
      <span style="color: #222">
        Diese Website verwendet Cookies, um Ihnen ein bestmögliches
        Nutzererlebnis zu bieten. Weitere Informationen finden Sie in unserer
        <router-link
          to="/datenschutz"
          class="text-primary text-decoration-underline"
          >Datenschutzerklärung</router-link
        >.
      </span>
      <template #actions>
        <v-btn color="primary" @click="acceptCookies" :block="smAndDown"
          >Akzeptieren</v-btn
        >
      </template>
    </v-snackbar>
  </v-app>
</template>

<script lang="ts" setup>
import {ref, onMounted} from 'vue';
import {useDisplay} from 'vuetify';
const {mdAndUp, smAndDown} = useDisplay();
const drawer = ref(false);
const navItems = [
  {label: 'Leistungen', to: '/leistungen', icon: 'mdi-clipboard-list-outline'},
  {
    label: 'Erkrankungen',
    to: '/erkrankungen',
    icon: 'mdi-hospital-box-outline',
  },
  {label: 'Operationen', to: '/operationen', icon: 'mdi-doctor'},
  {label: 'Koloskopie', to: '/koloskopie', icon: 'mdi-magnify'},
  {label: 'Gastroskopie', to: '/gastroskopie', icon: 'mdi-stethoscope'},
  {
    label: 'Praxisrundgang',
    to: '/praxisrundgang',
    icon: 'mdi-home-city-outline',
  },
  {label: 'Kontakt', to: '/kontakt', icon: 'mdi-email-outline'},
];

// Cookie Banner Logic
const cookieBanner = ref(false);
const acceptCookies = () => {
  localStorage.setItem('cookieConsent', 'true');
  cookieBanner.value = false;
};
onMounted(() => {
  if (localStorage.getItem('cookieConsent') !== 'true') {
    cookieBanner.value = true;
  }
});
</script>

<style>
.hero-section {
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
}
body {
  background: #f5f5f5;
}
.small-footer {
  font-size: 0.95rem;
  padding-top: 12px !important;
  padding-bottom: 12px !important;
}
.cookie-banner {
  z-index: 9999;
  border-radius: 12px;
  max-width: 480px;
  margin: 0 auto 24px auto;
  left: 0;
  right: 0;
}
.mobile-nav-item {
  margin-bottom: 8px;
  border-radius: 8px;
  transition: background 0.2s;
}
.mobile-nav-item:hover {
  background: #e3f2fd;
}
.mobile-nav-link {
  color: #222;
  font-size: 1.15rem;
  font-weight: 500;
  text-decoration: none;
  margin-left: 8px;
}
</style>
