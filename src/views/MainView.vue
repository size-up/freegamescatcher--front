<script setup lang="ts">
import FormComponent from "@/components/form/FormComponent.vue"
import PerspectiveCardComponent from "@/components/card/PerspectiveCardComponent.vue"
</script>

<template>
  <main class="main">
    <PerspectiveCardComponent
      title="Comment ne jamais rater un jeu gratuit sur l’Epic Games Store ?"
      text="<br/>Découvrez Free Games Catcher, le service qui vous envoie chaque vendredi à 18 h une newsletter avec les jeux gratuits du moment et ceux qui le seront la semaine d'après.
      <br/>
      <br/>Vous pourrez ainsi profiter des meilleures offres sans vous prendre la tête.
      <br/>
      <br/><em>Et bientôt, vous pourrez même recevoir les alertes directement sur votre channel Discord !</em>
      <br/>
      <br/>Free Games Catcher, c’est la possibilité de découvrir de nouveaux jeux.
      <br/>
      <br/>Qu’attendez-vous pour vous inscrire ?"
      width="40"
    />
    <FormComponent />
  </main>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
