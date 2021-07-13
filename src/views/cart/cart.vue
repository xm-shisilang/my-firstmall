<template>
  <div id="cart">
    <nav-bar>
      <template v-slot:center>
        <div class="cartnavbar" v-if="editmode === false">
          <h3>购物车({{ cartlength }})</h3>
        </div>
        <div class="cartnavbar" v-else @click="qingkong">
          <h3>清空购物车</h3>
        </div>
      </template>
      <template v-slot:right>
        <div class="editbutton" @click="editmodechangge">
          <div v-if="editmode === false">编辑</div>
          <div v-else>完成</div>
        </div>
      </template>
    </nav-bar>
    <scroll class="cartscrollcontent" ref="cartscroll">
      <cart-list
        :carteditmode="editmode"
        @checkbuttonchanged="checkbuttonchanged"
        @delcartgoods="delcartgoods"
      ></cart-list>

      <div style="height: 40px"></div>
      <!-- <div
        style="
          height: 300px;
          background-color: #f5ac88;
          text-align: center;
          font-size: 50px;
          padding-top: 50px;
        "
      >
        test 测试时用占据高度
      </div> -->
    </scroll>

    <cart-bottom-bar
      ref="cartbottombar"
      @toselectnull="toselectnull"
      @toselectall="toselectall"
      @buythisnow="buythisnow"
    ></cart-bottom-bar>
    <toast ref="toastref"></toast>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import Scroll from "@/components/common/scroll/scroll.vue";

import cartList from "./childcomps/cartList.vue";
import cartBottomBar from "./childcomps/cartBottomBar.vue";

import Toast from "@/components/common/toast/Toast.vue";
export default {
  name: "Cart",
  components: {
    NavBar,
    Scroll,
    cartList,
    cartBottomBar,
    Toast,
  },
  data() {
    return {
      editmode: false,
    };
  },
  computed: {
    cartlength() {
      return this.$store.state.cartList.length;
    },
  },
  methods: {
    editmodechangge() {
      this.editmode = !this.editmode;
    },
    delcartgoods(index) {
      this.$store.dispatch("delCartGood", index);
      this.cartlistnull();
    },
    qingkong() {
      this.$store.dispatch("delAllGoods");
      this.cartlistnull();
    },
    toselectnull() {
      this.$store.dispatch("toselectnull");
    },
    toselectall() {
      this.$store.dispatch("toselectall");
    },
    checkbuttonchanged() {
      let scount = 0;
      for (let i = 0; i < this.$store.state.cartList.length; i++) {
        if (this.$store.state.cartList[i].checked) {
          scount = scount + 1;
        }
      }
      if (scount < this.$store.state.cartList.length) {
        this.$refs.cartbottombar.selectall = false;
      } else {
        this.$refs.cartbottombar.selectall = true;
      }
    },
    cartlistnull() {
      if (this.$store.state.cartList.length == 0) {
        this.$refs.cartbottombar.selectall = false;
      } else {
        let c = 0;
        for (let i = 0; i < this.$store.state.cartList.length; i++) {
          if (this.$store.state.cartList[i].checked) {
            c = c + 1;
            // console.log(c);
          }
        }
        if (c < this.$store.state.cartList.length) {
          this.$refs.cartbottombar.selectall = false;
        }
      }
    },
    buythisnow() {
      let c = 0;
      for (let i = 0; i < this.$store.state.cartList.length; i++) {
        if (this.$store.state.cartList[i].checked) {
          c = c + 1;
        }
      }
      if (c > 0) {
        this.$refs.toastref.show("正在为您转跳至结算页面~~~请耐心等待", 1000);
        setTimeout(() => {
          this.$refs.toastref.show("请求失败，接口错误！！！", 1000);
        }, 1000);
      } else {
        this.$refs.toastref.show("请选择要购买的商品！", 1500);
      }
    },
  },
  activated() {},
  mounted() {
    // console.log("cart mounted");
    // this.cartlistnull();
    this.cartlistnull();
    this.$refs.cartscroll.refresh();
  },
};
</script>
<style scoped>
.navbar {
  height: 50px;
  z-index: 3;
}
.cartnavbar {
  height: 50px;
  text-align: center;
  line-height: 50px;
  margin: 0;
  color: #fff;
}
.cartnavbar h3 {
  height: 50px;
  line-height: 50px;
  margin: 0;
}
.cartscrollcontent {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
.editbutton {
  font-size: 18px;
  line-height: 50px;
}
</style>