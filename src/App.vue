<template>
  <v-app>
    <v-app-bar color="primary" dark flat>
      <v-btn text to="/" tag="router-link" class="d-flex align-center">
        <v-img
          src="/assets/enddarmzentrum/logo_enddarmzentrum.png"
          max-width="160"
          max-height="60"
          aspect-ratio="auto"
          class="mr-4"
          cover
        />
        <img
          src="/assets/enddarmzentrum/logo_enddarmzentrum.png"
          style="max-width: 160px; max-height: 60px; vertical-align: middle"
          alt="Logo Fallback"
        />
      </v-btn>
      <v-toolbar-title class="font-weight-bold d-none d-md-flex"
        >Enddarmzentrum Bietigheim</v-toolbar-title
      >
      <v-spacer />
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" />
      <template v-if="$vuetify.display.mdAndUp">
        <v-btn
          v-for="item in navItems"
          :key="item.to"
          text
          :to="item.to"
          tag="router-link"
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
        >
          <v-list-item-title>
            <router-link :to="item.to">{{ item.label }}</router-link>
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
  </v-app>
</template>

<script setup>
import {ref} from 'vue';
const drawer = ref(false);
const navItems = [
  {label: 'Leistungen', to: '/leistungen'},
  {label: 'Erkrankungen', to: '/erkrankungen'},
  {label: 'Operationen', to: '/operationen'},
  {label: 'Koloskopie', to: '/koloskopie'},
  {label: 'Gastroskopie', to: '/gastroskopie'},
  {label: 'Praxisrundgang', to: '/praxisrundgang'},
  {label: 'Kontakt', to: '/kontakt'},
];
const team = [
  'Katrin Schneider',
  'Tanja Sandau',
  'Georgia Plastira',
  'Saskia Anshelm',
  'Manuela Schrenk',
  'Tatjana Bauer',
  'Ariane Breddin',
  'Alisia Hagmeier',
  'Karina Kormann',
  'Daniela Stanic',
];
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
</style>
