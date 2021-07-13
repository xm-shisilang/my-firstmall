<template>
  <div class="cartbottombar">
    <div class="cartselect">
      全选<check-button
        :class="{ checkedbutton: selectall }"
        @click="selectallchange"
      />
    </div>
    <div class="pricecount">
      共计:￥<span>{{ pricecount }}</span>
    </div>
    <div class="buyselectedgoods" @click="buythisnow">
      去结算({{ selectcount }})
    </div>
  </div>
</template>
<script>
import CheckButton from "@/components/content/checkButton/checkButton.vue";
export default {
  name: "cartBottomBar",
  components: {
    CheckButton,
  },
  data() {
    return {
      selectall: true,
    };
  },
  computed: {
    pricecount() {
      let countprice = 0;
      for (let i = 0; i < this.$store.state.cartList.length; i++) {
        if (this.$store.state.cartList[i].checked) {
          countprice =
            countprice +
            this.$store.state.cartList[i].price *
              this.$store.state.cartList[i].goodscount;
        }
      }
      return countprice.toFixed(2);
    },
    selectcount() {
      let selectcount = 0;
      for (let i = 0; i < this.$store.state.cartList.length; i++) {
        if (this.$store.state.cartList[i].checked) {
          selectcount += 1;
        }
      }
      return selectcount;
    },
  },
  methods: {
    selectallchange() {
      if (this.selectall) {
        this.$emit("toselectnull");
      } else {
        this.$emit("toselectall");
      }
      this.selectall = !this.selectall;
    },
    buythisnow() {
      this.$emit("buythisnow");
    },
  },
};
</script>
<style scoped>
.cartbottombar {
  height: 40px;
  line-height: 40px;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 49px;
  background-color: #eee;
  border-top: 1px solid #ccc;
}
.cartselect {
  width: 80px;
  display: flex;
  font-size: 18px;
  border-right: 1x solid #ccc;
}
.cartselect .checkbutton {
  margin-top: 10px;
  /* margin-right: 20px; */
  line-height: 20px;
}
.pricecount {
  flex: 1;
  font-size: 18px;
  text-align: left;
}
.pricecount span {
  color: #f33;
  font-size: 24px;
}
.buyselectedgoods {
  width: 100px;
  background-color: #f33;
  color: #fff;
  font-size: 18px;
}
</style>