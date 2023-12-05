<script>
export default {
  props: {
    list: Array,
    Title: String,
    text: String,
    Extra: String,
    check: Boolean,
  },
};
</script>
<template>
  <div class="wrapper">
    <!-- --!Specialists In Modern Construction -->
    <div class="Text" v-show="check === false">
      <h2>Specialists In Modern Construction</h2>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
        rerum et earum harum.
      </p>
    </div>
    <div class="Column">
      <div class="cardMedium" v-for="element in list">
        <i :class="element.logo"></i>
        <h3>{{ element.title }}</h3>
        <p>{{ element.paragraph }}</p>
      </div>
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
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 3px;

    .cardMedium {
      background-color: #f5f5f5;
      width: calc((100% / 4) - 3px);
      height: 90%;
      line-height: 25px;
      text-align: center;
      padding: 10px;

      i {
        padding: 1rem;
        width: 3rem;
        height: 3rem;
        border: 1px solid black;
        border-radius: 50%;
      }

      .style {
        border: none;
        padding: 1rem;
        width: 3rem;
        height: 3rem;
      }
    }
  }
}
</style>
