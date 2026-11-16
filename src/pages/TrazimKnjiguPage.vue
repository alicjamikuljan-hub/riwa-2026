<template>
  <q-page class="q-pa-md">
    <h4 class="text-primary text-center">
      Pretraživanje knjiga
    </h4>

    <p class="text-center">
      UNesite naslov knjige ili ime autora
    </p>
     <q-card bordered class="q-pa-md">

      <q-input
        v-model="searchText"
        label="Unesite pojam za pretraživanje"
        outlined
        clearable
      />

      <div class="q-mt-md">
        <q-checkbox
          v-model="searchTitle"
          label="Pretraživanje po naslovu"
        />

        <q-checkbox
          v-model="searchAuthor"
          label="Pretraživanje po autoru"
        />
      </div>

      <q-btn
        color="primary"
        label="Traži"
        icon="search"
        class="q-mt-md"
        @click="searchBooks"
      />

    </q-card>

    <q-table
      v-if="searched"
      class="q-mt-lg"
      title="Rezultati pretraživanja"
      :rows="filteredRows"
      :columns="columns"
      row-key="id"
      bordered
    />

    <p
      v-if="searched && filteredRows.length === 0"
      class="text-negative q-mt-md"
    >
      Nema pronađenih knjiga.
    </p>

  </q-page>
</template>



<script setup>
//
</script>
