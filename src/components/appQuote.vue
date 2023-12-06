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
    <div class="stickerDown">
      <span>39$</span>
      <h5>On Sale</h5>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  background-image: url("../assets/images/home-slider-62528242.jpg");
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

    h1 {
      color: white;
    }

    h4 {
      color: #f5f5f5;
      opacity: 50%;
    }

    button {
      width: 12rem;
      padding: 12px;
    }

    .leftButton {
      margin-right: 8px;
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
    height: 80px;
    width: 80px;
    border-radius: 10px;
    position: absolute;
    background-color: #f5f5f5;
    padding: 10px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-weight: bold;
  }

  .stickerTop {
    top: 2%;
    right: 0%;
  }

  .stickerDown {
    top: 17%;
    right: 0;

    span {
      color: green;
      font-size: 2rem;
    }
  }
}
</style>
