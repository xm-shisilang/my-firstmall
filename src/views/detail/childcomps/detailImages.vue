<template>
  <div class="detailImages" v-if="Object.keys(detailInfo).length !== 0">
    <div class="infodesc">
      <div class="detailinfodesc">{{ detailInfo.desc }}</div>
    </div>
    <div
      class="detailinfoimg"
      v-for="(item, index) in detailInfo.detailImage"
      :key="'detailinfoimg' + index"
    >
      <div class="detailinfokey">{{ item.key }}</div>
      <div class="detailimagelist">
        <div
          class="detailImagesImg"
          v-for="(itemimg, indey) in item.list"
          :key="'detailimage' + indey"
        >
          <img :src="'http:' + itemimg" alt="" @load="imageLoad" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "detailImages",
  props: {
    detailInfo: {},
  },
  methods: {
    imageLoad() {
      this.$emit("imageLoad");
    },
  },
};
</script>
<style scoped>
.detailinfodesc {
  text-align: left;
  line-height: 30px;
  margin: 20px 0;
}
.detailinfokey {
  height: 30px;
  line-height: 30px;
  font-size: 16px;
}
</style>