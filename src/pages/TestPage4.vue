<template>
<div class="q-pa-md row items-start q-gutter-md">
<q-card class="my-card bg-secondary text-white">
    <q-card-section>
        <div class="text-h6">Brojač</div>
        <p class="text-body1">Testni brojač za stranicu.</p>
    </q-card-section>
    <q-card-section>
        <q-card-actions>
        <q-btn color="primary" label="Uvećaj" @click="uvecaj()" />
        <q-btn color="dark" label="Resetiraj" @click="resetiraj()" />
        </q-card-actions>
    </q-card-section>  
    <q-card-section>
        {{ brojac }}
    </q-card-section>
</q-card>
</div>

<q-card class="my-card bg-secondary text-white">
    <q-card-section>
<div class="q-pa-md row items-start q-gutter-md">
    <q-input v-model="broj1" label="Broj1" outlined />
    <q-input v-model="broj2" label="Broj2" outlined />
    <q-input v-model="Zbroj" label="Zbroj" outlined />
    <q-btn color="primary" @click="Zbroji()">Zbroji brojeve</q-btn>
</div>
</q-card-section>
</q-card>

<div class="q-pa-md row items-start q-gutter-md">
    <q-input v-model="Polje" label="Polje" outlined />
    <q-btn color="primary" @click="Spremi()">Spremi polje</q-btn>
    <q-card>
    <q-card-section>
        {{ Polje }}
    </q-card-section>
    <q-card-section v-for="t.Polje in msg" :key="t.Polje">
        {{ t.Polje}}
    </q-card-section>
</q-card>
</div>
</template>

<script setup>
import { ref } from 'vue';
const brojac = ref(0);
function uvecaj() {
    brojac.value++;
    console.log("uvecaj" + brojac.value);
}
function resetiraj() {
    brojac.value = 0;
    console.log("resetiraj" + brojac.value);
}

const Zbroj=ref('');
const broj1=ref('');
const broj2=ref('');

function Zbroji() {
    Zbroj.value = (parseFloat(broj1.value)) + (parseFloat(broj2.value));
    console.log("Zbroj: " + Zbroj.value);
}



const Polje= ref('');

function Spremi() {
    msg.push({Polje:Polje.value});
    console.log(msg);
}
</script>