<template>
  <div class="navbar">
    <span class="navbar__title">
      <span class="navbar__circle">🎮</span>
      {{ packageJson.displayName }}
    </span>
    <span class="navbar__subtitle">
      Be notified when free games are available !
    </span>
  </div>
</template>

<script setup lang="ts">
import packageJson from "@/../package.json";
</script>

<style scoped lang="scss">
@use "@/styles/_variables.scss" as *;

.navbar {
  display: flex;
  flex-direction: column;

  background-color: $color-primary-darkest;
  padding: 0.75rem;

  &__title {
    color: $color-primary-light;
    font-size: 1rem;
    font-family: PressStart2P;
  }

  &__subtitle {
    color: $color-primary-lightest;
  }

  &__circle {
    padding: 0px 3px 7px 3px;
    border-radius: 25%;
    background-color: $color-primary-light;
  }
}
</style>
