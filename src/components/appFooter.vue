<script>
import AppButton from "./appButton.vue";

export default {
  components: { AppButton },
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
      <img
        class="logo"
        :src="getImagepath('construction_logo_retina.png')"
        alt=""
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quidem
        veniam! Eum error unde corporis officia? Earum recusandae labore iure
        nesciunt, inventore, totam numquam iusto assumenda est explicabo
        consectetur incidunt.
      </p>
      <AppButton class="btn" text="LEARN MORE" />
    </div>
    <div class="col">
      <h4>LATEST NEWS</h4>
      <img :src="getImagepath('En2TRxLW4AEiWUN.jpeg')" alt="" />
      <img :src="getImagepath('adventure_thumbnail-400x300.jpg')" alt="" />
    </div>
    <div class="col">
      <h4>CONTACT US TODAY</h4>
      <ul>
        <li>
          Coporate Location <br />
          1800 Amphi-Parkway
        </li>
        <li>
          Residential Location <br />
          9521 Broadsberry Avenue <br />
          Paddlington RC7 9ZA
        </li>
        <li>800.458.556 / 1.800.532.2112</li>
        <li>info@your-domain.com</li>
        <li>Monday-Friday 9:00 AM- 6:00 PM</li>
        <li>Saturday - Sunday 9:00 AM- 12:00 PM</li>
      </ul>
    </div>
    <div class="col">
      <h4>FIND US</h4>
      <img :src="getImagepath('construction_map_pin.png-Notti')" alt="" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  height: 400px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .col {
    width: calc(100% / 5);
    height: 90%;

    ul {
      margin-top: 1rem;
      li {
        list-style-type: none;
        line-height: 1.5rem;
      }
    }

    img {
      height: 150px;
      width: 200px;
      margin-top: 1rem;
    }

    .logo {
      width: 150px;
      height: 70px;
      margin: 10px 0;
    }

    .btn {
      color: #3f3f3f;
      background-color: #fed03d;
      padding: 0.5rem;
      width: 10rem;
      margin-top: 10px;
    }
  }
}
</style>
