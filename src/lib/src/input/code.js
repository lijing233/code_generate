export const getCode = config => {
  if (!config) return "";
  const baseCode = `<el-input v-model="${config.model}" :placeholder="${config.placeholder}" :disabled=${config.disabled} clearable></el-input>`;
  return baseCode;
};
