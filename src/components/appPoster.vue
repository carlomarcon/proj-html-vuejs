<script>
import AppButton from "./appButton.vue";

export default { components: { AppButton } };
</script>
<template>
  <div class="poster">
    <h1>Do You Have a Construction Project We Can Help With?</h1>
    <AppButton text="Get A Quote" class="Btn" />
  </div>
</template>
<style lang="scss" scoped>
.poster {
  position: relative;
  height: 120px;
  background-color: #fed03d;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333333;

  .Btn {
    border: 1px white solid;
    position: absolute;
    top: 100%;
    transform: translateY(-50%);
    padding: 5px;
    width: 10rem;
  }
}
</style>
