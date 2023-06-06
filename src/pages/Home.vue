<template>
  <div>
    <h1>Home</h1>
    <p>Planets: {{ planets }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { AxiosError } from "axios";
import SwapiController from "../controllers/SwapiController";

const planets = ref();

const getPlanets = async (): Promise<any[]> => {
  return await SwapiController.getPlanets()
    .then((response: any) => {
      return response.data.results;
    })
    .catch((e: AxiosError) => {
      throw e.response;
    });
};

const setPlanets = async () => {
  planets.value = await getPlanets();
};

onBeforeMount(() => {
  setPlanets();
});
</script>
