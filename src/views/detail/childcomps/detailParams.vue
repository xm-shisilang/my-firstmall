<template>
  <div class="detailparams" v-if="Object.keys(param).length !== 0">
    <div class="paramimage" v-if="param.image !== undefined">
      <img :src="'http:' + param.image" alt="" />
    </div>
    <div class="goodssize">
      <div
        class="goodssizeitem"
        v-for="(item, index) in param.sizes[0]"
        :key="'paramsize' + index"
      >
        <div
          class="sizedata"
          v-for="(itm, index) in item"
          :key="'sizeitem' + index"
        >
          {{ itm }}
        </div>
      </div>
    </div>
    <div class="paraminfo">
      <div
        class="paraminfoitem"
        v-for="(item, index) in param.infos"
        :key="'paraminfo' + index"
      >
        <div class="paraminfoitemkey">{{ item.key }}：</div>
        <div class="paraminfoitemvalue">{{ item.value }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "detailParams",
  props: {
    param: {},
  },
};
</script>
<style scoped>
.detailparams {
  margin: 20px 0;
}
.goodssize {
  width: 100%;
  border-top: 1px solid #ccc;
  border-right: 1px solid #ccc;
  margin: 10px 0;
}
.goodssizeitem {
  display: flex;
  /* height: 30px; */
  line-height: 30px;
  border-bottom: 1px solid #ccc;
}
.goodssizeitem .sizedata {
  flex: 1;
  border-left: 1px solid #ccc;
}
.paraminfo {
  width: 100%;
  border-top: 1px solid #ccc;
}
.paraminfoitem {
  display: flex;
  /* height: 30px; */
  line-height: 30px;
  width: 100%;
  border-bottom: 1px solid #ccc;
}
.paraminfoitem > div {
  /* flex: 1; */
  text-align: left;
}
.paraminfoitem .paraminfoitemkey {
  width: 30%;
  text-indent: 2em;
  border-right: 1px solid #ccc;
}
.paraminfoitem .paraminfoitemvalue {
  width: 70%;
  text-indent: 1em;
  color: #f5839b;
}
</style>