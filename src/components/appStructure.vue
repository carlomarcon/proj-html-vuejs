<script>
export default {
  props: {
    list: Array,
    Title: String,
    text: String,
    Extra: String,
    check: Number,
    flag: Boolean,
    color: Array,
  },
  methods: {
    getImagepath(img) {
      return new URL(`../assets/images/${img}`, import.meta.url).href;
    },
  },
};
</script>
<template>
  <div
    class="wrapper"
    :style="{
      height: check === 1 ? '550px' : '',
      height: check === 3 ? '900px' : '',
      height: check === 4 ? '400px' : '',
      height: flag === true ? '600px' : '',
    }"
    :class="{ wrapperBackground: check === 1, secondZero: flag === true }"
  >
    <!-- :style="{ height: check === 2 || check === 1 ? '300px' : '600px' }" -->
    <!-- --!Specialists In Modern Construction -->
    <div
      class="Text"
      v-show="check === 0 || check === 2 || check === 3 || check === 4"
      :class="{ colorGray: check === 2 }"
    >
      <h2>{{ Title }}</h2>

      <div></div>
      <p>
        {{ text }}
      </p>
    </div>
    <div class="Column" :style="{ gap: check === 0 ? '6px' : '3px' }">
      <div
        :class="{
          cardMediumZero: check === 0,
          cardMedium: check === 1,
          cardBig: check === 2 || check === 3,
          cardXS: check === 4,
        }"
        v-for="(element, index) in list"
      >
        <i
          v-if="check === 0"
          :class="element.logo"
          :style="{
            'background-color': color[index],
            color: flag === true ? 'white' : 'black',
            width: flag === true ? '6rem' : '4rem',
            height: flag === true ? '4rem' : '3rem',
          }"
        ></i>

        <i v-if="check === 1" class="style" :class="element.logo"></i>
        <img
          v-if="check === 2 || check === 3 || check === 4"
          :src="getImagepath(element.img)"
          alt=""
        />
        <h3 :style="{ 'font-size': flag === true ? '1rem' : '1.17rem' }">
          {{ element.title }}
        </h3>
        <hr class="smallRule" v-if="flag === true" />
        <p :class="{ colorWhite: check === 1 }">{{ element.paragraph }}</p>
      </div>
    </div>
  </div>
  <div
    class="Extra"
    v-show="check === 2 || check === 3"
    :style="{
      'margin-top': check === 3 ? '10rem' : '0',
    }"
  >
    <div></div>
    <h2 :style="{ 'font-size': check === 3 ? '1rem' : '1.17rem' }">
      View All Project
    </h2>

    <div></div>
  </div>
</template>
<style scoped lang="scss">
// CLASSI EXTRA

.smallRule {
  width: 2rem;
  height: 2px;
  margin: 1rem auto;
}

.secondZero {
  background-color: #f5f5f5;

  i {
    font-size: 2rem;
  }
}
.wrapperBackground {
  background-image: url("../assets/images/home-244125289.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  i {
    color: #fed03d;
  }
  h3 {
    color: #fed03d;
    font-size: 2rem;
    margin: 4px 0;
  }
  p {
    font-size: 10px;
  }
}

.wrapper {
  height: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  .colorGray {
    color: #333333;
  }

  .colorWhite {
    color: white;
  }

  .Text {
    height: 150px;
    width: 40%;
    text-align: center;
    line-height: 2rem;

    div {
      background-color: #fed03d;
      width: 10rem;
      height: 2px;
      margin: 1rem auto;
    }
  }

  .Column {
    height: 300px;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 3px;

    .cardXS {
      width: calc((100% / 5) - 3px);
      height: 50%;
      line-height: 25px;
      text-align: center;
      padding: 10px;

      img {
        height: 100%;
        width: 100%;
      }
    }

    .cardMediumZero {
      border-radius: 15px;
      width: calc((100% / 4));

      i {
        color: #747474;
      }

      h3 {
        color: #747474;
      }

      p {
        color: #989898;
      }
    }

    .cardMedium,
    .cardMediumZero {
      width: calc((100% / 4) - 5px);
      height: 90%;
      line-height: 25px;
      text-align: center;
      padding: 30px;

      i {
        padding: 1rem;
        width: 4rem;
        height: 3rem;
        border: 1px solid #747474;
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

      p {
        margin-bottom: 5px;
      }
    }
  }
}
.Extra {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 100%;
  gap: 5rem;
  margin-bottom: 4rem;

  div {
    height: 1px;
    width: 19rem;
    background-color: rgb(185, 183, 183);
  }
}
</style>
