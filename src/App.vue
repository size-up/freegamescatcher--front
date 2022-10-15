<template>
  <header>
    <NavbarComponent />
  </header>
  <main>
    <span class="message">
      Hello you and welcome to <br />
      {{ packageJson.displayName }} !
    </span>
    <SubscribeFormComponent />
  </main>
</template>

<script setup lang="ts">
import packageJson from "../package.json";
import NavbarComponent from "./components/NavbarComponent.vue";
import SubscribeFormComponent from "./components/SubscribeFormComponent.vue";
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.message {
  color: var(--color-dark);
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}
</style>
