<template>
  <div class="container">
    <div class="title">Generate Single component</div>
    <div class="edit-area"></div>
    <div class="output-area">
      <el-input
        type="textarea"
        :autosize="{ minRows: 20 }"
        placeholder="click transform button to get code"
        v-model="textarea1"
        class="inp-textarea"
      >
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "single",
  components: {},
  data() {
    return {
      textarea1: ""
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
}

// edit-area
.edit-area {
  background: #fff;
  border: 1px solid $color-c5;
  min-height: 200px;
  margin: 30px 0;
  border-radius: 6px;
}

// output-area
.output-area {
  background: #fff;
  border: 1px solid $color-c5;
  min-height: 200px;
  margin: 30px 0;
  border-radius: 6px;
  padding: 20px;
  .inp-textarea {
    width: 100%;
    font-size: 16px;
    line-height: 20px;
    // min-height: 200px;
    textarea {
      padding: 20px 0;
    }
  }
}
</style>
