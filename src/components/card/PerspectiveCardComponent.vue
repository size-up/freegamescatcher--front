<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: false
  },
  text: {
    type: String,
    required: false
  },

  width: {
    type: String,
    required: false
  },
  textAlign: {
    type: String,
    required: false,
    default: "center"
  }
})

function getStyle(): string {
  return `width: ${props.width}rem; text-align: ${props.textAlign};`
}
</script>

<template>
  <div class="card" :style="getStyle()">
    <div class="card__content">
      <h2 v-html="props.title"></h2>
      <p v-html="props.text"></p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  text-align: center;

  min-width: 100%;
  margin: 1rem 0 1rem 0;
  perspective: 1000px;

  transition: transform 1s;

  &__content {
    border-radius: 10px;
    border: 1px solid whitesmoke;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    background: linear-gradient(45deg, $rich-black-2, rgba(0, 0, 0, 0.25));

    padding: 0.5rem;

    transition: transform 3s;
  }

  &:hover &__content:hover {
    transform: perspective(700px) rotateX(5deg) rotateY(-5deg);
    transition: 1s;
  }

  @media screen and (max-width: 768px) {
    & {
      max-width: 90vw;
    }
  }
}
</style>
