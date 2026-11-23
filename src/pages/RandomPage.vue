<template>
    <q-page padding>
        <div class="q-pa-md ">
    <q-card class="my-card bg-secondary text-white">
        <q-card-section>
            <div class="text-h6">Bad Jokes</div>
        </q-card-section>
        
    </q-card>
     <div class="q-pa-md row items-start q-gutter-md">
            <q-btn color="primary" @click="loadJoke()">Joke</q-btn>
        </div>
</div>

<div class="q-pa-md ">
    <q-card class="my-card bg-secondary text-white">
        <q-card-section>
            <div class="text-h6">Cat facts</div>
        </q-card-section>
    </q-card>
    <div class="q-pa-md row items-start q-gutter-md">
            <q-btn color="primary" @click="loadCats()">Meow</q-btn>
        </div>
</div>

<div class="q-pa-md ">
    <q-card class="my-card bg-secondary text-white">
        <q-card-section>
            <div class="text-h6">Bored-api</div>
        </q-card-section>
    </q-card>
    <div class="q-pa-md row items-start q-gutter-md">
            <q-btn color="primary" @click="loadBored()">Click</q-btn>
        </div>
</div>
</q-page>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
import axios from 'axios';
//let joke = ref([])
onMounted(() => {
    loadJoke()
})
async function loadJoke() {
    await axios.get('http://dumbapis.com/joke')
    .then(result => {
        console.log(result.data.joke);
       
     })
     .catch(error => {
        console.error(error)
     })
}

onMounted(() => {
    loadCats()
})
async function loadCats() {
    await axios.get('http://catfact.ninja/fact')
    .then(result => {
        console.log(result.data.fact);
       
     })
     .catch(error => {
        console.error(error)
     })
}

onMounted(() => {
    loadBored()
})
async function loadBored() {
    const result = await axios.get(

      'https://proxy.cors.dev/https://bored-api.appbrewery.com/random'

    )
    .then(result => {
        console.log(result.data.bored);
       
     })
     .catch(error => {
        console.error(error)
     })
}
</script>


















































































































































