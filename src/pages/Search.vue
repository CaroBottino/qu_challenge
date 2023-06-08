<template>
  <div>
    <div class="breadcrumb">
      <Breadcrumb :items="bItems" />
    </div>
    <h1 class="prod-title">Search result</h1>
    <hr class="featurette-divider" />
    <p>People who match your search: {{ criteria }}</p>
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
                    id: {{ someone.url.match(/\d+/g)[0] }}
                    <br />
                    homeworld: {{ someone.homeworld.match(/\d+/g)[0] }}
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
import { ref } from "vue";
import { storeToRefs } from "pinia";
import Breadcrumb from "../components/Breadcrumb.vue";
import { useSearchStore } from "../stores/search.store.js";

const bItems = ref([{ link: "#/search", title: "Search" }]);

const search = useSearchStore();
const { people, criteria } = storeToRefs(search);
</script>

<style scoped>
.breadcrumb {
  margin-top: 65px;
  text-align: center;
  margin-bottom: -25px;
}

p {
  color: #f9f9f9;
}
</style>
