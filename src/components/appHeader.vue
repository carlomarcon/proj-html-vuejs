<script>
export default {
  methods: {
    getImagepath(img) {
      return new URL(`../assets/img/${img}`, import.meta.url).href;
    },
  },
};
</script>
<template>
  <header>
    <div class="logo">LOGO</div>
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

  .list {
    ul {
      list-style-type: none;

      li {
        display: inline-block;
        margin-left: 50px;

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
