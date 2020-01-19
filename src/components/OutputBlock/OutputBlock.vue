<template>
  <div class="output">
    <!-- 转换按钮 -->
    <div class="operate-area">
      <el-button type="primary" icon="el-icon-refresh" @click="transform"
        >transform</el-button
      >
      <el-button plain icon="el-icon-delete" @click="textarea1 = ''"
        >clear</el-button
      >
    </div>
    <!-- 输出区域 -->
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
  props: {
    itemContent: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      textarea1: ""
    };
  },
  methods: {
    transform() {
      if (this.itemContent.length === 0) {
        this.$message.warning("请选择需要生成代码的组件！");
        return;
      }
      const resCode = this.itemContent.reduce((pre, item) => {
        if (item.getCode && typeof item.getCode === "function") {
          return pre + "\n" + item.getCode(item.config);
        } else {
          this.$message.error(`组件 ${item.name} 缺少代码生成配置！`);
          return pre;
        }
      }, "");
      this.textarea1 = resCode;
    }
  }
};
</script>

<style lang="scss" scoped>
// operate-area
.operate-area {
  display: flex;
  justify-content: flex-end;
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
