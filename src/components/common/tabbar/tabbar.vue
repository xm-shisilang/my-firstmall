<template>
  <div id="tabbar">
    <slot> </slot>
  </div>
</template>
<script>
export default {
  name: "tabBar",
};
</script>
<style scoped>
#tabbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  margin: 0;
  padding: 0;
  text-align: center;
  height: 49px;
  background-color: #fcc;
  /* line-height: 50px; */
  color: #fff;
  box-shadow: 0 -4px 4px rgba(255, 204, 204, 0.2);
}
</style>