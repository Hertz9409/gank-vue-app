<template>
  <div id="app">
    <app-header></app-header>
    <div class="app-body">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <app-footer></app-footer>
    <vue-progress-bar></vue-progress-bar>
    <transition name="dialog-animation">
      <img-dialog v-show="isShowImgDialog"></img-dialog>
    </transition>
  </div>
</template>
<script>
import appHeader from "./components/header";
import appFooter from "./components/footer";
import imgDialog from "./components/imgDialog";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["isShowImgDialog"])
  },
  components: {
    appHeader,
    appFooter,
    imgDialog
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app-body {
  position: fixed;
  width: 100%;
  height: calc(100% - 110px);
  left: 0;
  right: 0;
  top: 50px;
  bottom: 60px;
}
/* 图片查看组件显示隐藏动画 */
.dialog-animation-enter-active,
.dialog-animation-leave-active {
  transition: all 0.5s ease;
}
.dialog-animation-enter,
.dialog-animation-leave-to {
  transform: scale(0);
  opacity: 0;
}
</style>
