<script>
import AppQuote from "./appQuote.vue";

export default {
  methods: {
    getImagepath(img) {
      return new URL(`../assets/img/${img}`, import.meta.url).href;
    },
  },
  components: { AppQuote },
};
</script>
<template>
  <AppQuote />
</template>
<style lang="scss" scoped></style>
