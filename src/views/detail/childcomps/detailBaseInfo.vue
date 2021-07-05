<template>
  <div class="baseinfo" v-if="Object.keys(goods).length !== 0">
    <div class="detailgoodstitle">
      {{ goods.title }}
    </div>
    <div class="detailgoodsprice">
      <span class="detailgoodsnewprice">{{ goods.newPrice }}</span>
      <span class="detailgoodsoldprice">{{ goods.oldPrice }}</span>
      <span
        class="detailgoodsdiscont"
        :style="{
          backgroundColor: goods.discountBgColor,
        }"
        :class="{ hidden: goods.discount ? false : true }"
      >
        {{ goods.discount }}
      </span>
    </div>
    <div class="detailgoodscolumns">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.columns[2] }}</span>
    </div>
    <div class="detailgoodsservices">
      <span
        v-for="(item, index) in goods?.services"
        :key="'detailgoodsservices' + index"
      >
        <span class="glyphicon glyphicon-ok"></span> {{ item.name }}</span
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "detailBaseInfo",
  props: {
    goods: {},
  },
};
</script>
<style scoped>
.baseinfo {
  /* height: 200px; */
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
}
.baseinfo .detailgoodstitle {
  height: 60px;
  text-align: left;
  background-color: #f5f5f5;
  font-size: 16px;
  line-height: 30px;
  text-indent: 0;
  text-overflow: ellipsis;
}
.baseinfo .detailgoodsprice {
  height: 30px;
  line-height: 30px;
  text-align: left;
}
.baseinfo .detailgoodsprice span {
  display: inline-block;
  margin-left: 10px;
}
.detailgoodsnewprice {
  font-size: 20px;
  color: red;
}
.detailgoodsoldprice {
  font-size: 24px;
  color: #ccc;
  text-decoration: line-through;
}
.detailgoodsdiscont {
  background-color: #ff87ad;
  color: #fff;
  line-height: 1;
  font-size: 16px;
  padding: 2px 5px;
  border-radius: 10px;
}
.detailgoodscolumns {
  display: flex;
  justify-content: space-between;
  height: 30px;
  line-height: 30px;
  color: #999;
}
.detailgoodscolumns span {
  flex: 1;
}
.detailgoodsservices {
  display: flex;
  line-height: 30px;
  flex-wrap: wrap;
  justify-content: space-between;
}
.detailgoodsservices > span {
  width: 40%;
  color: #666;
  text-align: left;
}
.detailgoodsservices > span span {
  margin: 0 10px;
}
.hidden {
  display: none;
}
</style>