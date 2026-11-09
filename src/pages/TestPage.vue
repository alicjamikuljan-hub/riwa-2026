
<template>
  <q-page padding>


    <h5>1. Ispis poruka</h5>

    <p v-html="msgHtml"></p>
    {{ msgHtml }}
    {{ msg }}

    <p v-text="msg"></p>

    <q-separator class="q-my-md" />

    
    <h5>2. HTML tekst</h5>

    <p v-text="htmlText"></p>
    <p v-html="htmlText"></p>

    <q-separator class="q-my-md" />

  
    <h5>3. Dani u tjednu</h5>

    <p v-for="item in days" :key="item">
      <button>
        {{ item }}
      </button>
    </p>

    <q-separator class="q-my-md" />


    <h5>4. Uvjetni prikaz v-if i v-else</h5>

    <p v-for="item in days" :key="item">
      <button v-if="item == 'Ponedjeljak'">
        {{ item }} *
      </button>

      <button v-else>
        {{ item }}
      </button>
    </p>

    <q-separator class="q-my-md" />


    <h5>5. Uvjetni prikaz v-show</h5>

    <p v-for="item in days" :key="item">
      <button v-if="item == 'Ponedjeljak'">
        {{ item }} *
      </button>

      <button v-else v-show="false">
        {{ item }}
      </button>
    </p>

    <q-separator class="q-my-md" />

    <!-- 6. Link -->
    <h5>6. Link</h5>

    <a :href="link.url" :target="link.target">
      {{ link.text }}
    </a>

    <q-separator class="q-my-md" />

    <!-- 7. Q-input -->
    <h5>7. Unos teksta</h5>

    <q-input
      color="purple-12"
      v-model="text"
      label="Item name"
    />

    <p>Uneseni tekst: {{ text }}</p>

    <q-separator class="q-my-md" />

    <!-- 8. Q-table -->
    <h5>8. Tablica</h5>

    <q-table
      flat
      bordered
      :rows="rows"
      :columns="columns"
      row-key="name"
    >

      <template v-slot:body-cell-myimage="props1">
        <q-td :props="props1">
          <img
            :src="props1.row.slika"
            width="100px"
          >
        </q-td>
      </template>

    </q-table>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'

// 1. Poruke
const msg = "Pozdrav"
const msgHtml = '<h1>Naslov</h1>'

// 2. HTML tekst
const htmlText = '<p><b>Formatirani</b> tekst</p>'

// 3. Dani u tjednu
const days = [
  'Ponedjeljak',
  'Utorak',
  'Srijeda',
  'Četvrtak',
  'Petak',
  'Subota',
  'Nedjelja'
]

// 4. Link
const link = {
  url: 'https://www.google.com',
  target: '_blank',
  text: 'Google'
}

// 5. Input
const text = ref('')
text.value = "Hello"

// 6. Stupci tablice
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Naziv',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'myimage',
    label: 'Slika',
    field: 'slika'
  }
]

// 7. Redovi tablice
const rows = [
  {
    name: 'Prva slika',
    slika: 'https://placehold.co/100x100'
  },
  {
    name: 'Druga slika',
    slika: 'https://placehold.co/100x100/cccccc/333333'
  },
  {
    name: 'Treća slika',
    slika: 'https://placehold.co/100x100/999999/ffffff'
  }
]
</script>

