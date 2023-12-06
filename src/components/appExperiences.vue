<script>
import AppButton from "./appButton.vue";

export default { components: { AppButton } };
</script>
<template>
  <div class="wrapper">
    <div class="text">
      <h1>Building Inspiring Spaces</h1>
      <div></div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, assumenda.
        Atque illum officiis rem mollitia.
      </p>
    </div>
    <div class="button">
      <AppButton text="GET A FREE QUOTE" class="btn" />
      <h5>Only takes a few Seconds!</h5>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .text {
    width: 40%;
    height: 60%;

    div {
      background-color: #fed03d;
      width: 10rem;
      height: 2px;
      margin: 1rem 0;
    }
  }

  .button {
    width: 20%;
    height: 60%;
    text-align: center;

    .btn {
      color: #3f3f3f;
      background-color: #fed03d;
      padding: 0.5rem;
      width: 14rem;
      height: 3rem;
    }

    h5 {
      margin: 5px;
    }
  }
}
</style>
