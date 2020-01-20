<template>
  <div class="container">
    <div class="title">Generate Page</div>
    <!-- 编辑区 -->
    <div class="edit-area">
      <div class="search-form">
        <div class="main">
          <div class="item" @click="onItemEdit(index)" v-for="(item, index) in searchConfig.formItems" :key="item.prop + index">
            {{item.type}}
          </div>
        </div>
        <div class="add-btn" @click="showDrawer = true">+</div>
      </div>
      <div class="search-form table-area">
        <el-table :data="tableData" border>
          <el-table-column v-for="(item, index) in tableConfig" :label="item.label || item.prop" :key="item.prop+index" align="center" :prop="item.prop"/>
        </el-table>
      </div>
      <div class="config-block">Pagination</div>
    </div>
    <OutputBlock :itemContent="itemContent" type="page" :search-form-config="searchConfig" />
    <!-- Drawer -->
    <Drawer v-model="showDrawer" @onChoose="onChoose" />
    <!-- 设置弹窗 -->
    <el-dialog
      title="Setting"
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleDialogClose"
      :modal="true"
      :destroy-on-close="true"
      class="setting-dialog"
    >
      <div class="edit-box">
        <div class="edit-col">
          <div class="edit-title">prop</div>
          <el-input
            class="edit-inp"
            v-model="editItem.prop"
            placeholder="请输入内容"
          ></el-input>
        </div>
        <div v-for="(val, key) in editItem.config" :key="key" class="edit-col">
          <div class="edit-title">{{ key }} :</div>
          <el-input
            class="edit-inp"
            v-model="editItem.config[key]"
            placeholder="请输入内容"
          ></el-input>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sureChangeConfig">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import OutputBlock from "@/components/OutputBlock/OutputBlock.vue";
import Drawer from "@/components/Drawer/Drawer.vue";
import {searchFormConfig} from '@/template/searchForm.js';
export default {
  name: "page",
  components: { OutputBlock, Drawer },
  data() {
    return {
      // 搜索部分
      searchConfig: JSON.parse(JSON.stringify(searchFormConfig)),
      // 列表部分
      // 模拟展示的列表
      tableData: [],
      tableConfig: [{label: 'name', prop: 'name'}],
      showDrawer: false,
      itemContent: [],
      dialogVisible: false,
      // 编辑使用
      actIndex: -1,
      editItem: {},
      
    };
  },
  methods: {
    onChoose(item) {
      const formItem = {
        prop: '',
        type: item.name,
        config: {...item.config}
      }
      this.searchConfig.formItems.push(formItem);
      this.updateTable()
      console.log(item);
      this.onItemEdit(this.searchConfig.formItems.length - 1)

    },
    handleDialogClose(done) {
      done()
    },
    onItemEdit(index) {
      this.actIndex = index;
      this.editItem = JSON.parse(JSON.stringify(this.searchConfig.formItems[index]));
      this.dialogVisible = true;
    },
    // 保存修改配置
    sureChangeConfig() {
      this.searchConfig.formItems[this.actIndex] = { ...this.editItem };
      this.dialogVisible = false;
      this.editItem = {};
      this.actIndex = -1;
    },
    // 更新列表
    updateTable() {
      this.tableConfig.push({
        label: 'label' + this.tableConfig.length,
        prop: 'prop'+ this.tableConfig.length
      })
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

    // edit-area
    .search-form {
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
          background: #409eff;
          color: #fff;
          font-size: 25px;
          border-radius: 5px;
          margin: 10px 39px;
          position: relative;
          .del{
            position: absolute;
            right: 0px;
            top: 0px;
            width: 20px;
            height: 100%;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            // border-radius: 5px;
            font-size: 15px;
            font-weight: 700;
            color: #fff;
            text-align: center;
            background: rgba(255, 254, 254, 0.42);
            transition: all 0.3s;
            &:hover{
              width: 80px;
            }
          }
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

    // table-area
    .table-area{
      padding: 20px;
      background: #f4f4f5;
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
</style>
