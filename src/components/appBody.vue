<script>
export default {
  methods: {
    getImagepath(img) {
      return new URL(`../assets/img/${img}`, import.meta.url).href;
    },
  },
};
</script>
<template></template>
<style lang="scss" scoped></style>
