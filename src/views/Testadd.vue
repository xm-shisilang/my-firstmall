<template>
  <div class="testadd">
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
li {
  list-style: none;
}
</style>