<template>
  <div class="goodsitem">
    <img v-lazy="showimg" alt="" @load="itemImageLoad" />

    <div class="item-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">￥{{ goodsItem.price }} </span>
      <span class="collect"
        >&nbsp;
        <span class="glyphicon glyphicon-star-empty"></span>
        <span>收藏: {{ goodsItem.cfav }}</span></span
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    itemImageLoad() {
      this.$emit("itemImageLoad");
    },
  },
  computed: {
    showimg() {
      let imglink = "";
      if (this.goodsItem.show) {
        imglink = this.goodsItem.show.img;
      } else {
        imglink = this.goodsItem.image;
      }
      return imglink;
    },
  },
};
</script>
<style scoped>
.goodsitem {
  width: 46%;
  padding-bottom: 45px;
  position: relative;
}
.goodsitem a {
  display: block;
  color: #333;
}
.goodsitem img {
  width: 100%;
  border-radius: 5px;
}
.goodsitem .item-info {
  width: 100%;
  height: 45px;
  position: absolute;
  padding-bottom: 5px;
  bottom: 0;
  left: 0;
}
.goodsitem p,
.goodsitem span {
  height: 20px;
  overflow: hidden;
  line-height: 20px;
  margin: 0;
}
.goodsitem p {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goodsitem span {
  display: inline-block;
}
.goodsitem .item-info .price {
  color: red;
}
.goodsitem .item-info .collect {
  /* position: relative;
  margin-left: 20px; */
  /* color: #333; */
  color: #6cb1ff;
  /* vertical-align: inherit; */
}

/* .collect::before {
  content: "";
  position: absolute;
  top: 3px;
  left: -12px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/common/collect.svg") 0 0 / 14px 14px;
} */
</style>