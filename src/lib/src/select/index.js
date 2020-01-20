// import { getCode } from "./code";
export default {
  name: "select",
  config: {
    type: "",
    placeholder: "",
    options: "options",
    disabled: false
  },
  getCode: config => {
    if (!config) return "";
    const baseCode = `<el-select v-model="${config.model}" placeholder="${config.placeholder}">
    <el-option
      v-for="item in ${config.options}"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>`;
    return baseCode;
  }
};
