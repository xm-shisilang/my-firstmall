<template>
  <!-- <div id="nav"> -->

  <!-- <router-link to="/about" custom v-slot="{ navigate }">
      <span @click="navigate" @keypress.enter="navigate" role="link">
        About
      </span>
      cli3以上版本使用其他标签代替a标签用法，用a 以外的标签代替渲染貌似没有active 样式效果
    </router-link> -->
  <!-- </div> -->

  <!-- vue3 进行页面记录保存（keepalive）的用法，在include中加要保存组件（页面）的名称 -->
  <router-view v-slot="{ Component }">
    <keep-alive include="Home">
      <component :is="Component" />
    </keep-alive>
  </router-view>

  <!-- <router-view></router-view> -->
  <main-tab-bar></main-tab-bar>
</template>

<script>
import mainTabBar from "./components/content/maintabbar/maintabbar.vue";
import Home from "./views/home/home.vue";

export default {
  name: "App",
  components: {
    mainTabBar,
    Home,
  },
};
</script>

<style>
@import "assets/css/normalize.css";
@import "assets/css/base.css";
@import "common/bootstrap/css/bootstrap.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
