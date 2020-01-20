import lib from "@/lib";
const getPage = (formConfig) => {

  console.log('=============formConfig==========',formConfig);
  if (!formConfig) return '';
  const getitems = (itemList) => {
    let res = '';
    itemList.forEach(element => {
      const template = `
      <el-form-item prop="${element.prop}">
        ${lib[element.type] && lib[element.type].getCode(element.config)}
      </el-form-item>`
      res += template
    });
    return res;
  }
  const pageTemplate = `<!-- account ban management -->
  <template>
    <div class="main-wrapper">
      <!-- search form -->
      <div class="main-search">
        <el-form :model="${formConfig.model}" inline>
          ${getitems(formConfig.formItems)}
        </el-form>
      </div>
      <!-- result table -->
      <el-table v-loading="tableLoading" :data="tableData">
        <el-table-column prop="userName" />
      </el-table>
      <el-pagination
        v-if="page.total > 0"
        :current-page.sync="searchForm.pageNo"
        :page-size="searchForm.pageSize"
        :page-sizes="page.pageSizes"
        :total="page.total"
        background
        layout="->, total, sizes, prev, pager, next, jumper"
        @current-change="getData"
        @size-change="sizeChange"
      />
    </div>
  </template>
  
  <script>
  // import { } from "@/api/";
  export default {
    data() {
      return {
        searchForm: {
          userName: "",
          userLevelMin: "",
          pageNo: 1,
          pageSize: 15
        },
        page: {
          total: 0,
          pageSizes: [15, 30, 50, 100]
        },
        tableData: [],
        tableLoading: false
      };
    },
    created() {
      this.getData();
    },
    methods: {
      getData() {
        // this.tableLoading = true;
        // this.tableData = [];
        // this.page.total = 0;
        // const params = { ...this.searchForm };
        // getdata(params)
        //   .then(res => {
        //     this.tableLoading = false;
        //   })
        //   .catch(error => {
        //     console.log(error);
        //     this.tableLoading = false;
        //   });
      },
      handleSearch() {
        this.searchForm.pageNo = 1;
        this.getData();
      },
      handleClear() {
        this.$refs.searchForm.resetFields();
        this.handleSearch();
      },
      sizeChange(val) {
        this.searchForm.pageSize = val || 15;
        this.handleSearch();
      }
    }
  };
  </script>
  
  <style lang="scss" rel="stylesheet/sass" scoped>
  .record-img {
    margin: 0 auto;
  }
  </style>
  `;

  return pageTemplate;
}

export {
  getPage
}
