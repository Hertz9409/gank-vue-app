<template>
  <div
    ref="welfareDom"
    class="welfare-wrapper"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="10"
    @scroll="scrollChange()"
  >
    <div class="welfare-column">
      <figure v-show="leftData.length > 0" v-for="data in leftData" :key="data.url">
        <img v-lazy="data.url" @click="showBigImg(data.url)">
      </figure>
    </div>
    <div class="welfare-column">
      <figure v-show="rightData.length > 0" v-for="data in rightData" :key="data.url">
        <img v-lazy="data.url" @click="showBigImg(data.url)">
      </figure>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import baseFunc from "../utils/baseFunc";
import baseApi from "../api/index";
export default {
  data() {
    return {
      busy: false,
      leftData: [],
      rightData: [],
      page: 1
    };
  },
  components: {},
  computed: {
    ...mapState(["scrollToTopLength"])
  },
  watch: {
    scrollToTopLength: function(newBool, oldBool) {
      if (newBool === 0) {
        this.$refs.welfareDom.scrollTop = 0;
      }
    }
  },
  methods: {
    loadMore() {
      this.busy = true;
      this.loadNewPic();
      this.page++;
    },
    loadNewPic() {
      baseApi.getDataByType("福利", 10, this.page).then(response => {
        let left = response.filter((data, i) => {
          return (i + 1) % 2 === 1;
        });
        let right = response.filter((data, i) => {
          return (i + 1) % 2 !== 1;
        });
        this.leftData = this.leftData.concat(left);
        this.rightData = this.rightData.concat(right);
        this.busy = false;
      });
    },
    // scroll事件防抖优化
    scrollChange: baseFunc.debounce(function() {
      this.$store.commit("updateScrollToTop", this.$refs.welfareDom.scrollTop);
      console.log("防抖测试" + this.$refs.welfareDom.scrollTop);
    }, 1000),

    showBigImg: function(url) {
      this.$store.commit("updateImgDialogUrl", { isShow: true, imgUrl: url });
    }
  }
};
</script>
<style scoped>
.welfare-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
  display: flex;
}
.welfare-wrapper .welfare-column {
  width: 50%;
  height: 100%;
  position: relative;
  flex: 1;
}
.welfare-wrapper .welfare-column figure {
  background-color: #fcfcfc;
  border: 2px solid #fcfcfc;
  box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
  margin: 0 2px 15px;
  display: inline-block;
  z-index: 11;
}
.welfare-wrapper .welfare-column img {
  width: 100%;
  height: auto;
}
</style>