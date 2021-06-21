<template>
  <div id="home">
    <!-- 首页顶部标题栏============================================================= -->
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
      <!-- 首页轮播图============================================================= -->
      <home-swiper class="banners" :banners="banners"></home-swiper>
      <!-- 首页recommends============================================================= -->
      <home-recommend-view
        class="recommends"
        :recommends="recommends"
      ></home-recommend-view>
      <!-- 首页featrue============================================================= -->
      <featrue></featrue>
      <!-- 首页商品内容展示============================================================= -->
      <tab-control
        class="tabcontrol"
        :titles="['流行', '新款', '精选']"
      ></tab-control>
      <goods-list :goods="goods['pop'].list" />
      <!-- 首页开发时占页面长度内容用的没用的内用============================================================= -->
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
import HomeSwiper from "./childcomps/homeswiper.vue";
import HomeRecommendView from "./childcomps/homerecommendview.vue";
import Featrue from "./childcomps/featrue.vue";

import NavBar from "@/components/common/navbar/NavBar.vue";
import TabControl from "@/components/content/tabControl/TabControl.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";

import { getHomeMultidate, getHomeGoods } from "@/network/home.js";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    HomeRecommendView,
    Featrue,
    NavBar,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  created() {
    //请求首页基础数据 加This指向methods里的getHomeMultidate()
    this.getHomeMultidate();
    // 请求首页商品数据 加This指向methods里的getHomeGoods()
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    getHomeMultidate() {
      getHomeMultidate().then((res) => {
        // console.log(res);
        this.banners = res.banner.list;
        this.recommends = res.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      // console.log(page);
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.list);
        this.goods[type].page += 1;
        console.log(this.goods[type].list);
      });
    },
  },
};
</script>
<style scoped>
.homepage {
  text-align: center;
  /* background-color: skyblue; */
  line-height: 36px;
  margin: 0;
  margin-top: 50px;
  color: #fff;
  /* border-top: 1px solid red; */
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
.banners a {
  display: block;
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