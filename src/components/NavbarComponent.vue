<template>
  <div class="navbar">
    <span class="title">🎮 {{ packageJson.displayName }}</span>
    <span> - Notify your friends when a free game is available !</span>
  </div>
</template>

<script setup lang="ts">
import packageJson from "../../package.json";
</script>

<style scoped>
.navbar {
  background-color: var(--color-dark);
  color: var(--color-light);
  padding: 0.75rem;
}

.title {
  font-size: 1rem;
  font-weight: bold;
}
</style>
