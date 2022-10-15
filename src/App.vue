<template>
  <header>
    <navbar-component />
  </header>
  <!-- <button @click="active">CLICK ME</button> -->
  <overlay-loader :is-active="status.isActive">
    <main>
      <welcome-box />
      <subscribe-form-component />
    </main>
  </overlay-loader>
</template>

<script setup lang="ts">
import NavbarComponent from "@/components/NavbarComponent.vue";
import WelcomeBox from "@/components/WelcomeBox.vue";
import SubscribeFormComponent from "@/components/SubscribeFormComponent.vue";
import OverlayLoader from "@/components/OverlayLoader.vue";
import { reactive } from "vue";

const status = reactive({
  isActive: false,
});

function active() {
  console.log("click");
  status.isActive = !status.isActive;
}
</script>

<style scoped lang="scss">
@use "@/styles/_variables.scss" as *;

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 80%;
}
</style>
