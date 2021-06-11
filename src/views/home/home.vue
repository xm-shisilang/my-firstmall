<template>
  <div id="home">
    <nav-bar></nav-bar>
    <div class="homepage">
      <h2>就是玩儿-首页</h2>
      <div class="homebody">
        <span>首页主体</span>
        <div class="serch">搜索栏</div>
        <div class="nav">nav</div>
        <div class="banner">banner</div>
        <div class="focus">focus</div>
        <div class="others">others</div>
        <div class="footer">footer</div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
// import NavBar from "../../components/common/navbar/NavBar.vue";
export default {
  name: "Home",
  components: {
    NavBar,
  },
};
</script>
<style scoped>
.homepage {
  text-align: center;
  background-color: skyblue;
  line-height: 36px;
  margin: 0;
  color: #fff;
}
.homepage h2 {
  margin: 0;
}
.homebody {
  text-align: center;
  background-color: rgba(255, 182, 180, 0.7);
}
.nav {
  height: 100px;
  background-color: yellowgreen;
  border-bottom: 1px solid #333;
}
.banner {
  height: 100px;
  background-color: rgba(135, 206, 235, 0.7);
  border-bottom: 1px solid #333;
}
.focus {
  height: 100px;
  background-color: yellowgreen;
  border-bottom: 1px solid #333;
}
.others {
  height: 500px;
  background-color: rgba(135, 206, 235, 0.7);
  border-bottom: 1px solid #333;
}
.footer {
  height: 200px;
  background-color: #f0f0f0;
  color: #333;
}
</style>