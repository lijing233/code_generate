<template>
  <el-drawer
    :visible.sync="visible"
    :with-header="false"
    :modal="true"
    :size="'20%'"
    class="drawer-box"
  >
    <div class="header">components</div>
    <div class="item-container">
      <div
        class="item"
        v-for="(item, key) in lib"
        :key="key"
        @click="onChoose(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </el-drawer>
</template>

<script>
import lib from "@/lib";
export default {
  model: {
    prop: "showFlag",
    event: "showChange"
  },
  props: {
    showFlag: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    showFlag(val) {
      this.visible = val;
    },
    visible(val) {
      this.$emit("showChange", val);
    }
  },
  data() {
    return {
      visible: false,
      lib
      // showFlag: true
    };
  },
  methods: {
    onChoose(item) {
      this.$emit("onChoose", item);
      this.close();
    },
    close() {
      this.visible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.drawer-box {
  $headheight: 70px;
  .header {
    height: $headheight;
    line-height: $headheight;
    padding-left: 20px;
    font-size: 25px;
    border-bottom: 2px solid $c-divider;
    background: #fff;
    box-shadow: $box-shadow;
  }

  .item-container {
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .item {
      width: 45%;
      height: 100px;
      line-height: 100px;
      text-align: center;
      background: #fff;
      border: 1px dashed $color-c3;
      margin: 10px 9px;
      cursor: pointer;
      transition: all 0.3s;
      border-radius: 5px;
      font-size: 20px;
      &:hover {
        background: #eef3ff;
        // box-shadow: $box-shadow;
        transform: translate3d(1px, -2px, 5px);
      }
    }
    // background: pink;
  }
}
</style>
<style lang="scss">
.drawer-box .el-drawer {
  outline: none;
}
.drawer-box .el-drawer__body {
  background: $c-background;
}
</style>
