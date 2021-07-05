<template>
  <nav-bar>
    <template v-slot:left>
      <div class="detailback" @click="detailback">
        <h3 class="glyphicon glyphicon-menu-left"></h3>
      </div>
    </template>
    <template v-slot:center>
      <div class="title">
        <div
          class="titleitem"
          v-for="(item, index) in titles"
          :key="'detailnavbartitleitem' + index"
          :class="{ active: index === currentIndex }"
          @click="titleItemClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </template>
    <template v-slot:right>
      <p>{{ iid }}</p>
    </template>
  </nav-bar>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
export default {
  name: "detailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  props: {
    iid: null,
  },
  methods: {
    detailback() {
      this.$router.back();
    },
    titleItemClick(index) {
      this.currentIndex = index;
      this.$emit("titleclick", index);
      // console.log(index);
    },
  },
};
</script>
<style scoped>
.navbar {
  height: 50px;
  background: #fff;
  border-bottom: 1px solid #eee;
  color: #666;
  z-index: 3;
}
.navbar .active {
  color: #ff69b4;
}
.navbar .left {
  height: 50px;
  line-height: 50px;
}
.navbar .left .detailback {
  width: 100%;
  height: 100%;
}
.navbar .left .glyphicon-menu-left {
  margin: 0;
}
.navbar .left .glyphicon-menu-left::before {
  margin: 0;
  line-height: 50px;
}
.center .title {
  display: flex;
  justify-content: space-between;
  height: 50px;
  margin: 0;
  line-height: 50px;
  border-left: 1px solid #f5f5f5;
  border-right: 1px solid #f5f5f5;
}
.center .title .titleitem {
  flex: 1;
  font-size: 16px;
}
.right p {
  height: 50px;
  line-height: 50px;
  text-align: center;
  margin: 0;
}
</style>