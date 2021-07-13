<template>
  <div class="detailcommentinfo" v-if="Object.keys(commentInfo).length !== 0">
    <div class="commentheadbar">
      <div class="hdbarleft">用户评价</div>
      <div class="hdbarright"><span>更多&gt;&gt;</span></div>
    </div>
    <div class="commenthead">
      <div class="userheadimage">
        <img :src="'http:' + commentInfo.list[0].user.avatar" alt="" />
      </div>
      <div class="useruname">
        <span>{{ commentInfo.list[0].user.uname }}</span>
      </div>
    </div>
    <div class="commenttext">
      <p>{{ commentInfo.list[0].content }}</p>
      <span class="date">{{ showDate }} </span>
      <span> {{ commentInfo.list[0].style }}</span>
    </div>
    <div class="commentimages" v-if="commentInfo.list[0].images">
      <div
        class="commentimg"
        v-for="(item, index) in commentInfo.list[0].images"
        :key="'commentimg' + index"
      >
        <img :src="'http:' + item" alt="" />
      </div>
    </div>
  </div>
  <div class="detailcommentinfo" v-else>
    <div class="commentheadbar">
      <div class="hdbarleft">用户评价</div>
      <div class="hdbarright"><span>更多&gt;&gt;</span></div>
    </div>
    <div class="commenthead2">没有评论</div>
  </div>
</template>
<script>
export default {
  name: "detailCommentInfo",
  props: {
    commentInfo: {},
  },
  computed: {
    showDate() {
      const value = this.commentInfo.list[0].created * 1000;
      const date = new Date(value);
      const timetext =
        date.getFullYear() +
        "-" +
        this.padleftzero(date.getMonth() + 1 + "") +
        "-" +
        this.padleftzero(date.getDay() + "");
      return timetext;
    },
  },
  methods: {
    padleftzero(str) {
      return ("00" + str).substr(str.length);
    },
  },
};
</script>
<style scoped>
.detailcommentinfo {
  width: 100%;
}
.commentheadbar {
  display: flex;
  height: 50px;
}
.commentheadbar .hdbarleft {
  flex: 1;
  text-align: left;
  padding-left: 10px;
  line-height: 50px;
  font-size: 18px;
  font-weight: 600;
}
.commentheadbar .hdbarright {
  flex: 1;
  text-align: right;
  padding-right: 10px;
  line-height: 50px;
}
.commenthead {
  display: flex;
  height: 60px;
  width: 100%;
}
.userheadimage {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  overflow: hidden;
  margin-left: 20px;
  margin-top: 10px;
  border: 1px solid #ccc;
}
.userheadimage image {
  width: 100%;
  height: 100%;
}
.useruname span {
  display: inline-block;
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  margin-left: 10px;
  font-weight: 600;
}
.commenttext {
  text-align: left;
  padding: 5px 20px;
}
.commenttext span {
  color: #999;
}
.date {
  margin-right: 10px;
}
.commentimages {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
}
.commentimages .commentimg {
  width: 33.33%;
  height: 17vh;
  overflow: hidden;
  margin: 10px 0;
  padding: 0 10px;
}
.commentimages .commentimg image {
  width: 90%;
}
.commenthead2 {
  text-align: center;
  line-height: 30px;
}
</style>