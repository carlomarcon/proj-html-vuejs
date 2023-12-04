<script>
import AppBody from "./components/appBody.vue";
import AppHeader from "./components/appHeader.vue";
import AppPoster from "./components/appPoster.vue";

export default { components: { AppHeader, AppBody, AppPoster } };
</script>

<template>
  <AppHeader />
  <AppBody />
  <AppPoster />
</template>

<style lang="scss">
@use "../src/style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
