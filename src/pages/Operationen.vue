<template>
  <v-container class="py-8">
    <h1 class="text-h4 font-weight-bold mb-6">Operationen</h1>
    <v-list density="compact">
      <v-list-item v-for="item in operationen" :key="item" :title="item" />
    </v-list>
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
