<template>
  <div class="goodsitem">
    <a :href="goodsItem.link">
      <img :src="goodsItem.show.img" alt="" />
      <div class="item-info">
        <p>{{ goodsItem.title }}</p>
        <span class="price">￥{{ goodsItem.price }} </span>
        <span class="collect"
          >&nbsp;
          <span class="glyphicon glyphicon-star-empty"></span>
          <span>收藏: {{ goodsItem.cfav }}</span></span
        >
      </div>
    </a>
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
.goodsitem a img {
  width: 100%;
  border-radius: 5px;
}
.goodsitem a .item-info {
  width: 100%;
  height: 45px;
  position: absolute;
  padding-bottom: 5px;
  bottom: 0;
  left: 0;
}
.goodsitem a p,
.goodsitem a span {
  height: 20px;
  overflow: hidden;
  line-height: 20px;
  margin: 0;
}
.goodsitem a p {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goodsitem a span {
  display: inline-block;
}
.goodsitem a .item-info .price {
  color: red;
}
.goodsitem a .item-info .collect {
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