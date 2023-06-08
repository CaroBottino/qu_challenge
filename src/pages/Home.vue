<template>
  <div>
    <img src="../assets/img/banner.jpeg" class="img-fluid banner" alt="..." />
    <h1>Welcome to Star Wars universe</h1>
    <div>
      <div class="card" v-for="film in films">
        <div class="card-header">
          <strong>{{ film.title }}</strong> / Episode {{ film.episode_id }}
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>{{ film.opening_crawl }}</p>
            <footer class="blockquote-footer">
              Directed by
              <cite title="Source Title">{{ film.director }}</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { AxiosError } from "axios";
import SwapiController from "../controllers/SwapiController";
import { Film } from "../models/Film";

const films = ref(<Film[]>[]);

const getFilms = async (): Promise<Film[]> => {
  return await SwapiController.getFilms()
    .then((response: any) => {
      return response.data.results;
    })
    .catch((e: AxiosError) => {
      throw e.response;
    });
};

const setPlanets = async () => {
  films.value = await getFilms();
};

onBeforeMount(() => {
  setPlanets();
});
</script>

<style scoped>
div {
  color-scheme: dark;
}
.card {
  padding: 0rem;
  margin-bottom: 2rem;
}

.blockquote {
  font-size: small;
}
</style>
