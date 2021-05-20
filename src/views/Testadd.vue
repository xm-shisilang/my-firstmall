<template>
  <div class="testadd">
    <h2>vuex-counter:{{ $store.state.counter }}</h2>
    <h2>movies</h2>
    <ul>
      <li>{{ movies[0] }}</li>
      <li>{{ movies[1] }}</li>
      <li>{{ movies[2] }}</li>
      <li>{{ movies[3] }}</li>
      <li>{{ movies[4] }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Testadd",
  data() {
    return {
      movies: ["海王", "海贼王", "美人鱼", "加勒比海盗", "进击的巨人"],
    };
  },
};
</script>
<style scoped>
.testadd {
  background-color: pink;
  text-align: center;
}

.testadd li {
  list-style: none;
  font-size: 20px;
  font-weight: 600;
  color: blueviolet;
  line-height: 30px;
  text-indent: -2em;
}
</style>