<script>
import AppBody from "./components/appBody.vue";
import AppHeader from "./components/appHeader.vue";
import AppPoster from "./components/appPoster.vue";
import AppStructure from "./components/appStructure.vue";
import AppTestimonial from "./components/appTestimonial.vue";
import { store } from "./store";

export default {
  data() {
    return {
      store,
    };
  },

  components: { AppHeader, AppBody, AppPoster, AppStructure, AppTestimonial },
};
</script>

<template>
  <AppHeader />
  <AppBody />
  <AppPoster />
  <AppStructure
    :color="this.store.none"
    :list="this.store.objectArray"
    :check="0"
    Title="Specialists In Modern Construction"
    text=" Lorem ipsum dolor
  sit amet consectetur, adipisicing elit. Voluptatibus rerum et earum harum."
  />
  <AppStructure :list="this.store.objectarrayStats" :check="1" class="Style" />
  <AppStructure
    :color="this.store.none"
    :list="this.store.objectImg"
    :check="2"
    Title="Explore
  Recent Work"
    text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit.
  Voluptatibus rerum et earum harum."
  />
  <AppStructure
    :color="this.store.colorPanel1"
    :list="this.store.objectarrayValues"
    :check="0"
    Title="Core Values"
    text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
        rerum et earum harum."
  />
  <AppTestimonial />
  <AppStructure
    :color="this.store.none"
    :list="this.store.objectArrayNews"
    :check="3"
    Title="Latest News"
    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
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
