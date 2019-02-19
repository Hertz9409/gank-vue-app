<template>
  <header class="app-header" @dblclick="scrollToTop()">
    <span class="modular-title">{{ curModularTitle }}</span>
  </header>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["curModularTitle"])
  },
  methods: {
    scrollToTop() {
      this.$store.commit("updateScrollToTop", 0);
    }
  }
};
</script>
<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  background-color: #03a9f4;
  color: #ffffff;
  text-align: center;
  box-shadow: 0px 2px 5px 5px rgba(0, 0, 0, 0.1);
}
.app-header .modular-title {
  font-weight: 500;
}
</style>
