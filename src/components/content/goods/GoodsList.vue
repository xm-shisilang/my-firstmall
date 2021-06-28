<template>
  <div class="goods">
    <goods-list-item
      v-for="(item, index) in goods"
      :goods-item="item"
      :key="'goodsitem' + index"
      @itemImageLoad="itemImageLoad"
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