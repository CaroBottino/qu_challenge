<template>
  <nav class="custom-style" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a class="custom-item" href="#">Home</a></li>
      <template v-for="(item, index) in items" :key="index">
        <li
          v-if="index == items.length - 1"
          class="breadcrumb-item active"
          aria-current="page"
        >
          {{ item.title }}
        </li>
        <li v-else class="breadcrumb-item">
          <a class="custom-item" :href="item.link">{{ item.title }}</a>
        </li>
      </template>
    </ol>
  </nav>
</template>

<script setup lang="ts">
defineProps({
  //items: Array,
  items: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.custom-style {
  --bs-breadcrumb-divider: ">";
  --bs-breadcrumb-margin-bottom: 0px;
  display: flex;
  justify-content: center;
  width: 100%;
  left: 0;
  top: 0;
}
.custom-item {
  text-decoration: none;
}
</style>
