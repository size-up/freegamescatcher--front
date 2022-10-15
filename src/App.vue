<template>
  <header>
    <NavbarComponent />
  </header>
  <button @click="active">CLICK ME</button>
  <overlay-loader :is-active="status.isActive">
    <main>
      <span class="message">
        Hello you and welcome to <br />
        {{ packageJson.displayName }} !
      </span>
      <SubscribeFormComponent />
    </main>
  </overlay-loader>
</template>

<script setup lang="ts">
import packageJson from "../package.json";
import NavbarComponent from "./components/NavbarComponent.vue";
import SubscribeFormComponent from "./components/SubscribeFormComponent.vue";
import { reactive } from "vue";
import OverlayLoader from "./components/OverlayLoader.vue";

const status = reactive({
  isActive: false,
});

function active() {
  console.log("click");
  status.isActive = !status.isActive;
}
</script>

<style scoped lang="scss">
@use "./styles/_variables.scss" as *;

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.message {
  color: $color-dark;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}
</style>
