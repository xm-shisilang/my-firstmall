<template>
  <div class="toast" v-show="isShow">
    <div>{{ message }}</div>
  </div>
</template>
<script>
export default {
  name: "Toast",
  data() {
    return {
      message: {
        type: String,
        default: "",
      },
      duretion: {
        type: Number,
        default: 2000,
      },
      isShow: false,
    };
  },
  methods: {
    show(message, duretion) {
      this.message = message;
      this.isShow = true;

      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duretion);
    },
  },
};
</script>
<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  border-radius: 5px;

  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  z-index: 4;
}
</style>