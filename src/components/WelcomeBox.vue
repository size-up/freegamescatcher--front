<template>
  <div class="message_box">
    <p>Welcome to</p>
    <p class="message_box__content message_box__title">
      {{ packageJson.displayName }}
    </p>
    <p class="message_box_content message_box_subtitle">
      The best place to find free games, and be notified when they are available
      !
    </p>
  </div>
</template>

<script setup lang="ts">
import packageJson from "@/../package.json";
</script>

<style scoped lang="scss">
@use "@/styles/_variables.scss" as *;

.message_box {
  display: flex;
  flex-direction: column;
  align-items: center;

  color: $color-primary-lightest;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;

  margin-bottom: 1rem;

  &__content {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  &__title {
    font-family: PressStart2P;
    border: 1px solid $color-primary-lightest;
    width: 60%;
    padding: 0.5rem;
  }

  &__subtitle {
    font-size: 0.75rem;
  }
}
</style>
