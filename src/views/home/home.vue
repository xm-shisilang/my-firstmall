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
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      gotophiddenkey: {
        type: Boolean,
        default: true,
      },
      imgload: 0,
      taboffsetTop: 0,
      positionfixedkey: {
        type: Boolean,
        default: false,
      },
    };
  },
  computed: {
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
  unmounted() {
    console.log("unmounted");
  },
  activated() {
    this.$refs.homescroll.refresh(); //每次回到首页就重新刷新可滚动区域高度，
    console.log("home is active");
  },

  methods: {
    // 网络请求方法
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
        // console.log(this.goods[type].list);
        this.$refs.homescroll.finishPullUp();
      });
    },
    // 事件监听方法
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
      // 每次点击tabbar的按钮后回到tabbar置顶的位置（避免当前（比如pop）分类加载大量数据并且下拉太多时,切换tabbar导致scroll位置没刷新,而切换后当前类型(比如new\sell)数据不够或者加载不过来时出现一些问题）
      this.$refs.homescroll.scrollTo(0, -this.taboffsetTop, 0);
    },
    backtop() {
      // console.log("backtop");
      this.$refs.homescroll.scrollTo(0, 0, 500);
    },
    gotophidden(position) {
      this.gotophiddenkey = -position.y > 1000 ? false : true; // 下拉超过1000px hidden: false（显示） 否则为 true（隐藏）
      this.positionfixedkey = -position.y > this.taboffsetTop ? false : true;
    },
    loadMore() {
      // console.log("loadMore");
      this.getHomeGoods(this.currentType);
    },
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
    swiperImageLoad() {
      // console.log(this.$refs.tabcontrol2.$el.offsetTop);
      this.taboffsetTop = this.$refs.tabcontrol2.$el.offsetTop;
      // console.log(this.taboffsetTop);
    },
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
  z-index: 9999;
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