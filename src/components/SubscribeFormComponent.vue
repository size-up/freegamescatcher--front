<template>
  <div class="input">
    <div class="input__message">
      If you want to get notified for free games,<br />
      please subscribe to our newsletter:
    </div>
    <label class="input__label">Name:</label>
    <input class="input__element" id="name" placeholder="Your name..." />
    <label class="input__label">Email:</label>
    <input class="input__element" id="email" placeholder="Your email..." />
  </div>

  <div class="subscribe">
    <button class="subscribe__element">Subscribe</button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "../styles/_variables.scss" as *;

.input {
  display: flex;
  flex-direction: column;

  &__message {
    color: $color-dark;
    margin-bottom: 1rem;
    text-align: center;
  }

  &__label {
    align-items: unset;
    margin-left: 0.5rem;
  }

  &__element {
    max-width: 600px;
    width: 80vw;
    margin: 0 0.5rem 0.5rem 0.5rem;
    padding: 0.75rem 0.5rem 0.75rem 0.5rem;
    border-radius: 3px;
    border: 1px solid $color-dark;
  }
}

.subscribe {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__element {
    max-width: 300px;
    width: 40vw;
    margin: 0.5rem;
    padding: 0.75rem 0.5rem 0.75rem 0.5rem;
    border-radius: 3px;
    text-align: center;
    border: 1px solid $color-dark;
    background-color: $color-dark;
    color: $color-light;
    cursor: pointer;
  }

  &__element:hover {
    background-color: $color-light;
    color: $color-dark;
  }
}
</style>
