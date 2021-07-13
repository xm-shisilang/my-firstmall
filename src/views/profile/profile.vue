<template>
  <div id="profile">
    <div class="profilepage">
      <h3>个人中心</h3>
    </div>
    <div class="user">
      <div class="headimg">
        <img src="@/assets/img/profile/avatar.svg" alt="" />
      </div>
      <div class="logoinfo">
        <div class="logoin">登录/注册</div>
        <div class="phone">
          <span class="phoneicon"
            ><img src="@/assets/img/profile/phone.svg" alt=""
          /></span>
          <span class="phonenumber">暂无绑定手机号码</span>
        </div>
      </div>
      <div class="more">
        <div class="rightmore">
          <span class="glyphicon glyphicon-menu-right"></span>
        </div>
      </div>
    </div>
    <div class="uinfo bb20e">
      <div>
        <div class="top"><span>0.00</span><span>元</span></div>
        <div class="bottom">我的余额</div>
      </div>
      <div>
        <div class="top"><span>0</span><span>个</span></div>
        <div class="bottom">我的优惠</div>
      </div>
      <div>
        <div class="top"><span>0</span><span>分</span></div>
        <div class="bottom">我的积分</div>
      </div>
    </div>
    <div class="other">
      <div class="bb2e">
        <span> <img src="@/assets/img/profile/message.svg" alt="" /></span
        ><span>我的消息</span>
      </div>
      <div class="bb2e">
        <span><img src="@/assets/img/profile/pointer.svg" alt="" /></span
        ><span>积分商城</span>
      </div>
      <div class="bb20e h80">
        <span><img src="@/assets/img/profile/vip.svg" alt="" /></span
        ><span>会员卡</span>
      </div>
      <div class="bb2e">
        <span><img src="@/assets/img/profile/cart.svg" alt="" /></span
        ><span>我的购物车</span>
      </div>
      <div>
        <span><img src="@/assets/img/profile/shopping.svg" alt="" /></span
        ><span>下载购物APP</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
};
</script>
<style scoped>
.profilepage {
  height: 50px;
  text-align: center;
  background-color: #ff8e96;
  line-height: 50px;
  margin: 0;
  color: #fff;
}
.profilepage h3 {
  height: 50px;
  line-height: 50px;
  margin: 0;
}
.bb20e {
  border-bottom: 20px solid #eee;
}
.h80 {
  height: 80px !important;
}
.bb2e {
  border-bottom: 2px solid #eee;
}
.user {
  display: flex;
  height: 80px;
  width: 100%;
  background-color: #ff8e96;
  color: #fff;
}
.headimg {
  height: 80px;
  width: 80px;
}
.headimg img {
  height: 60px;
  width: 60px;
  margin: 10px;
}
.logoinfo {
  flex: 1;
  text-align: left;
}
.logoin {
  height: 40px;
  font-size: 18px;
  line-height: 60px;
  text-indent: 5px;
}
.phone {
  height: 40px;
  padding-top: 5px;
}
.more {
  width: 60px;
  height: 80px;
  line-height: 80px;
  font-size: 20px;
}
.uinfo {
  display: flex;
  height: 120px;
  width: 100%;
  background-color: #fff;
}
.uinfo > div {
  flex: 1;
  border-right: 1px solid #eee;
}
.uinfo > div:nth-child(3) {
  border: 0;
}
.top {
  height: 60px;
  line-height: 80px;
}

.top span:nth-child(1) {
  font-size: 22px;
  font-weight: 700;
  color: rgb(224, 82, 0);
}
.other > div {
  height: 60px;
  text-align: left;
  font-size: 18px;
  line-height: 60px;
}
.other > div span {
  display: inline-block;
  height: 60px;
}
.other > div span:first-child {
  padding: 0 20px;
}
.other > div span img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
.phoneicon img {
  height: 20px;
  width: 20px;
}
</style>