<template>
  <v-container class="py-8" style="max-width: 600px">
    <h1 class="text-h4 font-weight-bold mb-6">Kontakt</h1>
    <v-form v-model="valid" @submit.prevent="submit">
      <v-text-field
        v-model="name"
        label="Name"
        :rules="[(v) => !!v || 'Name erforderlich']"
        required
        class="mb-4"
      />
      <v-text-field
        v-model="email"
        label="E-Mail"
        :rules="[(v) => /.+@.+\..+/.test(v) || 'Gültige E-Mail erforderlich']"
        required
        class="mb-4"
      />
      <v-textarea
        v-model="message"
        label="Nachricht"
        :rules="[(v) => !!v || 'Nachricht erforderlich']"
        required
        class="mb-4"
        rows="4"
      />
      <v-checkbox
        v-model="privacy"
        :rules="[(v) => !!v || 'Bitte Datenschutz akzeptieren']"
        required
        class="mb-4"
      >
        <template #label>
          <span class="mr-2">Ich akzeptiere die</span>
          <router-link to="/datenschutz">Datenschutzerklärung</router-link>.
        </template>
      </v-checkbox>
      <v-btn :disabled="!valid" color="primary" type="submit">Absenden</v-btn>
      <v-alert v-if="success" type="success" class="mt-4"
        >Vielen Dank für Ihre Nachricht!</v-alert
      >
    </v-form>
  </v-container>
</template>
<script setup>
import {ref} from 'vue';
const name = ref('');
const email = ref('');
const message = ref('');
const privacy = ref(false);
const valid = ref(false);
const success = ref(false);
function submit() {
  if (valid.value) {
    success.value = true;
    setTimeout(() => (success.value = false), 4000);
    name.value = '';
    email.value = '';
    message.value = '';
    privacy.value = false;
  }
}
</script>
