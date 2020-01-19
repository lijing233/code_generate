<template>
  <div class="container">
    <div class="title">Generate Page</div>
    <!-- 编辑区 -->
    <div class="edit-area">
      <div class="config-block">Template</div>
      <div class="config-block">Script</div>
    </div>
    <OutputBlock :itemContent="itemContent" />
  </div>
</template>

<script>
import OutputBlock from "@/components/OutputBlock/OutputBlock.vue";
export default {
  name: "page",
  components: { OutputBlock },
  data() {
    return {
      itemContent: []
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 30px;
  .title {
    font-size: 30px;
  }

  // edit-area
  .edit-area {
    background: #fff;
    border: 1px solid $color-c5;
    min-height: 200px;
    margin: 30px 0;
    border-radius: 6px;
    position: relative;
    // padding-bottom: 100px;
    padding: 40px;

    .config-block {
      font-size: 50px;
      height: 200px;
      line-height: 200px;
      border-radius: 5px;
      text-align: center;
      cursor: pointer;
      color: $color-c3;
      border: 1px dashed $color-c4;
      margin-bottom: 30px;
      // background: pink;
      transition: all 0.3s;
      &:hover {
        background: $color-c6;
      }
    }
  }
}
</style>
