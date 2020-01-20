// import { getCode } from "./code";
export default {
  name: "button",
  config: {
    type: "",
    text: ""
  },
  getCode: config => {
    if (!config) return "";
    const baseCode = `<el-button type="${config.type}" plain>${config.text}</el-button>`;
    return baseCode;
  }
};
