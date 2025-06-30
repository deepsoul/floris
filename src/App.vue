<template>
  <v-app>
    <!-- Hero Section -->
    <v-app-bar color="primary" dark flat>
      <v-btn text to="/" tag="router-link">
        <v-img
          src="./assets/enddarmzentrum/logo_enddarmzentrum.png"
          contain
          max-width="160"
          class="mr-4"
        />
      </v-btn>
      <v-toolbar-title class="font-weight-bold"
        >Enddarmzentrum Bietigheim</v-toolbar-title
      >
      <v-spacer />
      <v-btn text to="/leistungen" tag="router-link">Leistungen</v-btn>
      <v-btn text to="/erkrankungen" tag="router-link">Erkrankungen</v-btn>
      <v-btn text to="/operationen" tag="router-link">Operationen</v-btn>
      <v-btn text to="/koloskopie" tag="router-link">Koloskopie</v-btn>
      <v-btn text to="/gastroskopie" tag="router-link">Gastroskopie</v-btn>
      <v-btn text to="/praxisrundgang" tag="router-link">Praxisrundgang</v-btn>
      <v-btn text to="/kontakt" tag="router-link">Kontakt</v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid class="pa-0">
        <router-view v-slot="{Component}">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </v-container>
    </v-main>
    <v-footer color="primary" app dark class="pa-6">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <div class="font-weight-bold mb-2">Kontakt</div>
            <div>Enddarmzentrum Bietigheim</div>
            <div>Bahnhofsplatz 4</div>
            <div>74321 Bietigheim-Bissingen</div>
            <div>Tel.: 07142 / 53232</div>
            <div>Fax: 07142 / 54655</div>
            <div>info@enddarmzentrum-bietigheim.de</div>
          </v-col>
          <v-col cols="12" md="4">
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
          <v-col cols="12" md="4" class="text-md-right">
            <div>© 2025 Enddarmzentrum Bietigheim</div>
            <div class="mt-2">by Boris Horn</div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup>
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
</style>
