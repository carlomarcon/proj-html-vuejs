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
  <AppStructure :list="this.store.objectArray" :check="false" />
  <AppStructure
    :list="this.store.objectarrayStats"
    :check="true"
    class="Style"
  />
</template>

<style lang="scss">
@use "../src/style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";

.Style {
  color: #fed03d;
}
</style>
