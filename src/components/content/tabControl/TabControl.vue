<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="'tabcontrol' + index"
      class="tab-control-item"
      :class="{ active: index === currentIndex }"
      @click="itemclick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemclick(index) {
      this.currentIndex = index;
    },
  },
};
</script>
<style scoped>
.tabcontrol {
  position: sticky;
  top: 50px;
  left: 0;
  display: flex;
  text-align: center;
  color: #666;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  background-color: #fff;
  z-index: 99;
}
.tab-control-item {
  flex: 1;
}
.tabcontrol .active span {
  color: hotpink;
  border-bottom: 3px solid hotpink;
}
.tab-control-item span {
  padding: 6px;
}
</style>