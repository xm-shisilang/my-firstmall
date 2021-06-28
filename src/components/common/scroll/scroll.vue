<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
      // console.log(this.probeType);
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
  },
  mounted() {
    // 创建bscroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true, // Vue中sroll组件中包含其他组件时必须加
      observeImage: true,
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    // 监听滚动事件
    if (this.probeType == 2 || this.probeType == 3) {
      this.scroll.on("scroll", (position) => {
        // console.log(position);
        this.$emit("gotophidden", position);
        // this.scroll.refresh(); //这里实时监听滚动事件，尝试在监听到滚动事件后也实时刷新scroll的可滚动高度
      });
    }
    // 监听上拉事件
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        // console.log("pullUpLoad");
        this.$emit("pullUpLoad");
      });
    }
  },
};
</script>
<style scoped>
</style>