<script>
export default {
  methods: {
    getImagepath(img) {
      return new URL(`../assets/images/${img}`, import.meta.url).href;
    },
  },
};
</script>
<template>
  <header>
    <div class="logo">
      <img :src="getImagepath('construction_mobile_logo_retina.png')" alt="" />
    </div>
    <div class="list">
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SERVICES</li>
        <li>WORK</li>
        <li>ARTICLES</li>
        <li>
          <button>GET QUOTE</button>
        </li>
      </ul>
    </div>
  </header>
</template>
<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  padding: 0 4rem;

  .logo {
    height: 50px;
    img {
      height: 100%;
      width: 100%;
    }
  }

  .list {
    ul {
      list-style-type: none;

      li {
        display: inline-block;
        margin-left: 50px;
        color: grey;
        button {
          width: 10rem;
          padding: 15px;
          background-color: #fed03d;
          border: none;
        }
      }
    }
  }
}
</style>
