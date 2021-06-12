<template>
  <swiper
    :slides-per-view="1"
    :space-between="50"
    :centeredSlides="true"
    :loop="true"
    :autoplay="{ delay: 2000, disableOnInteraction: false }"
    :pagination="{
      el: '.swiper-pagination',
      clickable: true,
    }"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide
      ><img src="@/assets/img/home/testbanner/bn0.jpeg" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img src="@/assets/img/home/testbanner/bn1.jpeg" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img src="@/assets/img/home/testbanner/bn2.jpeg" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img src="@/assets/img/home/testbanner/bn3.jpeg" alt=""
    /></swiper-slide>
    <swiper-slide
      ><img src="@/assets/img/home/testbanner/bn4.jpeg" alt=""
    /></swiper-slide>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components 引入非默认功能模块，swiper-vue组件
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

// Import Swiper styles
// import "swiper/swiper.scss";
//引入css样式文件
import "swiper/swiper-bundle.min.css";
// 导出 组件、方法
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
  // 在vue里使用swiper现在需要在组件模板中swiper标签中动态绑定数据，在这里写没用
  // spaceBetween: 30,
  // centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
};
</script>
<style >
img {
  width: 100%;
}
.swiper-pagination {
  background-color: rgba(0, 0, 0, 0.4);
}
.swiper-pagination span {
  background-color: #fff;
}
.swiper-button-next::after,
.swiper-button-prev::after {
  color: #fff;
}
.swiper-button-next,
.swiper-button-prev {
  outline: none;
}
</style>