<template>
  <div class="card">
    <div class="input">
      <div class="input__message">
        If you want to get notified for free games,<br />
        subscribe now to our newsletter !
      </div>
      <label class="input__label">Name:</label>
      <input
        class="input__element"
        type="text"
        v-model="input.name"
        placeholder="Enter your name"
      />
      <label class="input__label">Email:</label>
      <input
        class="input__element"
        type="text"
        v-model="input.email"
        placeholder="Enter your email"
      />
    </div>

    <div class="subscribe">
      <button
        class="subscribe__button"
        :class="{ 'subscribe__button--is-disabled': disabled }"
        @click="onSubscribe"
      >
        Subscribe
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSubscribeStore } from "@/stores/subscribe";
import { reactive, ref, watch } from "vue";

const input = reactive({
  name: "",
  email: "",
});

const subscribeStore = useSubscribeStore();

let disabled = ref(true);

watch(input, () => {
  if (
    input.name.length > 0 &&
    input.name.length < 20 &&
    input.email.length > 0 &&
    validateEmail(input.email)
  ) {
    disabled.value = false;
  } else {
    disabled.value = true;
  }
});

/**
 * Validate email function
 * @param email The email to validate
 */
function validateEmail(email: string) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}

async function onSubscribe() {
  if (!disabled.value) {
    subscribeStore.isLoading = true;
    const response = await subscribeStore.onSbuscribe(input);
    console.log(response.data);
    subscribeStore.isLoading = false;
    console.log("Transmitted data:", input.name, input.email);
    //TODO send data to backend
  } else {
    console.log("Data not transmitted, please check your inputs");
  }
}
</script>

<style scoped lang="scss">
@use "@/styles/_variables.scss" as *;

.card {
  background-color: $color-primary-darker;
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem $color-primary-darkest;
  border-radius: 0.25rem;
  padding: 1rem;
}

$input-padding: 0.75rem 0.5rem 0.75rem 0.5rem;

.input {
  display: flex;
  flex-direction: column;

  color: $color-primary-lightest;

  &__message {
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
    padding: $input-padding;
    border-radius: 3px;
    border: 1px solid $color-primary-darkest;
  }
}

.subscribe {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__button {
    max-width: 300px;
    width: 50vw;
    margin: 0.5rem;
    padding: $input-padding;
    text-align: center;
    font-size: 1rem;
    border-radius: 3px;
    border: 2px solid $color-primary;
    background-color: $color-primary-light;
    color: $color-primary-lightest;
    cursor: pointer;

    &:hover {
      background-color: $color-primary-lightest;
      color: $color-primary;
    }

    &--is-disabled {
      border: 2px solid $color-primary-dark;
      background-color: $color-primary-lighter;
      color: $color-primary-lightest;
      cursor: not-allowed;
    }
  }
}
</style>
