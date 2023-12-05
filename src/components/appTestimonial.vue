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
  <div class="wrapper">
    <div class="col">
      <h1>Our Home Owners Say</h1>
      <div></div>
      <img :src="getImagepath('home-testimonial-113165296.jpg')" alt="" />
      <p>
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        laudantium, natus quo voluptatem, quas eligendi ut obcaecati, unde
        reprehenderit cumque magnam! Unde eum esse maxime, reprehenderit
        officiis iure at voluptas?"
      </p>
      <h2>HARRY SMITH - NEW HOME OWNER</h2>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  height: 500px;
  width: 100%;
  justify-content: center;
  align-items: center;

  .col {
    height: 80%;
    width: 60%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    div {
      background-color: #fed03d;
      width: 10rem;
      height: 2px;
      margin: 1rem auto;
    }

    img {
      border-radius: 50%;
    }
  }
}
</style>
