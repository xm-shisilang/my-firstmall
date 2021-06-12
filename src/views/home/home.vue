<template>
  <div id="home">
    <nav-bar>
      <!-- <template v-slot:left>
        <h2>left</h2>
      </template> -->
      <template v-slot:center>
        <h2>就是玩儿-首页</h2>
      </template>
      <!-- <template v-slot:right>
        <h2 class="glyphicon glyphicon-th-list"></h2>
      </template> -->
    </nav-bar>
    <div class="homepage">
      <h3>这里是首页主体部分开头</h3>
      <div class="homebody">
        <span>首页主体</span>
        <div class="serch">搜索栏</div>
        <div class="nav">
          nav
          <swiper></swiper>
        </div>
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
import swiper from "@/components/common/swiper/swiper.vue";
// import NavBar from "../../components/common/navbar/NavBar.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    swiper,
  },
};
</script>
<style scoped>
.homepage {
  text-align: center;
  background-color: skyblue;
  line-height: 36px;
  margin: 0;
  margin-top: 50px;
  color: #fff;
  border-top: 1px solid red;
}
.navbar {
  z-index: 9999;
}
h2 {
  margin: 0;
  line-height: 50px;
}
.homebody {
  text-align: center;
  background-color: rgba(255, 182, 180, 0.7);
}
.nav {
  /* height: 100px; */
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