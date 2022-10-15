<template>
  <div class="container">
    <div class="message">
      If you want to get notified for free games,<br />
      please subscribe to our newsletter:
    </div>
    <label class="label">Name:</label>
    <input class="input" id="name" placeholder="Your name..." />

    <label class="label">Email:</label>
    <input class="input" id="email" placeholder="Your email..." />

    <input class="submit" value="Subscribe" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.message {
  color: var(--color-dark);
  margin-bottom: 1rem;
  text-align: center;
}

.label {
  align-items: unset;
  margin-left: 0.5rem;
}

/* haut | droit | bas | gauche */

.input {
  max-width: 600px;
  width: 80vw;
  margin: 0 0.5rem 0.5rem 0.5rem;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  border-radius: 3px;
  border: 1px solid var(--color-dark);
}

.submit {
  max-width: 600px;
  width: 40vw;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 3px;
  text-align: center;
  border: 1px solid var(--color-dark);
  background-color: var(--color-dark);
  color: var(--color-light);
}

.submit:hover {
  background-color: var(--color-light);
  color: var(--color-dark);
}

@media (max-width: 768px) {
}
</style>
