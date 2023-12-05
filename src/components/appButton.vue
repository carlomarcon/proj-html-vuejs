<script>
export default {
  props: {
    text: String,
  },
};
</script>
<template>
  <button>{{ text }}</button>
</template>
<style lang="scss" scoped>
button {
  background-color: #333333;
  color: white;
  border: none;
}
</style>
