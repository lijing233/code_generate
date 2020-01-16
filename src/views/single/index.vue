<template>
  <div class="container">
    <div class="title">Generate Single component</div>
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
      <div class="edit-box">
        <div v-for="(val, key) in editItem" :key="key">
          <span>{{ key }} :</span>
          <el-input v-model="editItem[key]" placeholder="请输入内容"></el-input>
        </div>
      </div>
    </div>
    <div>
      <el-button type="primary" plain @click="transform">transform</el-button>
      <el-button type="primary" plain @click="textarea1 = ''">clear</el-button>
    </div>
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
      textarea1: "",
      showDrawer: false,
      itemContent: [],
      editItem: {}
    };
  },
  methods: {
    transform() {
      const resCode = this.itemContent.reduce((pre, item) => {
        return pre + "\n" + item.getCode(item.config);
      }, "");
      this.textarea1 = resCode;
    },
    onChoose(item) {
      this.itemContent.push(item);
      console.log("ssssssssss", item);
    },
    onItemEdit(index) {
      this.editItem = this.itemContent[index].config;
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
  .edit-box {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 200px;
    min-height: 250px;
    background: pink;
  }
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
