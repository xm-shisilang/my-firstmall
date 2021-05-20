<template>
  <tab-bar>
    <tab-bar-item path="/home" activecolor="#c81623">
      <div class="box"></div>
      <span>首 页</span>
    </tab-bar-item>
    <tab-bar-item path="/category" activecolor="#c81623">
      <div class="box"></div>
      <span>分 类</span>
    </tab-bar-item>
    <tab-bar-item path="/cart" activecolor="#c81623">
      <div class="box"></div>
      <span>购物车</span>
    </tab-bar-item>
    <tab-bar-item path="/profile" activecolor="#c81623">
      <div class="box"></div>
      <span>我 的</span>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import tabBar from "../../common/tabbar/tabbar.vue";
import tabBarItem from "../../common/tabbar/tabbaritem.vue";
export default {
  name: "Maintabbar",
  components: {
    tabBar,
    tabBarItem,
  },
};
</script>
<style scoped>
#tabbar .tabbaritem .box {
  height: 25px;
  width: 25px;
  margin: 0 auto;
  margin-top: 3px;
  font-family: "icomoon";

  text-align: center;
  line-height: 25px;
  font-size: 24px;
}
</style>