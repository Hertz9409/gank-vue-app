<template>
  <div
    class="android-wrapper"
    ref="androidDom"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="10"
    @scroll="scrollChange()"
  >
    <ul>
      <li v-for="item in allData" :key="item._id">
        <a target="_blank" :href="item.url">{{ item.desc }}</a>
        <span>[{{item.type}}]</span>
        <ul v-show="item.images && item.images.length > 0">
          <li v-for="src in item.images" :key="src">
            <img :src="src" :title="item.desc" @click="showBigImg(src)">
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
import baseFunc from "../utils/baseFunc";
import baseApi from "../api/index";
export default {
  data() {
    return {
      allData: [],
      busy: false,
      page: 1
    };
  },
  computed: {
    ...mapState(["scrollToTopLength"])
  },
  watch: {
    scrollToTopLength: function(newBool, oldBool) {
      if (newBool === 0) {
        this.$refs.androidDom.scrollTop = 0;
      }
    }
  },
  methods: {
    loadMore() {
      this.busy = true;
      this.loadNewAndroid();
      this.page++;
    },
    loadNewAndroid() {
      baseApi.getDataByType("all", 10, this.page).then(response => {
        let filterData = response.filter(data => {
          return data.type !== "福利";
        });
        this.allData = this.allData.concat(response);
        this.busy = false;
      });
    },
    // scroll事件防抖优化
    scrollChange: baseFunc.debounce(function() {
      this.$store.commit("updateScrollToTop", this.$refs.androidDom.scrollTop);
      console.log("防抖测试" + this.$refs.androidDom.scrollTop);
    }, 1000),

    showBigImg: function(url) {
      this.$store.commit("updateImgDialogUrl", { isShow: true, imgUrl: url });
    }
  }
};
</script>
<style scoped>
.android-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
  display: block;
}
.android-wrapper > ul {
  width: auto;
  list-style: disc;
  text-align: left;
}
.android-wrapper > ul > li {
  margin-bottom: 20px;
  border-bottom: 1px solid #efefef;
}
.android-wrapper > ul > li > a {
  font-size: 16px;
}
.android-wrapper > ul > li > span {
  font-size: 16px;
  font-weight: 700;
}
.android-wrapper > ul > li > ul {
  padding: 0;
  margin: 0;
  list-style: circle;
}
.android-wrapper > ul > li > ul::after {
  content: "";
  clear: both;
  display: block;
}
.android-wrapper > ul > li > ul > li {
  position: relative;
  list-style: none;
  text-align: center;
  width: 120px;
  float: left;
  padding: 5px;
}
.android-wrapper > ul > li > ul > li > img {
  width: 100%;
  height: auto;
  border: 4px solid #ffffff;
  margin: 0 auto;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
}
</style>
