<template>
  <div>
    <div class="breadcrumb">
      <Breadcrumb :items="bItems" />
    </div>
    <h1>PLANETS</h1>
    <hr class="featurette-divider" />
    <div class="alert alert-dark" role="alert">
      <blockquote class="blockquote mb-0">
        <p>Sorting table you must have, to learn about our planets.</p>
        <footer class="blockquote-footer">
          <cite title="Source Title">A Padawan Friend</cite>
        </footer>
      </blockquote>
    </div>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th
              v-for="header in headers"
              scope="col"
              @click="sort(header)"
              class="sortable"
            >
              {{ header.key }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(planet, i) in sortedPlanets" :key="i">
            <th scope="row">{{ planet.name }}</th>
            <td>{{ planet.rotation_period }}</td>
            <td>{{ planet.orbital_period }}</td>
            <td>{{ planet.diameter }}</td>
            <td>{{ planet.climate }}</td>
            <td>{{ planet.gravity }}</td>
            <td>{{ planet.terrain }}</td>
            <td>{{ planet.surface_water }}</td>
            <td>{{ planet.population }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, computed } from "vue";
import { AxiosError } from "axios";
import SwapiController from "../controllers/SwapiController";
import { Planet } from "../models/Planet";
import Breadcrumb from "../components/Breadcrumb.vue";

const planets = ref(<Planet[]>[]);
const bItems = ref([{ link: "#/planets", title: "Planets" }]);

interface Header {
  key: string;
  value: string;
}

const headers: Header[] = [
  { key: "name", value: "String" },
  { key: "rotation_period", value: "Number" },
  { key: "orbital_period", value: "Number" },
  { key: "diameter", value: "Number" },
  { key: "climate", value: "String" },
  { key: "gravity", value: "String" },
  { key: "terrain", value: "String" },
  { key: "surface_water", value: "Number" },
  { key: "population", value: "Number" },
];

const sortDirection = ref(1);
const sortBy = ref(<Header>{ key: "name", value: "String" });

const sort = (header: Header) => {
  sortBy.value = header;
  sortDirection.value *= -1;
};

const sortedPlanets = computed(() => {
  return planets.value.sort(
    sortMethods(sortBy.value.value, sortBy.value.key, sortDirection.value)
  );
});

const sortMethods = (type: any, head: string, direction: number) => {
  switch (type) {
    case "String": {
      return direction === 1
        ? (a, b) => (b[head] > a[head] ? -1 : a[head] > b[head] ? 1 : 0)
        : (a, b) => (a[head] > b[head] ? -1 : b[head] > a[head] ? 1 : 0);
    }
    case "Number": {
      return direction === 1
        ? (a, b) => Number(b[head]) - Number(a[head])
        : (a, b) => Number(a[head]) - Number(b[head]);
    }
  }
};

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
.breadcrumb {
  margin-top: 65px;
  text-align: center;
  margin-bottom: -25px;
}

.alert {
  font-style: oblique;
}

.sortable {
  cursor: pointer;
  color: #ffe301;
}
</style>
