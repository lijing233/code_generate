"use strict";
// const path = require("path");

// function resolve(dir) {
//   return path.join(__dirname, dir);
// }

module.exports = {
  css: {
    loaderOptions: {
      // 设置 scss 公用变量文件
      sass: {
        data: `@import '~@/styles/public.scss';`
      }
    }
  },
  chainWebpack: config => {
    // GraphQL Loader
    config.module
      .rule("ejs")
      .test(/\.ejs$/)
      .use("html-loader")
      .loader("html-loader")
      .end();
  }
};
