<script>
export default {
  props: {
    list: Object,
    Title: String,
    text: String,
  },
};
</script>
<template>
  <div class="wrapper">
    <!-- --!Specialists In Modern Construction -->
    <div class="Text">
      <h2>Specialists In Modern Construction</h2>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
        rerum et earum harum.
      </p>
    </div>
    <div class="Column">
      <div class="cardMedium" v-for="num in 4"></div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.wrapper {
  height: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .Text {
    height: 150px;
    width: 40%;
    text-align: center;
    line-height: 2.5rem;
  }

  .Column {
    height: 250px;
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .cardMedium {
      width: calc(100% / 4);
      height: 80%;
      background-color: red;
    }
  }
}
</style>
