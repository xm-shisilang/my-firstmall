<template>
  <div class="detailbottombar">
    <div class="itembar">
      <div class="detailkefu">
        <i
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-chat"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
            /></svg
        ></i>
        <span>客服</span>
      </div>
      <div class="detailshop">
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-shop"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"
            /></svg
        ></i>
        <span>店铺</span>
      </div>
      <div class="detailshoucang">
        <i
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-star"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
            /></svg
        ></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="detailshopcar" @click="addtocart">加入购物车</div>
    <div class="detailbuy" @click="buynow">立即购买</div>
  </div>
</template>
<script>
export default {
  name: "detailBottomBar",
  methods: {
    addtocart() {
      this.$emit("addtocart");
    },
    buynow() {
      console.log("buynow");
    },
  },
};
</script>
<style scoped>
.detailbottombar {
  display: flex;
  position: relative;
  top: calc(100% - 50px);
  /* bottom: 0; */
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  /* z-index: 5; */
  border-top: 1px solid #ccc;
}
.detailshopcar {
  position: absolute;
  top: 0;
  right: 25%;
  width: 25%;
  height: 50px;
  background-color: #dac400;
  color: #fff;
  text-align: center;
  line-height: 50px;
}
.detailbuy {
  position: absolute;
  top: 0;
  right: 0;
  width: 25%;
  height: 50px;
  background-color: #f87add;
  color: #fff;
  text-align: center;
  line-height: 50px;
}
.itembar {
  width: 50%;
  display: flex;
}
.itembar > div {
  flex: 1;
}
.itembar > div i {
  display: block;
  height: 30px;
  padding-top: 5px;
}
.itembar > div span {
  display: inline-block;
  height: 20px;
  line-height: 20px;
}
</style>