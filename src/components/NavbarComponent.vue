<template>
  <div class="navbar">
    <span class="navbar__title"
      ><span class="circle">🎮</span> {{ packageJson.displayName }}</span
    >
    <span>Notify your friends when a free game is available !</span>
  </div>
</template>

<script setup lang="ts">
import packageJson from "../../package.json";
</script>

<style scoped lang="scss">
@use "../styles/_variables.scss" as *;

.navbar {
  display: flex;
  flex-direction: column;

  background-color: $color-dark;
  color: $color-light;
  padding: 0.75rem;

  &__title {
    font-size: 1rem;
    font-family: PressStart2P;
  }
}
.circle {
  padding: 0px 1px 5px 1px;
  border-radius: 25%;
  background-color: $color-light;
}
</style>
