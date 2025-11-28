<template>
  <div>
    <v-container>
      <v-menu v-model="menu" :close-on-content-click="false">
        <template #activator="{ props }">
          <v-btn v-bind="props">click me</v-btn>
        </template>
        <v-card class="pa-1" width="300px">
          <v-card-title class="d-flex">
            <v-spacer />
            <v-btn icon="mdi-close" variant="plain" @click="menu = false" />
          </v-card-title>
          <div style="height: 100px"></div>
          <v-card-text>
            <v-text-field v-model="form.first" />
          </v-card-text>
          <v-card-text>
            <v-text-field v-model="form.second" />
          </v-card-text>
        </v-card>
      </v-menu>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const menu = ref(false);
const form = ref({ first: "john", second: "doe" });
</script>
