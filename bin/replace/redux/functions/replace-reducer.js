const fs = require("file-system");
const { customReducerTemplateJs, customReducerTemplateTs } = require("../templates");

/**
 * @function replaceReducer
 * @description this function is used to replace a specific reducer.
 * @param {string} reducerName - the name of the reducer.
 * @param {boolean} js - if true, the javascript implementation will be created.
 * @param {boolean} ts - if true, the typescript implementation will be created.
 * @version 1.0.0
 * @example replaceReducer('myReducer', true, false)
 */
exports.replaceReducer = (reducerName, js, ts) => {
  const path = `src/redux/reducers/${reducerName}.${js ? "js" : "ts"}`;
  if (fs.existsSync(path)) {
    const template = js ? customReducerTemplateJs(reducerName) : customReducerTemplateTs(reducerName);
    fs.writeFile(path, template, (err) => {
      if (err) {
        console.log(`Unable to replace reducer ${reducerName}`);
      } else {
        console.log(`${reducerName} reducer replaced`);
      }
    });
  } else {
    console.log(`${path} does not exist`);
  }
};
