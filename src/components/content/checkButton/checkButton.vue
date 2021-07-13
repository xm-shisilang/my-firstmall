<template>
  <div class="checkbutton">
    <img src="@/assets/img/cart/tick.svg" alt="" />
  </div>
</template>
<script>
export default {
  name: "checkButton",
};
</script>
<style scoped>
.checkbutton {
  height: 20px;
  width: 20px;
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid #aaa;
}
.checkedbutton {
  border: #f33;
  background-color: #f33;
}
</style>