<template>
  <div id="nav">
    <router-link to="/" tag="span">Home</router-link> |
    <router-link to="/about" tag="span">About</router-link>
    <!-- <router-link to="/about" custom v-slot="{ navigate }">
      <span @click="navigate" @keypress.enter="navigate" role="link">
        About
      </span>
      cli3以上版本使用其他标签代替a标签用法，用a 以外的标签代替渲染貌似没有active 样式效果
    </router-link> -->
  </div>
  <router-view />
</template>

<style>
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
