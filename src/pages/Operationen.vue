<template>
  <v-container class="my-12">
    <h2 class="font-weight-bold mb-8 text-center">Operationen</h2>
    <v-card class="pa-6 mx-auto" elevation="2" max-width="600">
      <v-list density="compact">
        <v-list-item
          v-for="item in operationen"
          :key="item"
          :title="item"
          prepend-icon="mdi-scalpel"
        />
      </v-list>
    </v-card>
  </v-container>
</template>
<script setup>
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
