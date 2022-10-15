<template>
  <div class="navbar">
    {{ packageJson.displayName }}
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
</style>
