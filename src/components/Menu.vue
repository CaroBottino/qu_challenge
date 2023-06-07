<template>
  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasMenu"
    aria-labelledby="offcanvasMenuLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasMenuLabel">
        <i class="bi bi-robot"></i>QU challenge Bottino
      </h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div>Explore Star Wars universe...</div>
      <router-link to="/" :class="routerLinkClass">
        <button type="button" data-bs-dismiss="offcanvas">
          <i class="bi bi-camera-reels"></i>
          FILMS
        </button>
      </router-link>
      <router-link to="/planets" :class="routerLinkClass">
        <button type="button" data-bs-dismiss="offcanvas">
          <i class="bi bi-globe"></i>
          PLANETS
        </button>
      </router-link>
      <router-link to="/people" :class="routerLinkClass">
        <button type="button" data-bs-dismiss="offcanvas">
          <i class="bi bi-people-fill"></i>
          PEOPLE
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
const routerLinkClass = "router-link-active router-link-exact-active nav-link";
</script>

<style scoped>
#offcanvasMenuLabel {
  margin-top: 1rem;
}

i {
  padding-right: 0.5rem;
}

button {
  font-size: small;
  letter-spacing: 2px;
}

.session {
  position: fixed;
  bottom: 1rem;
  align-items: flex-end;
}

.user-icon {
  font-size: 2rem;
  color: #ec5494;
  align-items: center;
}

.user-label {
  padding-left: 0.75rem;
  margin-bottom: 0%;
  font-weight: bold;
}

.featurette-divider {
  max-width: 340px;
}

div#accordionMenu {
  height: 500px;
  overflow: auto;
}
</style>
