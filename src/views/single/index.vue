<template>
  <div class="container">
    <div class="title">Generate Single component</div>
    <!-- 编辑区 -->
    <div class="edit-area">
      <div class="main">
        <div
          class="item"
          v-for="(item, index) in itemContent"
          :key="item.name + index"
          @click="onItemEdit(index)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="add-btn" @click="showDrawer = true">+</div>
    </div>
    <!-- 设置弹窗 -->
    <el-dialog
      title="Setting"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleDialogClose"
      :modal="true"
      :destroy-on-close="true"
      class="setting-dialog"
    >
      <div class="edit-box">
        <div v-for="(val, key) in editItem" :key="key" class="edit-col">
          <div class="edit-title">{{ key }} :</div>
          <el-input
            class="edit-inp"
            v-model="editItem[key]"
            placeholder="请输入内容"
          ></el-input>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sureChangeConfig">确 定</el-button>
      </span>
    </el-dialog>
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
    <!-- Drawer -->
    <Drawer v-model="showDrawer" @onChoose="onChoose" />
  </div>
</template>

<script>
import Drawer from "@/components/Drawer/Drawer.vue";
export default {
  name: "single",
  components: { Drawer },
  data() {
    return {
      dialogVisible: false,
      textarea1: "",
      showDrawer: false,
      itemContent: [],
      // 编辑使用
      actIndex: -1,
      editItem: {}
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
    },
    onChoose(item) {
      this.itemContent.push({ ...item });
      console.log("ssssssssss", item);
    },
    onItemEdit(index) {
      this.actIndex = index;
      console.log(this.itemContent[index].config);
      this.editItem = { ...this.itemContent[index].config };
      this.dialogVisible = true;
    },
    // 保存修改配置
    sureChangeConfig() {
      this.itemContent[this.actIndex].config = { ...this.editItem };
      this.dialogVisible = false;
      this.editItem = {};
      this.actIndex = -1;
    },
    handleDialogClose(done) {
      done();
    }
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
  position: relative;
  padding-bottom: 100px;
  .main {
    display: flex;
    flex-wrap: wrap;
    padding: 15px 30px;
    .item {
      cursor: pointer;
      width: 20%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background: pink;
      border-radius: 5px;
      margin: 10px 43px;
    }
  }
  .add-btn {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
    width: 300px;
    height: 60px;
    line-height: 60px;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    color: $color-c3;
    border: 1px dashed $color-c4;
    // background: pink;
    transition: all 0.3s;
    &:hover {
      background: $color-c6;
    }
  }
}

// setting-dialog
.setting-dialog {
  // background: pink;
  .edit-box {
    .edit-col {
      display: flex;
      margin-bottom: 10px;
      padding-left: 50px;
      .edit-title {
        width: 20%;
        height: 32px;
        line-height: 32px;
        margin-right: 20px;
        color: $c-content;
      }
      .edit-inp {
        width: 60%;
      }
    }
  }
}

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

// drawer
.drawer {
  .item {
    width: 100%;
    height: 80px;
    line-height: 80px;
    background: pink;
  }
}
</style>
