<template>
  <div class="wrapper">
    <div :class="getClass">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  isActive: Boolean,
});

const getClass = computed(() => {
  return props.isActive ? "overlay-transparent" : "none";
});
</script>
<style scoped lang="scss">
@use "@/styles/_variables.scss" as *;

/* WRAPPER */
.wrapper {
  height: 100%;
  position: relative;
}
/* OVERLAY */
.none {
  display: none;
}
.overlay-transparent {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: $color-primary-darker;
}

/* SPINNER CLASSES */
.lds-ring {
  position: relative;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid $color-primary-lighter;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: $color-primary-light transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
