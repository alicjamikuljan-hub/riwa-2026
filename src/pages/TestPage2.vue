<template>
<q-page padding>
<!-- content -->

<q-input v-model="text" labe="Unesi ime"></input>

<p>Unsei tekst: {{ text }}</p>
const text= ref('Pozdrav')

<q-input v-model="Input" label="Unesi ime"></q-input>
<q-btn @click="dodajme()">Dodaj</q-btn>
<div v-for="ime in imena" :key="ime">
<p v-if="ime!='Ivan'">
{{ime}}
</p>
</div>
</q-page>

<!-- QBadge -->
<div class="q-pa-md q-gutter-sm">
  <q-btn push color="white" text-color="primary" label="Unread Mails">
    <q-badge color="orange" v-model="readmsg" floating>{{ readmsg }}</q-badge>
  </q-btn>
  <q-btn dense color="purple" round icon="email" class="q-ml-md">
    <q-badge color="red" v-model="delmsg" floating>{{ delmsg }}</q-badge>
  </q-btn>
</div>


</template>

<scrip setup>
import {ref} from 'vue';
const input = ref('');
const imena = ['Pero', 'Ana', 'Iva, 'Ivan']
input.value ="Pozdrav";





  import { ref } from 'vue'
  const readmsg = ref(22)
  const delmsg = ref(4)



function dodajIme(){
    console.log(input.value);
}
<p v-for="ime in imena": key="ime"
  <button>
    {{ ime}}
  </button>
</p>

const name=

</script>