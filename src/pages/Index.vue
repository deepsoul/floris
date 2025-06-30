<template>
  <v-container fluid class="pa-0">
    <!-- Hero -->
    <v-sheet
      color="#e3f2fd"
      class="pa-0 pa-md-12 pa-lg-16 hero-section"
      elevation="0"
    >
      <v-row align="center" justify="center">
        <v-col cols="12" md="6" class="py-12">
          <h1 class="display-2 font-weight-bold mb-4">
            Willkommen im Enddarmzentrum Bietigheim
          </h1>
          <p class="subtitle-1 mb-6">
            Ihre Spezialisten für Diagnostik und Therapie von Erkrankungen des
            Dickdarms, Enddarms und Afters.<br />
            Wir legen besonderen Wert auf Vorsorge, Früherkennung, zuverlässige
            Diagnosen, fundierte Behandlungen und optimale Nachsorge.
          </p>
          <v-btn color="primary" size="large" class="mr-4" href="#kontakt"
            >Kontakt aufnehmen</v-btn
          >
          <v-btn color="secondary" size="large" variant="outlined" href="#team"
            >Unser Team</v-btn
          >
        </v-col>
        <v-col cols="12" md="6" class="text-center py-12">
          <v-img
            src="./assets/enddarmzentrum/Enddarmzentrum-Bietigheim-Praxis.jpg"
            max-width="420"
            class="rounded-lg elevation-3"
          />
        </v-col>
      </v-row>
    </v-sheet>
    <!-- Sprechzeiten & Kontakt -->
    <v-container class="my-8">
      <v-row>
        <v-col cols="12" md="6">
          <v-card elevation="2" class="pa-6 mb-4">
            <v-card-title class="headline font-weight-bold mb-2"
              >Sprechzeiten</v-card-title
            >
            <v-divider class="mb-2" />
            <v-list density="compact">
              <v-list-item title="Montag" subtitle="8-12 Uhr & 15-18 Uhr" />
              <v-list-item title="Dienstag" subtitle="8-12 Uhr & 15-18 Uhr" />
              <v-list-item title="Mittwoch" subtitle="8-12 Uhr" />
              <v-list-item title="Donnerstag" subtitle="8-12 Uhr & 15-18 Uhr" />
              <v-list-item title="Freitag" subtitle="8-12 Uhr" />
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" id="kontakt">
          <v-card elevation="2" class="pa-6 mb-4">
            <v-card-title class="headline font-weight-bold mb-2"
              >Kontakt</v-card-title
            >
            <v-divider class="mb-2" />
            <v-list density="compact">
              <v-list-item
                prepend-icon="mdi-map-marker"
                title="Bahnhofsplatz 4, 74321 Bietigheim-Bissingen"
              />
              <v-list-item prepend-icon="mdi-phone" title="07142 / 53232" />
              <v-list-item
                prepend-icon="mdi-email"
                title="info@enddarmzentrum-bietigheim.de"
              />
            </v-list>
            <v-btn color="primary" class="mt-4" href="tel:0714253232"
              >Jetzt anrufen</v-btn
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- Leistungen -->
    <v-container class="my-8" id="leistungen">
      <h2 class="text-h4 font-weight-bold mb-6">Unsere Leistungen</h2>
      <v-row>
        <v-col cols="12" md="4">
          <v-card class="pa-4" elevation="1">
            <v-card-title class="font-weight-bold">Diagnostik</v-card-title>
            <v-card-text
              >Moderne Untersuchungsmethoden für zuverlässige
              Diagnosen.</v-card-text
            >
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="pa-4" elevation="1">
            <v-card-title class="font-weight-bold">Therapie</v-card-title>
            <v-card-text
              >Individuelle und fundierte Behandlungen für Ihre
              Gesundheit.</v-card-text
            >
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="pa-4" elevation="1">
            <v-card-title class="font-weight-bold">Nachsorge</v-card-title>
            <v-card-text
              >Optimale Betreuung auch nach der Behandlung.</v-card-text
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- Ärzte-Team -->
    <v-container class="my-8" id="team">
      <h2 class="text-h4 font-weight-bold mb-6">Unsere Ärzte</h2>
      <v-row>
        <v-col cols="12" md="4">
          <v-card class="pa-4 text-center" elevation="1">
            <v-avatar size="100" class="mx-auto mb-2"
              ><v-icon size="100">mdi-account</v-icon></v-avatar
            >
            <v-card-title class="font-weight-bold"
              >Dr. med. Oliver Schunter</v-card-title
            >
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="pa-4 text-center" elevation="1">
            <v-avatar size="100" class="mx-auto mb-2"
              ><v-icon size="100">mdi-account</v-icon></v-avatar
            >
            <v-card-title class="font-weight-bold"
              >Dr. med. Markus Piro</v-card-title
            >
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="pa-4 text-center" elevation="1">
            <v-avatar size="100" class="mx-auto mb-2"
              ><v-icon size="100">mdi-account</v-icon></v-avatar
            >
            <v-card-title class="font-weight-bold"
              >Floris Engelsman</v-card-title
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- Team -->
    <v-container class="my-8">
      <h2 class="text-h4 font-weight-bold mb-6">Unser Team</h2>
      <v-row>
        <v-col cols="12" sm="6" md="3" v-for="(member, i) in team" :key="i">
          <v-card class="pa-4 text-center" elevation="0">
            <v-avatar size="80" class="mx-auto mb-2"
              ><v-icon size="80">mdi-account-circle</v-icon></v-avatar
            >
            <v-card-title class="font-weight-bold">{{ member }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- Praxisrundgang -->
    <v-container class="my-8" id="praxisrundgang">
      <h2 class="text-h4 font-weight-bold mb-6">Praxisrundgang</h2>
      <v-row>
        <v-col cols="12" md="8">
          <v-img
            src="./assets/enddarmzentrum/Enddarmzentrum-Bietigheim-Team.jpg"
            max-width="100%"
            class="rounded-lg elevation-2"
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="pa-4" elevation="1">
            <v-card-title class="font-weight-bold">Unsere Praxis</v-card-title>
            <v-card-text>
              Lernen Sie unser Team und unsere modernen Praxisräume kennen. Wir
              legen Wert auf eine angenehme Atmosphäre und moderne Ausstattung.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script setup lang="ts">
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
