<template>
  <div class="back-top">
    <img src="@/assets/img/common/top.png" alt="" />
  </div>
</template>
<script>
export default {
  name: "BackTop",

  // methods: {
  //   backtop() {
  //     this.$emit("backtop");
  //   },
  // },
};
</script>
<style scoped>
.back-top {
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 60px;
  right: 10px;
}
.back-top img {
  width: 100%;
}
</style>