<template>
  <div class="recommends">
    <div
      class="recommend"
      v-for="(item, index) in recommends"
      :key="'recommends' + index"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <p>{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.recommends {
  width: 100%;
  display: flex;
  background-color: #fff;
  justify-content: space-evenly;
  padding: 10px 0 20px 0;
  border-bottom: 8px solid #eee;
}
.recommends .recommend {
  width: 23%;
}
.recommends .recommend a {
  display: block;
}

.recommends .recommend a p {
  color: #666;
  font-size: 14px;
  margin-bottom: 0;
}
</style>