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
  <div class="wrapper">
    <div class="container">
      <h1>BUILDING INSPIRING SPACES</h1>
      <h4>We build Inspiring Residential & Commercial Spaces</h4>
      <button class="leftButton">EXPLORE RECENT WORK</button
      ><button class="rightButton">GET A QUOTE TODAY</button>
    </div>

    <div class="stickerTop">Demos</div>
    <div class="stickerDown">On Sale</div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  background-image: url("../assets/images/construction_thumbnail-600x450.jpg");
  background-repeat: no-repeat;

  background-position: left;
  background-size: cover;

  height: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .container {
    height: 200px;
    width: 40%;
    text-align: center;
    line-height: 2.5rem;

    button {
      width: 12rem;
      padding: 8px;
    }

    .leftButton {
      margin-right: 5px;
      background-color: #333333;
      color: white;
      border: none;
    }

    .rightButton {
      background-color: #fed03d;
      color: #333333;
      border: none;
    }
  }
  .stickerTop,
  .stickerDown {
    height: 60px;
    width: 60px;
    border-radius: 10px;
    position: absolute;
    background-color: grey;
    padding: 10px 10px;
  }

  .stickerTop {
    top: 2%;
    right: 0%;
  }

  .stickerDown {
    top: 15%;
    right: 0;
  }
}
</style>
