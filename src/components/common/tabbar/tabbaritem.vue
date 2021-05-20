<template>
  <div
    :class="{ tabbaritem: true, active: isActive }"
    @click="itemclick"
    :style="activestyle"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "tabBarItem",
  props: {
    path: String,
    activecolor: {
      type: String,
      default: "red",
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activestyle() {
      return this.isActive ? { color: this.activecolor } : {};
    },
  },
  methods: {
    itemclick() {
      this.$router.replace(this.path);
    },
  },
};
</script>
<style scoped>
@font-face {
  font-family: "icomoon";
  src: url("fonts/icomoon.eot?9gilik");
  src: url("fonts/icomoon.eot?9gilik#iefix") format("embedded-opentype"),
    url("fonts/icomoon.ttf?9gilik") format("truetype"),
    url("fonts/icomoon.woff?9gilik") format("woff"),
    url("fonts/icomoon.svg?9gilik#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

/* #tabbar .tabbaritem .box {
  height: 25px;
  width: 25px;
  margin: 0 auto;
  margin-top: 3px;
  font-family: "icomoon";

  text-align: center;
  line-height: 25px;
  font-size: 24px;
} */

#tabbar .tabbaritem {
  flex: 1;
  /* width: 24%; */
  font-size: 14px;
  color: #fff;
}
</style>