<script>
import AppQuote from "./appQuote.vue";

export default {
  methods: {
    getImagepath(img) {
      return new URL(`../assets/images/${img}`, import.meta.url).href;
    },
  },
  components: { AppQuote },
};
</script>
<template>
  <!-- <img src="../assets/img/" alt=""> -->
  <!-- <img src="../assets/images/" alt=""> -->
  <AppQuote />
</template>
<style lang="scss" scoped></style>
