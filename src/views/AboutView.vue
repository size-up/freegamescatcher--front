<script setup lang="ts">
import PerspectiveCardComponent from "@/components/card/PerspectiveCardComponent.vue"
</script>

<template>
  <div class="about">
    <PerspectiveCardComponent
      title="À propos de Free Games Catcher"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolore quia facere
      doloribus eos rem maiores autem nesciunt numquam. Voluptas consectetur maiores doloremque
      nulla! Omnis soluta atque praesentium debitis illum."
      width="40"
    />
  </div>
</template>

<style scoped lang="scss">
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>
