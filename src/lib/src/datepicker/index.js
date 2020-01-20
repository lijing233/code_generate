export default {
  name: "datepicker",
  config: {
    model: '',
    disabled: 'false'
  },
  getCode: config => {
    if (!config) return "";
    const baseCode = `<el-date-picker
    v-model="${config.model}"
    type="daterange"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期">
  </el-date-picker>`;
    return baseCode;
  }
};
