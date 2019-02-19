<template>
  <div class="img-dialog-wrapper" @click="hideImgDialog()">
    <img :src="imgDialogUrl" @click.stop>
    <button @click.stop="downloadBigImg()">下载图片</button>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["imgDialogUrl"])
  },
  methods: {
    hideImgDialog: function() {
      this.$store.commit("updateImgDialogUrl", { isShow: false, imgUrl: "" });
    },
    downloadBigImg: function() {
      let link = document.createElement("a");
      link.href = this.imgDialogUrl;
      link.download = "福利";
      link.target = "_blank";
      link.click();
    }
  }
};
</script>
<style scoped>
.img-dialog-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 999;
  text-align: center;
}
.img-dialog-wrapper img {
  width: auto;
  height: 100%;
}
.img-dialog-wrapper button {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
</style>
