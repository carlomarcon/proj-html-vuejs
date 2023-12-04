<script>
export default {
    methods: {
    getImagepath(img) {
      return new URL(`../assets/img/${img}`, import.meta.url).href;
    },
  },
};
};
</script>
<template>
  <header>
    <div class="logo"></div>
    <div>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SERVICES</li>
        <li></li>
        <li></li>
        <li>
          <button>GET QUOTE</button>
        </li>
      </ul>
    </div>
  </header>
</template>
<style lang="scss" scoped></style>
