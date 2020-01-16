<template>
  <div id="app">
    <CommonHeader />
    <div class="app-main">
      <router-view />
    </div>
  </div>
</template>

<script>
import CommonHeader from "@/components/Layouts/CommonHeader.vue";
export default {
  name: "App",
  components: {
    CommonHeader
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.app-main {
  height: calc(100vh - #{$s-navbar-height});
  width: 100%;
  position: relative;
  overflow-y: scroll;
  background: $c-background;
  // top: $s-navbar-height;
  // padding: 16px 32px 32px 32px;
  &::-webkit-scrollbar-track-piece {
    // background-color: rgba(0, 0, 0, 0);
    // border-left: 1px solid rgba(0, 0, 0, 0);
  }

  &::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.3rem;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #909399;
    background-clip: padding-box;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    min-height: 1.9rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
}
</style>
