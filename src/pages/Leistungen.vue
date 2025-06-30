<template>
  <v-container class="py-8">
    <h1 class="text-h4 font-weight-bold mb-6">Leistungen</h1>
    <v-row>
      <v-col cols="12" md="6">
        <h2 class="text-h6 font-weight-bold mb-2">
          Diagnostik und Behandlung folgender Erkrankungen/Symptome:
        </h2>
        <v-list density="compact">
          <v-list-item v-for="item in behandlung" :key="item" :title="item" />
        </v-list>
      </v-col>
      <v-col cols="12" md="6">
        <h2 class="text-h6 font-weight-bold mb-2">Apparative Diagnostik:</h2>
        <v-list density="compact">
          <v-list-item v-for="item in apparative" :key="item" :title="item" />
        </v-list>
        <h2 class="text-h6 font-weight-bold mt-6 mb-2">Operationsspektrum:</h2>
        <v-list density="compact">
          <v-list-item v-for="item in operationen" :key="item" :title="item" />
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
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
