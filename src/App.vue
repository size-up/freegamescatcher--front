<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
  <header class="header">
    <div class="header__welcome">
      <h2>Bienvenue sur</h2>
      <img class="header__logo" src="@/assets/logo-white.svg" alt="free games catcher logo" />
    </div>

    <nav class="header-nav">
      <RouterLink class="header-nav__link" to="/">Inscription</RouterLink>
      <RouterLink class="header-nav__link" to="/about">À propos</RouterLink>
    </nav>
  </header>
  <div class="router-view">
    <RouterView />
  </div>

  <!-- Dynamic stars -->
  <div>
    <div
      v-for="i in 20"
      :key="i"
      class="star"
      :style="{ top: Math.random() * 100 + '%', left: Math.random() * 100 + '%' }"
    ></div>
  </div>

  <!-- Fixed stars -->
  <!-- <div>
    <div class="star" style="top: 5%; left: 80%"></div>
    <div class="star" style="top: 10%; left: 10%"></div>
    <div class="star" style="top: 15%; left: 70%"></div>
    <div class="star" style="top: 20%; left: 40%"></div>
    <div class="star" style="top: 25%; left: 60%"></div>
    <div class="star" style="top: 30%; left: 20%"></div>
    <div class="star" style="top: 35%; left: 90%"></div>
    <div class="star" style="top: 40%; left: 50%"></div>
    <div class="star" style="top: 45%; left: 30%"></div>
    <div class="star" style="top: 50%; left: 80%"></div>
    <div class="star" style="top: 55%; left: 10%"></div>
    <div class="star" style="top: 60%; left: 70%"></div>
    <div class="star" style="top: 65%; left: 40%"></div>
    <div class="star" style="top: 70%; left: 60%"></div>
    <div class="star" style="top: 80%; left: 90%"></div>
    <div class="star" style="top: 85%; left: 50%"></div>
    <div class="star" style="top: 90%; left: 30%"></div>
    <div class="star" style="top: 95%; left: 80%"></div>
    <div class="star" style="top: 95%; left: 10%"></div>
    <div class="star" style="top: 100%; left: 10%"></div>
  </div> -->
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 10rem;

  &__welcome {
    text-align: center;
  }

  &__logo {
    width: 60%;

    @media screen and (max-width: 768px) {
      width: 90vw;
    }
  }

  @media screen and (max-width: 768px) {
    & {
      margin-top: 2.5rem;
    }
  }
}

.header-nav {
  display: flex;
  flex-direction: row;

  &__link {
    margin: 0 0.25rem 0 0.25rem;
    text-align: center;
    font-size: 1.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
}

.router-view {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 2rem;
}

.star {
  z-index: -1;

  position: absolute;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background-color: #fff;

  @keyframes twinkle {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  &:nth-child(odd) {
    animation-name: twinkle;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
  }
}
</style>
