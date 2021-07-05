<template>
  <swiper
    :slides-per-view="1"
    :space-between="10"
    :centeredSlides="true"
    :loop="true"
    :autoplay="{ delay: 2000, disableOnInteraction: false }"
    :pagination="{
      el: '.swiper-pagination',
      clickable: true,
    }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(item, index) in topImages" :key="'topImages' + index">
      <img :src="'http:' + item" alt="" />
    </swiper-slide>

    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
    <!-- Add Arrows -->
    <!-- <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div> -->
  </swiper>
</template>
<script>
import SwiperCore, {
  Navigation, //引入左右箭头管理组件
  Pagination, // 小点
  Scrollbar, // 底部进度条 出错没用
  A11y, // 辅助工具 （没看出来有啥用）
  Autoplay, // 自动轮播模块
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
// 启用上面引入的非默认功能模块
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

import "swiper/swiper-bundle.min.css";

// 导出 组件、方法
export default {
  name: "DetailSwiper",
  components: {
    // swiperItem,
    Swiper,
    SwiperSlide,
  },
  props: {
    topImages: {
      type: Array,
    },
  },
  data() {
    return {
      isload: false,
    };
  },
  methods: {
    onSwiper(swiper) {
      // console.log(swiper);
    },
    onSlideChange() {
      // console.log("slide change");
    },
    swiperImageLoad() {
      if (!this.isload) {
        this.$emit("swiperImageLoad");
        this.isload = true;
      }
    },
  },
};
</script>
<style scoped>
.swiper-container {
  height: 300px !important;
  /* margin-top: 50px; */
}
img {
  width: 100%;
  transform: translateY(-50px);
}
</style>