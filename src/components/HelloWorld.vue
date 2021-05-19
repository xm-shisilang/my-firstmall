<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>这里是HelloWorld组件</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: yellowgreen;
}
h1 {
  color: #c81623;
  /* text-shadow: 3px rgba(0, 0, 0, 0.4); */
}
h2 {
  color: #f0f0f0;
  text-decoration: underline;
  margin: 10px auto;
}
</style>
