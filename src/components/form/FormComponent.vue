<script setup lang="ts">
import ButtonRainbowComponent from "@/components/button/ButtonRainbowComponent.vue"
</script>

<template>
  <form class="form">
    <div class="form__label">
      <input type="text" name="name" placeholder=" " required />
      <label>Nom</label>
    </div>
    <div class="form__label">
      <input type="text" name="firstname" placeholder=" " required />
      <label>Prénom</label>
    </div>
    <div class="form__label">
      <input type="email" name="email" placeholder=" " required />
      <label>Email</label>
    </div>

    <ButtonRainbowComponent type="submit" text="S'inscrire" />
  </form>
</template>

<style scoped lang="scss">
@import "@/styles/_variables.scss";

$color_1: rgb(255, 255, 255);
$color_2: rgb(175, 65, 255);

.form {
  width: 100%;
  margin: 1rem 0 0 0;

  &__label {
    position: relative;

    input {
      width: 100%;
      margin-bottom: 25px;

      padding: 10px 0;
      font-size: 16px;
      color: $color_1;
      border: none;
      border-bottom: 1px solid #fff;
      outline: none;
      background: transparent;

      &:focus,
      &:not(:placeholder-shown) {
        ~ {
          label {
            top: -20px;
            left: 0;
            color: $color_2;
            font-size: 12px;
          }
        }
      }
    }

    label {
      position: absolute;
      top: 0;
      left: 0;
      padding: 10px 0;
      font-size: 16px;
      color: $color_1;
      pointer-events: none;
      transition: 0.5s;
    }
  }
}
</style>
