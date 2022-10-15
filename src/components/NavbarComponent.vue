<template>
  <div class="navbar">
    <span class="title">{{ packageJson.displayName }}</span>
    <span> application</span>
  </div>
</template>

<script setup lang="ts">
import packageJson from "../../package.json";
</script>

<style scoped>
.navbar {
  background-color: var(--color-dark);
  color: var(--color-light);
  padding: 1rem;
}

.title {
  font-size: 1rem;
  font-weight: bold;
}
</style>
