<template>
<q-page class="flex flex-center q-pa-md">

    <q-card bordered style="width: 100%; max-width: 500px;">

      <q-card-section class="bg-primary text-white">
        <div class="text-h5 text-center">
          Registracija korisnika
        </div>
      </q-card-section>

      <q-card-section class="q-gutter-md">

        <q-input
          v-model="ime"
          label="Ime"
          outlined
        />

        <q-input
          v-model="prezime"
          label="Prezime"
          outlined
        />

        <q-input
          v-model="korisnickoIme"
          label="Korisničko ime"
          outlined
        />

        <q-input
          v-model="email"
          label="E-mail"
          type="email"
          outlined
        />

        <q-input
          v-model="lozinka"
          label="Lozinka"
          type="password"
          outlined
        />

        <q-btn
          color="primary"
          label="Potvrdi"
          class="full-width"
          @click="registracija"
        />

        <p v-if="poruka" class="text-positive text-center">
          {{ poruka }}
        </p>

      </q-card-section>

    </q-card>

  </q-page>
  
</template>

<script setup>
import { ref } from 'vue'

const ime = ref('')
const prezime = ref('')
const korisnickoIme = ref('')
const email = ref('')
const lozinka = ref('')

const poruka = ref('')

function registracija () {
  if (
    !ime.value ||
    !prezime.value ||
    !korisnickoIme.value ||
    !email.value ||
    !lozinka.value
  ) {
    poruka.value = 'Molimo ispunite sva polja.'
    return
  }

  poruka.value = 'Registracija je uspješno zaprimljena!'

  console.log({
    ime: ime.value,
    prezime: prezime.value,
    korisnickoIme: korisnickoIme.value,
    email: email.value
  })
}
</script>
