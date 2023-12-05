<script>
export default {
  props: {
    list: Array,
    Title: String,
    text: String,
    Extra: String,
    check: Number,
  },
  methods: {
    getImagepath(img) {
      return new URL(`../assets/images/${img}`, import.meta.url).href;
    },
  },
};
</script>
<template>
  <div class="wrapper" :style="{ height: check === 1 ? '550px' : '600px' }">
    <!-- :style="{ height: check === 2 || check === 1 ? '300px' : '600px' }" -->
    <!-- --!Specialists In Modern Construction -->
    <div class="Text" v-show="check === 0 || check === 2">
      <h2>{{ Title }}</h2>

      <hr />
      <p>
        {{ text }}
      </p>
    </div>
    <div class="Column">
      <div
        :class="{
          cardMedium: check === 0 || check === 1,
          cardBig: check === 2,
        }"
        v-for="element in list"
      >
        <i v-if="check === 0" :class="element.logo"></i>
        <i v-if="check === 1" class="style" :class="element.logo"></i>
        <img v-if="check === 2" :src="getImagepath(element.img)" alt="" />
        <h3>{{ element.title }}</h3>
        <p :class="{ colorWhite: check === 1 }">{{ element.paragraph }}</p>
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

  .colorWhite {
    color: white;
  }

  .Text {
    height: 150px;
    width: 40%;
    text-align: center;
    line-height: 2.5rem;
  }

  .Column {
    height: 300px;
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
        font-size: 3rem;
        border: none;
        padding: 1rem;
        width: 6rem;
        height: 4rem;
      }
    }

    .cardBig {
      background-color: #f5f5f5;
      width: calc((100% / 3) - 3px);
      height: 100%;
      line-height: 25px;
      text-align: center;
      padding: 10px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
