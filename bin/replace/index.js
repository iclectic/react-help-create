const { replaceComponent } = require("./component/functions/functions");
const { replacePage } = require("./page/functions/functions");
const {
  replaceRedux,
  replaceReducer,
  replaceAction,
} = require("./redux/functions/functions");

exports.replaceComponent = replaceComponent;
exports.replacePage = replacePage;
exports.replaceRedux = replaceRedux;
exports.replaceReducer = replaceReducer;
exports.replaceAction = replaceAction;
