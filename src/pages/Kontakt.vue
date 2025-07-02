<template>
  <v-container class="my-2 my-md-12" :width="mdAndUp ? 900 : '100%'">
    <h2 class="font-weight-bold mt-0 mb-md-6">Kontakt</h2>
    <v-form v-model="valid" @submit.prevent="submit" ref="formRef">
      <v-radio-group
        v-if="false"
        v-model="method"
        :disabled="true"
        row
        class="mb-4"
      >
        <v-radio label="Per Server (PHP)" value="php" />
        <v-radio label="Per EmailJS (direkt, ohne Backend)" value="emailjs" />
      </v-radio-group>
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
      <v-text-field v-model="betreff" label="Betreff" class="mb-4" />
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
          <router-link to="/datenschutz" target="_blank"
            >Datenschutzerklärung</router-link
          >
        </template>
      </v-checkbox>
      <v-btn
        :disabled="!valid || loading"
        :block="smAndDown"
        color="primary"
        type="submit"
        >Absenden</v-btn
      >
      <v-alert v-if="success" type="success" class="mt-4">{{
        feedback
      }}</v-alert>
      <v-alert v-if="error" type="error" class="mt-4">{{ feedback }}</v-alert>
    </v-form>
  </v-container>
</template>
<script setup>
import {useDisplay} from 'vuetify';
const {mdAndUp, smAndDown} = useDisplay();
import {ref} from 'vue';
import emailjs from 'emailjs-com';
const name = ref('');
const email = ref('');
const betreff = ref('');
const message = ref('');
const privacy = ref(false);
const valid = ref(false);
const success = ref(false);
const error = ref(false);
const feedback = ref('');
const loading = ref(false);
const method = ref('emailjs'); // Versandmethode: 'php' oder 'emailjs'
const formRef = ref();

// EmailJS-Konfiguration (hier deine Daten eintragen!)
const EMAILJS_SERVICE_ID = 'service_936cf4s';
const EMAILJS_TEMPLATE_ID = 'template_d872bjs';
const EMAILJS_PUBLIC_KEY = '1caDskB4OK6Io6HxJ';

async function submit() {
  if (!valid.value) return;
  loading.value = true;
  success.value = false;
  error.value = false;
  feedback.value = '';
  if (method.value === 'php') {
    // PHP-Mailer
    try {
      const res = await fetch('/sendmail.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams({
          name: name.value,
          email: email.value,
          message: message.value,
          privacy: privacy.value ? 'true' : '',
        }),
      });
      const data = await res.json();
      if (data.success) {
        success.value = true;
        feedback.value = data.message;
        name.value = '';
        email.value = '';
        message.value = '';
        privacy.value = false;
        if (formRef.value) formRef.value.resetValidation();
      } else {
        error.value = true;
        feedback.value = data.message || 'Fehler beim Senden.';
      }
    } catch (e) {
      error.value = true;
      feedback.value = 'Fehler beim Senden.';
    } finally {
      loading.value = false;
      setTimeout(() => {
        success.value = false;
        error.value = false;
        feedback.value = '';
      }, 6000);
    }
  } else if (method.value === 'emailjs') {
    // EmailJS
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name.value,
          from_email: email.value,
          message: message.value,
          title: betreff.value,
        },
        EMAILJS_PUBLIC_KEY,
      );
      success.value = true;
      feedback.value =
        'Vielen Dank für Ihre Nachricht! Wir melden uns zeitnah.';
      name.value = '';
      email.value = '';
      message.value = '';
      privacy.value = false;
      if (formRef.value) formRef.value.resetValidation();
    } catch (e) {
      error.value = true;
      feedback.value = 'Fehler beim Senden über EmailJS.';
    } finally {
      loading.value = false;
      setTimeout(() => {
        success.value = false;
        error.value = false;
        feedback.value = '';
      }, 6000);
    }
  }
}
</script>
