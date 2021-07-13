<template>
  <div class="cartlist">
    <div v-if="$store.state.cartList.length !== 0">
      <div
        class="cartlistitem"
        v-for="(item, index) in $store.state.cartList"
        :key="'cartlistitem' + index"
      >
        <div class="listitemcheck">
          <check-button
            :class="{ checkedbutton: $store.state.cartList[index].checked }"
            @click="checkbuttonchanged(index)"
            v-if="carteditmode === false"
          ></check-button>
          <div class="cartdelbutton" v-else>
            <div class="delbutton" @click="delcartgoods(index)">
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </i>
            </div>
          </div>
        </div>
        <div class="listitembody">
          <div class="listitemimg">
            <img :src="'http:' + item.image" alt="" />
          </div>
          <div class="listiteminfo">
            <div class="listitemtitle">{{ item.title }}</div>
            <div class="listitemdesc">{{ item.desc }}</div>
            <div class="listitemother">
              <div class="listitemprice">￥{{ item.price }}</div>
              <div class="listitemcount">
                <span>X</span>{{ item.goodscount }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="cartnull">你的购物车里空空如也！！</div>
    </div>
  </div>
</template>
<script>
import checkButton from "@/components/content/checkButton/checkButton.vue";

export default {
  name: "cartList",
  components: {
    checkButton,
  },
  props: {
    carteditmode: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    checkbuttonchanged(index) {
      this.$store.state.cartList[index].checked =
        !this.$store.state.cartList[index].checked;
      this.$emit("checkbuttonchanged");
    },
    delcartgoods(index) {
      this.$emit("delcartgoods", index);
      // this.$store.dispatch("delCartGood", index);
    },
  },
};
</script>
<style scoped>
.cartlist {
  width: 100%;
  padding-top: 10px;
}
.cartlistitem {
  width: 100%;
  display: flex;
  height: 120px;
  overflow: hidden;
  border: 1px solid #f8f;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
}
.listitemcheck {
  width: 10%;
  /* line-height: 100px; */
  display: flex;
  padding-top: 40px;
}

.listitembody {
  width: 90%;
  display: flex;
}
.listitemimg {
  width: 30%;
  border-radius: 5px;
  overflow: hidden;
}
.listiteminfo {
  width: 70%;
}
.listitemtitle {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  text-indent: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.listitemdesc {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  text-align: left;
  text-indent: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.listitemother {
  height: 40px;
  line-height: 40px;
  display: flex;
}
.listitemprice {
  flex: 1;
  font-size: 22px;
  color: red;
  text-align: left;
  text-indent: 10px;
}
.listitemcount {
  flex: 1;
  font-size: 20px;
  color: #333;
  text-align: right;
  padding-right: 10px;
}
.listitemcount span {
  font-size: 14px;
}
/* .checkbutton {
  height: 20px;
  width: 20px;
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid #aaa;
}
.checkedbutton {
  border: #f33;
  background-color: #f33;
} */
.cartnull {
  font-size: 18px;
}
</style>