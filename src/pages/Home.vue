<template>
  <div>
    <img src="../assets/img/banner.jpeg" class="img-fluid banner" alt="..." />
    <h1>Welcome to Star Wars universe</h1>
    <div>
      <div class="row">
        <div v-for="planet in planets" class="planet col-sm-4">
          <div class="card">
            <div class="card-body">
              <i class="bi bi-globe"></i>
              <h5 class="card-title">{{ planet.name }}</h5>
              <p class="card-text">
                Rotation period: {{ planet.rotation_period }}
                <br />
                Orbital period:
                {{ planet.orbital_period }}
                <br />
                Diameter: {{ planet.diameter }}
                <br />
                Climate: {{ planet.climate }}
              </p>
              <a v-if="planet.residents?.length" href="#" class="btn btn-dark"
                >See residents</a
              >
              <a v-else href="#" class="btn btn-dark disabled">no residents</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p>Planets: {{ planets }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { AxiosError } from "axios";
import SwapiController from "../controllers/SwapiController";
import { Planet } from "../models/Planet";

const planets = ref(<Planet[]>[]);

const getPlanets = async (): Promise<Planet[]> => {
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

<style scoped>
.planet {
  padding: 1rem;
}
</style>
