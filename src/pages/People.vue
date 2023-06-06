<template>
  <div>
    <div class="breadcrumb">
      <Breadcrumb :items="bItems" />
    </div>
    <h1>PEOPLE</h1>
    <hr class="featurette-divider" />
    <div>
      <div class="row row-cols-4 row-cols-md-2 g-4">
        <div v-for="someone in people" class="col">
          <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="../assets/img/person.png"
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ someone.name }}</h5>
                  <p class="card-text">
                    id: {{ someone.url.substr(-3) }}
                    <br />
                    homeworld: {{ someone.homeworld.substr(-3) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { AxiosError } from "axios";
import Breadcrumb from "../components/Breadcrumb.vue";
import { People } from "../models/People";
import SwapiController from "../controllers/SwapiController";

const bItems = ref([{ link: "#/people/all", title: "People" }]);

const people = ref(<People[]>[]);

const getAllPeople = async (): Promise<People[]> => {
  return await SwapiController.getAllPeople()
    .then((response: any) => {
      return response.data.results;
    })
    .catch((e: AxiosError) => {
      throw e.response;
    });
};

const setPeople = async () => {
  people.value = await getAllPeople();
};

onBeforeMount(() => {
  setPeople();
});
</script>

<style scoped>
.breadcrumb {
  margin-top: 65px;
  text-align: center;
  margin-bottom: -25px;
}
</style>
