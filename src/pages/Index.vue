<template>
  <v-container fluid class="pa-0">
    <!-- Hero Slider -->
    <v-carousel
      cycle
      :height="mdAndUp ? '450' : '180'"
      hide-delimiter-background
      show-arrows="hover"
      interval="6000"
      class="mb-8 hero-carousel elevation-3"
    >
      <v-carousel-item v-for="(img, i) in heroImages" :key="i">
        <v-img :src="img" class="hero-img" cover />
      </v-carousel-item>
    </v-carousel>
    <!-- Hero -->
    <v-sheet
      color="#e3f2fd"
      class="pa-0 pa-md-12 pa-lg-16 hero-section elevation-0"
      elevation="0"
    >
      <v-row justify="center">
        <v-col cols="12" md="6" class="text-center text-md-left">
          <h1 class="text-h6 text-md-h3 font-weight-bold mb-4">
            Willkommen im
            <span class="primary--text">Enddarmzentrum Bietigheim</span>
          </h1>
          <p class="subtitle-1 mb-6">
            Ihre Spezialisten für Diagnostik und Therapie von Erkrankungen des
            Dickdarms, Enddarms und Afters.<br />
            Wir legen besonderen Wert auf Vorsorge, Früherkennung, zuverlässige
            Diagnosen, fundierte Behandlungen und optimale Nachsorge.
          </p>
          <v-btn
            color="primary"
            size="large"
            class="mr-4 mb-2"
            href="#kontakt"
            elevation="2"
            :block="smAndDown"
          >
            <v-icon start>mdi-email</v-icon>Kontakt aufnehmen
          </v-btn>
          <v-btn
            color="secondary"
            size="large"
            variant="outlined"
            href="#team"
            elevation="2"
            :block="smAndDown"
          >
            <v-icon start>mdi-account-group</v-icon>Unser Team
          </v-btn>
        </v-col>
        <v-col cols="12" md="6" class="text-center py-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2620.222613398525!2d9.134860115677593!3d48.949246879296524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799d389c7472eef%3A0xbf362ce20622e3b5!2sBahnhofspl.%204%2C%2074321%20Bietigheim-Bissingen!5e0!3m2!1sde!2sde!4v1608162396163!5m2!1sde!2sde"
            width="100%"
            height="450"
            frameborder="0"
            style="border: 0"
            allowfullscreen="true"
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </v-col>
      </v-row>
    </v-sheet>
    <!-- Begrüßungstext -->
    <v-container
      class="my-12 py-8 px-4 px-md-12 welcome-section"
      style="
        background: linear-gradient(90deg, #e3f2fd 60%, #fff 100%);
        border-radius: 24px;
      "
    >
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="pa-8 text-center" elevation="2" color="#fafafa">
            <v-icon size="48" color="primary" class="mb-2"
              >mdi-hand-heart</v-icon
            >
            <h3 class="font-weight-bold mb-4">
              Liebe Patientin, Lieber Patient!
            </h3>
            <p>
              Wir möchten Ihnen hier unsere Praxis sowie unser Team vorstellen.
            </p>
            <p>
              Wir sind spezialisiert auf die Diagnostik und Therapie von
              Erkrankungen des Dickdarms, Enddarms und des Afters. Wir legen
              besonderen Wert auf Vorsorge, Früherkennung, zuverlässige
              Diagnosen, fundierte Behandlungen und optimale Nachsorge.
            </p>
            <p>
              Wir wissen wie unangenehm Arztbesuche dieser Art sein können und
              haben es uns zur Aufgabe gemacht, Ihren Besuch bei uns so angenehm
              wie möglich zu gestalten. Unser Team nimmt sich Zeit für Sie,
              diagnostiziert Ihre Probleme und hilft Ihnen auf dem Weg der
              Genesung.
            </p>
            <p>
              Ihre Fragen und Ihre Anregungen helfen uns und sind daher immer
              willkommen. Sollten Sie einen Termin wünschen, rufen Sie uns bitte
              an oder schicken Sie uns eine kurze E-Mail mit Ihren
              Terminvorstellungen, wir setzen uns dann umgehend mit Ihnen in
              Verbindung.
            </p>
            <p class="font-italic mt-4">Ihr Praxisteam</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- Sprechzeiten & Kontakt -->
    <v-container class="my-12">
      <v-row>
        <v-col cols="12" md="6">
          <v-card elevation="2" class="pa-6 mb-4">
            <v-card-title class="headline font-weight-bold mb-2">
              <v-icon start color="primary">mdi-clock-outline</v-icon
              >Sprechzeiten
            </v-card-title>
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
            <v-card-title class="headline font-weight-bold mb-2">
              <v-icon start color="primary">mdi-phone</v-icon>Kontakt
            </v-card-title>
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
            <v-btn
              color="primary"
              class="mt-4"
              href="tel:0714253232"
              elevation="2"
              :block="smAndDown"
            >
              <v-icon start>mdi-phone</v-icon>Jetzt anrufen
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- Leistungen -->
    <v-container class="my-12" id="leistungen">
      <h2 class="font-weight-bold mb-6 text-center">Unsere Leistungen</h2>
      <v-row>
        <v-col cols="12" md="4">
          <v-hover v-slot="{isHovering, props}">
            <v-card
              class="pa-4 text-center transition-swing"
              elevation="isHovering ? 8 : 2"
              v-bind="props"
            >
              <v-icon size="48" color="primary" class="mb-2"
                >mdi-magnify</v-icon
              >
              <v-card-title class="font-weight-bold">Diagnostik</v-card-title>
              <v-card-text
                >Moderne Untersuchungsmethoden für zuverlässige
                Diagnosen.</v-card-text
              >
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="4">
          <v-hover v-slot="{isHovering, props}">
            <v-card
              class="pa-4 text-center transition-swing"
              elevation="isHovering ? 8 : 2"
              v-bind="props"
            >
              <v-icon size="48" color="primary" class="mb-2"
                >mdi-stethoscope</v-icon
              >
              <v-card-title class="font-weight-bold">Therapie</v-card-title>
              <v-card-text
                >Individuelle und fundierte Behandlungen für Ihre
                Gesundheit.</v-card-text
              >
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="4">
          <v-hover v-slot="{isHovering, props}">
            <v-card
              class="pa-4 text-center transition-swing"
              elevation="isHovering ? 8 : 2"
              v-bind="props"
            >
              <v-icon size="48" color="primary" class="mb-2"
                >mdi-heart-pulse</v-icon
              >
              <v-card-title class="font-weight-bold">Nachsorge</v-card-title>
              <v-card-text
                >Optimale Betreuung auch nach der Behandlung.</v-card-text
              >
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
    <!-- Ärzte-Team -->
    <v-container class="my-12" id="team">
      <h2 class="font-weight-bold mb-6 text-center">Unsere Ärzte</h2>
      <v-row>
        <v-col cols="12" md="4">
          <v-hover v-slot="{isHovering, props}">
            <v-card
              class="pa-4 text-center transition-swing"
              :elevation="isHovering ? 8 : 2"
              v-bind="props"
            >
              <v-avatar size="200" class="mx-auto mb-2 elevation-2">
                <v-img
                  size="200"
                  src="/assets/enddarmzentrum/Oliver-Schunter.jpeg"
                ></v-img>
              </v-avatar>
              <v-card-title class="font-weight-bold"
                >Dr. med. Oliver Schunter</v-card-title
              >
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="4">
          <v-hover v-slot="{isHovering, props}">
            <v-card
              class="pa-4 text-center transition-swing"
              :elevation="isHovering ? 8 : 2"
              v-bind="props"
            >
              <v-avatar size="200" class="mx-auto mb-2 elevation-2">
                <v-img
                  size="200"
                  src="/assets/enddarmzentrum/Markus-Piro.jpeg"
                ></v-img>
              </v-avatar>
              <v-card-title class="font-weight-bold"
                >Dr. med. Markus Piro</v-card-title
              >
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="4">
          <v-hover v-slot="{isHovering, props}">
            <v-card
              class="pa-4 text-center transition-swing"
              :elevation="isHovering ? 8 : 2"
              v-bind="props"
            >
              <v-avatar size="200" class="mx-auto mb-2 elevation-2">
                <v-img
                  size="200"
                  src="/assets/enddarmzentrum/Floris-Engelsman.jpeg"
                ></v-img>
              </v-avatar>
              <v-card-title class="font-weight-bold"
                >Floris Engelsman</v-card-title
              >
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
    <!-- Team -->
    <v-container class="my-12">
      <h2 class="font-weight-bold mb-6 text-center">Unser Team</h2>
      <v-row>
        <v-col cols="12" sm="6" md="3" v-for="(member, i) in team" :key="i">
          <v-hover v-slot="{isHovering, props}">
            <v-card
              class="pa-4 text-center transition-swing"
              :elevation="isHovering ? 6 : 0"
              v-bind="props"
            >
              <v-avatar
                size="150"
                class="mx-auto mb-2 elevation-1"
                :class="{'elevation-4': isHovering}"
              >
                <template v-if="member.img">
                  <v-img :src="member.img" />
                </template>
                <template v-else>
                  <v-icon size="150">mdi-account-circle</v-icon>
                </template>
              </v-avatar>
              <v-card-title class="font-weight-bold">{{
                member.name
              }}</v-card-title>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script setup lang="ts">
import {useDisplay} from 'vuetify';
const {mdAndUp, smAndDown} = useDisplay();
const heroImages = [
  '/assets/enddarmzentrum/hero/_1000164.png',
  '/assets/enddarmzentrum/hero/_1000165.png',
  '/assets/enddarmzentrum/hero/_1000171.png',
  '/assets/enddarmzentrum/hero/_1000176.png',
];
const team = [
  {
    name: 'Katrin Schneider',
    img: '/assets/enddarmzentrum/Katrin-Schneider.jpeg',
  },
  {name: 'Tanja Sandau', img: '/assets/enddarmzentrum/Tanja-Sandau.jpeg'},
  {
    name: 'Georgia Plastira',
    img: '/assets/enddarmzentrum/Georgia-Plastira.jpeg',
  },
  {name: 'Saskia Anshelm', img: '/assets/enddarmzentrum/Saskia-Anshelm.jpeg'},
  {name: 'Manuela Schrenk', img: '/assets/enddarmzentrum/Manuela-Schrenk.jpeg'},
  {name: 'Tatjana Bauer', img: '/assets/enddarmzentrum/Tatjana-Bauer.jpeg'},
  {name: 'Ariane Breddin', img: '/assets/enddarmzentrum/Ariane-Bredin.jpg'},
  {name: 'Alisia Hagmeier', img: '/assets/enddarmzentrum/Alisia-Hagmeier.jpg'},
  {name: 'Karina Kormann', img: '/assets/enddarmzentrum/Karina-Kormann.jpg'},
  {name: 'Daniela Stanic', img: '/assets/enddarmzentrum/Daniela-Stanic.jpg'},
];
</script>
<style>
.hero-carousel {
  max-width: 100vw;
}
.hero-img {
  height: 450px;
}
@media (max-width: 600px) {
  .hero-img {
    height: 180px;
  }
  .hero-carousel {
    height: 180px;
  }
}
.welcome-section {
  box-shadow: 0 4px 24px 0 rgba(33, 150, 243, 0.08);
}
.transition-swing {
  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.transition-swing:hover {
  transform: translateY(-4px) scale(1.03);
}
</style>
