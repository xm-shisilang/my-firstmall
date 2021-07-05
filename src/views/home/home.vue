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
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabcontrol1"
      :class="{ posisionfixed: true, hidden: positionfixedkey }"
    ></tab-control>
    <scroll
      class="homescrollcontent"
      ref="homescroll"
      :probe-type="3"
      :pull-up-load="true"
      @gotophidden="gotophidden"
      @pullUpLoad="loadMore"
    >
      <div class="homepage">
        <home-swiper
          class="banners"
          :banners="banners"
          @swiperImageLoad="swiperImageLoad"
        ></home-swiper>
        <home-recommend-view
          class="recommends"
          :recommends="recommends"
        ></home-recommend-view>
        <featrue></featrue>
        <tab-control
          :titles="['流行', '新款', '精选']"
          @tabClick="tabClick"
          ref="tabcontrol2"
          :class="{ hidden: !positionfixedkey }"
        ></tab-control>
        <goods-list
          :goods="showGoods"
          @itemImageLoad="itemImageLoad(4)"
          :class="{ mt50: !positionfixedkey }"
        />
      </div>
    </scroll>
    <back-top @click="backtop" :class="{ hidden: gotophiddenkey }" />
  </div>
</template>
<script>
import HomeSwiper from "./childcomps/homeswiper.vue";
import HomeRecommendView from "./childcomps/homerecommendview.vue";
import Featrue from "./childcomps/featrue.vue";

import NavBar from "@/components/common/navbar/NavBar.vue";
import Scroll from "@/components/common/scroll/scroll.vue";

import TabControl from "@/components/content/tabControl/TabControl.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";
import BackTop from "@/components/content/BackTop/backtop.vue";

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
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [], //用于保存轮播图数据
      recommends: [], //用于保存小导航栏数据
      goods: {
        // 用于保存首页商品数据
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop", // 用于记录当前goodslist里展示的数据类型
      gotophiddenkey: {
        // 用于记录决定返回顶部按钮是否显示的布尔值
        type: Boolean,
        default: true,
      },
      imgload: 0, // 用于记录goodslist加载完成的图片数，切换数据类型也会加，用于计算判断可滚动高度的刷新
      taboffsetTop: 0, // 用于记录tabbar离页面顶部的距离
      positionfixedkey: {
        // 用于记录决定tabbar是否吸顶的布尔值
        type: Boolean,
        default: false,
      },
      homescrollY: 0, //用于记录当前已滚动距离（homescroll）
    };
  },
  computed: {
    // 计算goodslist里数据
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    //请求首页基础数据 加This指向methods里的getHomeMultidate()
    this.getHomeMultidate();
    // 请求首页商品数据 加This指向methods里的getHomeGoods()
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    //监听图片加载完成
  },
  // 测试用的vue生命周期函数：
  mounted() {},
  activated() {
    this.$refs.homescroll.refresh(); //每次回到首页就重新刷新可滚动区域高度，
    // console.log("home is active");
  },

  methods: {
    // 网络请求方法
    // 获取首页基础数据 轮播图，小导航栏数据
    getHomeMultidate() {
      getHomeMultidate().then((res) => {
        // console.log(res);
        this.banners = res.banner.list;
        this.recommends = res.recommend.list;
      });
    },
    //获取首页商品数据 需传入类型（pop、new、sell）
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      // console.log(page);
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.list);
        this.goods[type].page += 1;
        // console.log(this.goods[type].list);
        this.$refs.homescroll.finishPullUp();
      });
    },
    // 事件监听方法
    // 监听tabbar中组件点击 实现：1、切换goodslist中展示的数据 2、切换tabbar中子组件样式 3、两个tabbar同步（样式） 3、点击时滚动距离大于tabbar距顶距离则回到tabbar置顶所在位置
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabcontrol1.currentIndex = index;
      this.$refs.tabcontrol2.currentIndex = index;
      // 每次点击tabbar的按钮后回到tabbar置顶的位置（避免当前（比如pop）分类加载大量数据并且下拉太多时,切换tabbar导致scroll位置没刷新,而切换后当前类型(比如new\sell)数据不够或者加载不过来时出现一些问题） if判断当前滚动距离是否大于tabbar离顶部距离，大于才需要滚回tabbar所在距离，小于则不动。
      if (this.homescrollY < -this.taboffsetTop) {
        this.$refs.homescroll.scrollTo(0, -this.taboffsetTop, 0);
      }
    },
    // 返回顶部
    backtop() {
      // console.log("backtop");
      this.$refs.homescroll.scrollTo(0, 0, 500);
    },
    //实时监听scroll穿回来的position(x,y),决定返回顶部按钮是否隐藏、tabbar是否吸顶
    gotophidden(position) {
      this.homescrollY = position.y;
      this.gotophiddenkey = -position.y > 1000 ? false : true; // 下拉超过1000px hidden: false（显示） 否则为 true（隐藏）
      this.positionfixedkey = -position.y > this.taboffsetTop ? false : true;
    },
    // 下拉加载更多时调用 加载更多商品数据
    loadMore() {
      // console.log("loadMore");
      this.getHomeGoods(this.currentType);
    },
    // 监听goodslist传过来的事件itemImageLoad，在加载完每张图片调用一次，这里设置了可传参数num决定每加载num张图片后刷新一次scroll的可滚动高度
    itemImageLoad(num) {
      //参数num决定每加载num张图片后刷新scroll可滚动区域高度
      this.imgload += 1;
      if (this.imgload % num == 0) {
        this.$refs.homescroll.refresh();
        // this.imgload = 0;
      } else if (this.imgload == this.goods[this.currentType].list.length) {
        this.$refs.homescroll.refresh();
        this.imgload = 0;
      }
    },
    // 监听swiper组件中图片加载，在加载完成一张图后获取tabbar的离页面顶部高度（offsetTop）
    swiperImageLoad() {
      // console.log(this.$refs.tabcontrol2.$el.offsetTop);
      this.taboffsetTop = this.$refs.tabcontrol2.$el.offsetTop;
      // console.log(this.taboffsetTop);
    },
    // 防抖动函数部件，用于优化app性能防抖动，这里无法在子组件中发射，本组件监听事件总线事件，故防抖动暂时无法完成，权衡之下选择控制每加载num张图片后刷新可滚动高度
    // debounce(func, delay) {
    //   let timer = null;
    //   return function (...args) {
    //     if (timer) clearTimeout(timer);
    //     timer = setTimeout(() => {
    //       func.apply(this, args);
    //     }, delay);
    //   };
    // },
  },
};
</script>
<style scoped>
.homepage {
  text-align: center;
  /* background-color: skyblue; */
  line-height: 36px;
  margin: 0;
  /* margin-top: 50px; */
  color: #fff;
  /* border-top: 1px solid red; */
}
.navbar {
  z-index: 3;
}
.hidden {
  display: none;
}
/* .posisionfixed {
  position: fixed;
  top: 50px;
  left: 0;
} */
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
#home {
  position: relative;
  height: 100vh;
}
.homescrollcontent {
  position: absolute;
  top: 50px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
  background-color: #fff;
}
.mt50 {
  margin-top: 40px;
}
</style>