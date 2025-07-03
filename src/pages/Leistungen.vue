<template>
  <v-container class="my-2 my-md-12">
    <h2 class="font-weight-bold mt-0 mb-md-8 text-center">Leistungen</h2>
    <v-row>
      <v-col cols="12" md="6">
        <v-card class="pa-6 mb-6" elevation="2">
          <v-card-title
            class="font-weight-bold mb-2"
            :class="{small: smAndDown}"
          >
            <v-icon start color="primary">mdi-stethoscope</v-icon>
            Diagnostik & Behandlung
          </v-card-title>
          <v-divider class="mb-2" />
          <h2 class="text-h6 font-weight-bold mb-2" :class="{small: smAndDown}">
            Folgende Erkrankungen/Symptome:
          </h2>
          <v-list density="compact">
            <v-list-item
              v-for="item in behandlung"
              :key="item"
              :title="item"
              prepend-icon="mdi-chevron-right"
              :active="false"
            />
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="pa-6 mb-6" elevation="2">
          <v-card-title
            class="font-weight-bold mb-2"
            :class="{small: smAndDown}"
          >
            <v-icon start color="primary">mdi-magnify</v-icon>
            Apparative Diagnostik
          </v-card-title>
          <v-divider class="mb-2" />
          <v-list density="compact">
            <v-list-item
              v-for="item in apparative"
              :key="item"
              :title="item"
              prepend-icon="mdi-checkbox-marked-circle-outline"
            />
          </v-list>
          <h2
            class="text-h6 font-weight-bold mt-6 mb-2"
            :class="{small: smAndDown}"
          >
            Operationsspektrum:
          </h2>
          <v-list density="compact">
            <v-list-item
              v-for="item in operationen"
              :key="item"
              :title="item"
              prepend-icon="mdi-doctor"
            />
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts" setup>
import {useDisplay} from 'vuetify/lib/composables/display';
const {smAndDown} = useDisplay();
const behandlung = [
  'Hämorrhoiden aller Stadien',
  'Analfistel',
  'Analfissur (Afterriß)',
  'Abszesse',
  'Analekzem mit Juckreiz',
  'Marisken',
  'Analer Blutabgang',
  'Darmkrebs/Tumore im Rektum und Kolon',
  'Stuhlinkontinenz',
  'Diagnostik chronisch-entzündliche Darmerkrankung (M. Crohn, Colitis ulcerosa)',
  'Zöliakie (Glutenunverträglichkeit)',
  'Reizdarmsyndrom',
  'Stuhlentleerungsstörung',
  'Obstipation/Diarrhoe',
  'Divertikelkrankheit',
  'Rektumprolaps',
  'Condylome/Feigwarzen',
  'Sinus pilonidalis',
];
const apparative = [
  'Prokto-/Rektoskopie (Enddarmspiegelung)',
  'Koloskopie (Darmspiegelung) mit Polypabtragung (in Kurznarkose)',
  'Vorsorgekoloskopie (in Kurznarkose)',
  'Gastroskopie (in Kurznarkose/ Privatleistung)',
];
const operationen = [
  'Hämorrhoidenoperation',
  'Analfissuren und Abszesse',
  'Analfistel',
  'Condylomabtragung',
  'Sinus pilonidalis (Steißbeinfistel)',
  'Mariskenabtragung',
  'Polyp/Tumorentfernung über den After (transanale Polypexzision)',
];
</script>
