<template>
  <header>
    <NavbarComponent />
  </header>
  <main>Hi ! Welcome to the 🎮 Free Games Catcher !</main>
</template>

<script setup lang="ts">
import NavbarComponent from "./components/NavbarComponent.vue";
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
