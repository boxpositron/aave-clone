<template>
  <div class="landing-page">
    <section class="hero"></section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "../assets/scss/colors.scss";

div.landing-page {
  section {
    &.hero {
      background-image: linear-gradient(45deg, $fuchsia-pink, $pelorous);
      min-height: 70vh;
    }
  }
}
</style>
