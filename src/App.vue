<script>
import AppBody from "./components/appBody.vue";
import AppHeader from "./components/appHeader.vue";
import AppPoster from "./components/appPoster.vue";
import AppStructure from "./components/appStructure.vue";
import { store } from "./store";

export default {
  data() {
    return {
      store,
    };
  },

  components: { AppHeader, AppBody, AppPoster, AppStructure },
};
</script>

<template>
  <AppHeader />
  <AppBody />
  <AppPoster />
  <AppStructure
    :list="this.store.objectArray"
    :check="0"
    Title="Specialists In Modern Construction"
    text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
        rerum et earum harum."
  />
  <AppStructure :list="this.store.objectarrayStats" :check="1" class="Style" />
  <AppStructure
    :list="this.store.objectImg"
    :check="2"
    Title="Explore Recent Work"
    text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
        rerum et earum harum."
  />
</template>

<style lang="scss">
@use "../src/style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";

.Style {
  color: #fed03d;
  background-color: white;
}
</style>
