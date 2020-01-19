// const ejs = require("ejs");
// console.log(ejs.render);

import ejs from "ejs";

const ejsRender = function(args) {
  return ejs.render(...args);
};
export { ejsRender };
