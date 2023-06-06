<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                data-bs-toggle="offcanvas"
                href="#offcanvasMenu"
                role="button"
                aria-controls="offcanvasMenu"
              >
                <i class="bi bi-list icon-custom"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Explore</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Star Wars</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >universe</a
              >
            </li>
          </ul>

          <a class="navbar-brand me-auto justify-content-center" href="#"
            ><i class="bi bi-robot brand-centered icon-custom"></i
          ></a>

          <form class="d-flex">
            <input
              class="form-control me-2 rounded-pill"
              type="search"
              placeholder="buscar"
              id="search-input"
              v-model="searchCondition"
            />
            <span class="input-group-append">
              <button
                class="btn bg-white rounded-pill"
                type="button"
                @click="doSearch"
              >
                <i class="bi bi-search"></i>
              </button>
            </span>
          </form>

          <button
            class="btn bg-white rounded-pill"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasCart"
            aria-controls="offcanvasCart"
            id="btnCart"
          >
            <i class="bi bi-bag"></i>
          </button>
        </div>
      </div>
    </nav>

    <Menu />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Menu from "./Menu.vue";

const searchCondition = ref("");

const doSearch = () => {
  console.log("search...");
};
</script>

<style scoped>
.icon-custom {
  font-size: 1.5rem;
}

.nav-item {
  display: inline-block;
  margin: auto;
}

.brand-centered {
  display: flex;
  justify-content: center;
  width: 100%;
  left: 0;
  top: 0;
}

#btnCart {
  margin-left: 0.5rem;
}

#roleDropdown {
  margin-left: 1rem;
  border-color: #ec5494;
  color: #ec5494;
}
</style>
