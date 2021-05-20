<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2>vuex-counter:{{ $store.state.counter }}</h2>
    <button @click="decrementcou">counter-1</button>
    <button @click="imcrementcou">counter+1</button>
    <div class="clonemall">
      <h2>这是在clone-myfirstmall 下进行的修改,然后在my-firstmall下再次修改</h2>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    decrementcou() {
      this.$store.commit("decrementcou");
    },
    imcrementcou() {
      this.$store.commit("imcrementcou");
    },
  },
};
</script>

<style scoped>
.clonemall {
  background-color: skyblue;
}
.clonemall h2 {
  color: red;
}
</style>
