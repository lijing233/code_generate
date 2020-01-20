export default {
  name: "checkbox",
  config: {
    type: "",
    disabled: false
  },
  getCode: config => {
    if (!config) return "";
    const baseCode = `<el-checkbox v-model="${config.model}" :disabled="${config.disabled}">备选项</el-checkbox>`;
    return baseCode;
  }
};
