<template>
  <div class="about-wrapper">
    <div class="about-background"></div>
    <div class="about-content">
      <span class="avatar">
        <img src="../assets/avatar.jpg">
      </span>
      <span>黄震</span>
      <span>QQ: 1364936400</span>
      <a target="_blank" href="https://github.com/Hertz9409">github</a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.about-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.about-wrapper .about-background {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: url("../assets/backgroundimg.jpg") no-repeat;
  background-size: auto 100%;
  background-position: center top;
  filter: blur(15px);
}
.about-wrapper .about-content {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  text-align: center;
  padding-top: 50px;
}
.about-content span,
.about-content a {
  display: block;
  margin-bottom: 10px;
  color: #efefef;
}
.about-content .avatar {
  width: 60px;
  height: 60px;
  left: 50%;
  position: relative;
  transform: translateX(-30px);
}
.about-content .avatar img:hover {
  transform: rotate(666turn);
  transition-delay: 1s;
  transition-property: all;
  transition-duration: 59s;
  transition-timing-function: cubic-bezier(0.34, 0, 0.84, 1);
}
.about-content .avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>
