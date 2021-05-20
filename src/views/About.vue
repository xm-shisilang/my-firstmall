<template>
  <div class="about">
    <h2>vuex-counter:{{ $store.state.counter }}</h2>
    <h1>This is an about page</h1>
    <h2>test git push , step = 1</h2>
    <h2>
      原main 的冲突内容（main 内第5行），git checkout main 切换到原分支main
      ，原分支 main 中内容
    </h2>
    <h2>这是 main 分支 的内容，测试 分支技术</h2>
    <h2>test branch , main / dev</h2>
    <h2>
      原Dev 的冲突内容（dev 内第5行），现在已经不能 修改 原分支 main 中内容
    </h2>
    <h2>这是 main 分支 的内容</h2>
    <h2>test push to div</h2>
  </div>
</template>
<script>
export default {
  name: "About",
};
</script>
<style scope>
.about {
  background-color: yellowgreen;
}
.about h2 {
  color: brown;
}
</style>
