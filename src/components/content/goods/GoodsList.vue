<template>
  <div class="goods">
    <goods-list-item
      v-for="(item, index) in goods"
      :goods-item="item"
      :key="'goodsitem' + index"
      @itemImageLoad="itemImageLoad"
      @click="itemCLick(index)"
    />
  </div>
</template>
<script>
import GoodsListItem from "./goodsListItem.vue";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    itemImageLoad() {
      this.$emit("itemImageLoad");
    },
    itemCLick(index) {
      if (this.goods[index].iid) {
        this.$router.push("/detail/" + this.goods[index].iid);
      } else {
        // console.log("功能暂未开放");
        alert("功能暂未开放");
      }
    },
  },
};
</script>
<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  color: #333;
}
</style>