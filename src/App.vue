<template>
  <div class="aave-app">
    <page-header></page-header>
    <div class="view">
      <landing-page></landing-page>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script setup lang="ts">
import PageHeader from "./components/window/PageHeader.vue";
import PageFooter from "./components/window/PageFooter.vue";
import LandingPage from "./views/LandingPage.vue";
</script>

<style lang="scss">
@import "./assets/scss/default.scss";
</style>

<style lang="scss" scoped>
div.aave-app {
  display: flex;
  flex-direction: column;

  div.view {
    margin-top: 60px;
    min-height: 100vh;
  }
}
</style>
