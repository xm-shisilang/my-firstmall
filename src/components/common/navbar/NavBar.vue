<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
    <!-- <div class="left"><h2 class="glyphicon glyphicon-menu-left"></h2></div>
    <div class="center"><h2>就是玩儿-首页</h2></div>
    <div class="right"><h2 class="glyphicon glyphicon-th-list"></h2></div> -->
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /* line-height: 54px; */
  margin: 0;
  border: 0;
  background-color: #ff8e96;
  color: #fff;
}
.navbar h2 {
  margin: 0;
  line-height: 54px;
  text-align: center;
}
.left,
.right {
  width: 60px;
  background-color: transparent;
}
.center {
  flex: 1;
  background-color: transparent;
}
</style>