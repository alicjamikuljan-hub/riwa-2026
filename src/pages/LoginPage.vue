<template>
   <q-page class="flex flex-center q-pa-md">

    <q-card bordered style="width: 100%; max-width: 450px;">

      <q-card-section class="bg-primary text-white">
        <div class="text-h5 text-center">
          Prijava korisnika
        </div>
      </q-card-section>

      <q-card-section class="q-gutter-md">

        <q-input
          v-model="korisnickoIme"
          label="Korisničko ime"
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
          icon="login"
          class="full-width"
          @click="prijava"
        />

        <p v-if="poruka" class="text-center text-positive">
          {{ poruka }}
        </p>

      </q-card-section>

    </q-card>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const korisnickoIme = ref('')
const lozinka = ref('')
const poruka = ref('')

function prijava () {
  if (!korisnickoIme.value || !lozinka.value) {
    poruka.value = 'Unesite korisničko ime i lozinku.'
    return
  }

  poruka.value = 'Podaci su uspješno uneseni!'

  console.log({
    korisnickoIme: korisnickoIme.value
  })
}
</script>
