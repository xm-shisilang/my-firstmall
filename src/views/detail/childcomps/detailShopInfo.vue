<template>
  <div class="shopinfomation" v-if="Object.keys(shop).length !== 0">
    <div class="shopinfohead">
      <div class="shoplogo">
        <img :src="'http:' + shop.logo" alt="" />
      </div>
      <div class="shopname">
        <span>{{ shop.name }}</span>
      </div>
    </div>
    <div class="shopsellinfo">
      <div class="sellinfoleft">
        <div class="shopsellcount">{{ shop.sells }}<br />总销量</div>
        <div class="shopgoodscount">{{ shop.goodsCount }}<br />全部宝贝</div>
      </div>
      <div class="sellinforight">
        <div class="shopcomment1">
          <span>{{ shop.score[0].name }}</span>
          <div>
            <span
              class="shopsorce"
              :class="{
                hightscoretext: shop.score[0].isBetter,
                lowscoretext: !shop.score[0].isBetter,
              }"
              >{{ shop.score[0].score }}</span
            >
            <span class="hightscorespan" v-show="shop.score[0].isBetter"
              >高</span
            >
            <span class="lowscorespan" v-show="!shop.score[0].isBetter"
              >低</span
            >
          </div>
        </div>
        <div class="shopcomment1">
          <span>{{ shop.score[1].name }}</span>
          <div>
            <span
              class="shopsorce"
              :class="{
                hightscoretext: shop.score[1].isBetter,
                lowscoretext: !shop.score[1].isBetter,
              }"
              >{{ shop.score[1].score }}</span
            >
            <span class="hightscorespan" v-show="shop.score[1].isBetter"
              >高</span
            >
            <span class="lowscorespan" v-show="!shop.score[1].isBetter"
              >低</span
            >
          </div>
        </div>
        <div class="shopcomment1">
          <span>{{ shop.score[2].name }}</span>
          <div>
            <span
              class="shopsorce"
              :class="{
                hightscoretext: shop.score[2].isBetter,
                lowscoretext: !shop.score[2].isBetter,
              }"
              >{{ shop.score[2].score }}</span
            >
            <span class="hightscorespan" v-show="shop.score[2].isBetter"
              >高</span
            >
            <span class="lowscorespan" v-show="!shop.score[2].isBetter"
              >低</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="shoplink">
      <span class="shoplinkclick">进店看看</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "detailShopInfo",
  props: {
    shop: {},
  },
  created() {
    // console.log(this.shop);
  },
};
</script>
<style scoped>
.shopinfomation {
  width: 100%;
  overflow: hidden;
}
.shopinfohead {
  height: 60px;
  margin-top: 30px;
  color: #333;
  text-align: left;
}
.shoplogo {
  display: inline-block;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  overflow: hidden;
  border: 1px solid #ccc;
  margin-left: 10px;
}
.shoplogo image {
  height: 100%;
  width: 100%;
  vertical-align: top;
}
.shopname {
  display: inline-block;
  transform: translateY(-25px);
  margin-left: 20px;
}
.shopname span {
  display: inline-block;
  height: 60px;
  font-size: 20px;
  line-height: 60px;
}
.shopsellinfo {
  display: flex;
}
.shopsellinfo .sellinfoleft,
.shopsellinfo .sellinforight {
  flex: 1;
}
.shopsellinfo .sellinfoleft {
  border-right: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-around;
  padding-top: 30px;
  font-size: 16px;
}
.sellinforight {
  padding-top: 10px;
}
.sellinforight > div {
  height: 30px;
}
.sellinforight > div > div {
  display: inline-block;
}
.sellinforight .shopsorce {
  display: inline-block;
  text-align: left;
  width: 30px;
  margin: 0 5px;
}
.hightscoretext {
  color: #ff4db5;
}
.hightscorespan {
  background-color: #ff4db5;
  color: #fff;
}
.lowscoretext {
  color: #00bd6e;
}
.lowscorespan {
  background-color: #00bd6e;
  color: #fff;
}
.shoplink {
  height: 50px;
  border-bottom: 5px solid #ccc;
  border-top: 1px solid #eee;
}
.shoplink .shoplinkclick {
  display: inline-block;
  height: 30px;
  padding: 0 40px;
  background-color: #eee;
  margin-top: 10px;
  font-size: 16px;
  line-height: 30px;
  color: #888;
}
</style>