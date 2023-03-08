<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  type: {
    type: String as () => "button" | "submit" | "reset",
    required: true
  },
  justifyContent: {
    type: String as () => "center" | "flex-start" | "flex-end",
    required: false,
    default: "center"
  }
})
</script>

<template>
  <div class="button" :style="{ justifyContent: props.justifyContent }">
    <button class="button__content" role="button" :type="props.type">
      <span>{{ props.text }}</span>
    </button>
  </div>
</template>

<style scoped lang="scss">
.button {
  display: flex;
  align-items: center;

  &__content {
    display: flex;
    justify-content: center;

    background-image: linear-gradient(
      144deg,
      rgb(175, 65, 255),
      rgb(90, 65, 240) 50%,
      rgb(0, 220, 235)
    );
    border: 0;
    border-radius: 8px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    box-sizing: border-box;
    color: #ffffff;
    font-size: 20px;
    line-height: 1em;
    padding: 3px;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;

    &:active,
    &:hover {
      outline: 0;
    }

    & span {
      background-color: rgb(5, 6, 45);
      padding: 16px 24px;
      border-radius: 6px;
      width: 100%;
      height: 100%;
      transition: 300ms;
    }

    &:hover span {
      background: none;
    }

    @media (min-width: 768px) {
      & {
        font-size: 20px;
        min-width: 196px;
      }
    }
  }
}
</style>
