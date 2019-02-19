<template>
  <div class="app-footer">
    <router-link
      v-for="modular in modulars"
      :to="modular.name"
      tag="div"
      class="modular-btn"
      :key="modular.name"
      :title="modular.title"
    >
      <i class="modulat-icon" :class="'icon-' + modular.name"></i>
      <span>{{ modular.title }}</span>
    </router-link>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["modulars"])
  },
  methods: {}
};
</script>
<style scoped>
.app-footer {
  position: fixed;
  width: 100%;
  height: 60px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  line-height: 60px;
  font-size: 16px;
  background-color: #f7f7fa;
  box-shadow: 0 -2px 5px 5px rgba(0, 0, 0, 0.1);
  display: flex;
}
.app-footer .modular-btn {
  position: relative;
  display: inline-block;
  flex: 1;
  padding-top: 5px;
  cursor: pointer;
  text-align: center;
  color: #999;
}
.app-footer .modular-btn.router-link-active {
  color: #f70968;
}
</style>
