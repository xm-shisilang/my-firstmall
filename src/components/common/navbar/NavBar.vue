<template>
  <div class="navbar">
    <!-- <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div> -->
    <div class="left">left</div>
    <div class="center">666</div>
    <div class="right">right</div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style scoped>
.navbar {
  display: flex;
  height: 44px;
  line-height: 44px;
  margin: 0;
  border: 0;
}
.left,
.right {
  width: 60px;
  background-color: green;
}
.center {
  flex: 1;
  background-color: purple;
}
</style>