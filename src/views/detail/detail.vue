<template>
  <div id="detail">
    <detail-nav-bar :iid="iid" @titleclick="titleclick" ref="detailnavbar" />
    <scroll
      class="detailscrollcontent"
      ref="detailscroll"
      :probeType="3"
      @gotophidden="gotophidden"
    >
      <!-- <div>
        <ul>
          <li
            v-for="(item, index) in $store.state.cartList"
            :key="'test vuex ' + index"
          >
            {{ item }}
          </li>
        </ul>
      </div> -->
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shops"></detail-shop-info>
      <detail-imeges
        :detailInfo="detailInfo"
        @imageLoad="imageLoad(4)"
      ></detail-imeges>
      <detail-params :param="param" ref="detailparams"></detail-params>
      <detail-comment-info
        :commentInfo="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <goods-list
        :goods="recommends"
        @itemImageLoad="imageLoad(4)"
        ref="recommend"
      ></goods-list>

      <div
        style="
          height: 300px;
          background-color: #f5ac88;
          text-align: center;
          font-size: 50px;
          padding-top: 50px;
        "
      >
        test 测试时用占据高度
      </div>
    </scroll>
    <detail-bottom-bar @addtocart="detailaddtocart" />
    <back-top @click="backtop" :class="{ hidden: gotophiddenkey }" />
    <toast ref="toastref"></toast>
  </div>
</template>
<script>
import detailNavBar from "./childcomps/detailNavBar.vue";
import detailSwiper from "./childcomps/detailSwiper.vue";
import detailBaseInfo from "./childcomps/detailBaseInfo.vue";
import detailShopInfo from "./childcomps/detailShopInfo.vue";
import detailImeges from "./childcomps/detailImages.vue";
import detailParams from "./childcomps/detailParams.vue";
import detailCommentInfo from "./childcomps/detailCommentInfo.vue";
import detailBottomBar from "./childcomps/detailBottomBar.vue";

import Scroll from "@/components/common/scroll/scroll.vue";

import GoodsList from "@/components/content/goods/GoodsList.vue";
import BackTop from "@/components/content/BackTop/backtop.vue";

import Toast from "@/components/common/toast/Toast.vue";

import {
  getDetail,
  getRecommend,
  GoodsInfo,
  Shop,
  Param,
} from "@/network/detail";

export default {
  name: "Detail",
  components: {
    detailNavBar,
    detailBottomBar,
    Scroll,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detailImeges,
    detailParams,
    detailCommentInfo,
    GoodsList,
    BackTop,
    Toast,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shops: {},
      detailInfo: {},
      imgload: 0,
      param: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [0, 0, 0, 0],
      gotophiddenkey: true,
    };
  },
  methods: {
    detailback() {
      // this.$router.push("/home");
      console.log("000");
    },
    imageLoad(num) {
      //参数num决定每加载num张图片后刷新scroll可滚动区域高度
      this.imgload += 1;
      if (this.imgload % num == 0) {
        this.$refs.detailscroll.refresh();

        this.themeTopYs[0] = 0;
        this.themeTopYs[1] = this.$refs.detailparams.$el.offsetTop;
        this.themeTopYs[2] = this.$refs.comment.$el.offsetTop;
        this.themeTopYs[3] = this.$refs.recommend.$el.offsetTop;
        // console.log(this.imgload, this.themeTopYs);
        // this.imgload = 0;
      } else if (
        this.imgload ==
        (this.detailInfo.detailImage[1]
          ? this.detailInfo.detailImage[0].list.length +
            this.detailInfo.detailImage[1].list.length +
            this.recommends.length
          : this.detailInfo.detailImage[0].list.length + this.recommends.length)
      ) {
        this.$refs.detailscroll.refresh();

        this.themeTopYs[0] = 0;
        this.themeTopYs[1] = this.$refs.detailparams.$el.offsetTop;
        this.themeTopYs[2] = this.$refs.comment.$el.offsetTop;
        this.themeTopYs[3] = this.$refs.recommend.$el.offsetTop;
        // console.log(this.imgload, this.themeTopYs);
        // this.imgload = 0;
      }
    },
    titleclick(index) {
      // console.log(index);

      this.$refs.detailscroll.scrollTo(0, -this.themeTopYs[index], 300);
    },
    gotophidden(position) {
      if (position.y < -1000) {
        this.gotophiddenkey = false;
      } else {
        this.gotophiddenkey = true;
      }
      if (this.$route.path !== "/home") {
        // if (position.y > -this.themeTopYs[1]) {
        //   this.$refs.detailnavbar.currentIndex = 0;
        // }
        // if (position.y <= -this.themeTopYs[1]) {
        //   this.$refs.detailnavbar.currentIndex = 1;
        // }
        // if (position.y <= -this.themeTopYs[2]) {
        //   this.$refs.detailnavbar.currentIndex = 2;
        // }
        // if (position.y <= -this.themeTopYs[3]) {
        //   this.$refs.detailnavbar.currentIndex = 3;
        // }
        if (position.y > -this.themeTopYs[1]) {
          this.$refs.detailnavbar.currentIndex = 0;
        } else if (position.y > -this.themeTopYs[2]) {
          this.$refs.detailnavbar.currentIndex = 1;
        } else if (position.y > -this.themeTopYs[3]) {
          this.$refs.detailnavbar.currentIndex = 2;
        } else {
          this.$refs.detailnavbar.currentIndex = 3;
        }
        // console.log(
        //   position.y,
        //   this.themeTopYs,
        //   this.$refs.detailnavbar.currentIndex
        // );
      }
    },
    backtop() {
      this.$refs.detailscroll.scrollTo(0, 0, 300);
    },
    detailaddtocart() {
      // console.log("detailaddtocartv");
      let product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      product.goodscount = 1;
      product.checked = true;
      // this.$store.commit("addCartGoods", product);
      this.$store.dispatch("addCartGoods", product).then((res) => {
        // console.log(res);
        this.$refs.toastref.show(res, 1500);
      });
    },
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      // console.log(this.iid, res);
      this.topImages = res.result.itemInfo.topImages;

      this.goods = new GoodsInfo(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      this.shops = new Shop(res.result.shopInfo);
      this.detailInfo = res.result.detailInfo;
      this.param = new Param(
        res.result.itemParams.info,
        res.result.itemParams.rule
      );
      if (res.result.rate.cRate !== 0) {
        this.commentInfo = res.result.rate;
      }
      // nextTick(() => {
      //   this.themeTopYs[0] = 0;
      //   this.themeTopYs[1] = this.$refs.detailparams.$el.offsetTop;
      //   this.themeTopYs[2] = this.$refs.comment.$el.offsetTop;
      //   this.themeTopYs[3] = this.$refs.recommend.$el.offsetTop;
      //   console.log(this.themeTopYs);
      // });
    });
    getRecommend().then((res) => {
      // console.log(res);
      this.recommends = res.data.list;
    });
  },
  mounted() {
    // console.log("detail mounted");
  },
  unmounted() {
    // console.log("detail unmounted");
  },
  updated() {
    // console.log("detail updated");
  },
};
</script>
<style scoped>
#detail {
  position: relative;
  height: 100vh;
  z-index: 4;
  background-color: #fff;
}

#detail .detailscrollcontent {
  position: absolute;
  top: 50px;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.hidden {
  display: none;
}
</style>