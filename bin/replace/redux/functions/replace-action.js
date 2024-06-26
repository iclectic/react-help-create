const fs = require("file-system");
const { customActionTemplateJs, customActionTemplateTs } = require("../templates");

/**
 * @function replaceAction
 * @description This function is used to replace a specific action.
 * @param {string} reducer - The name of the reducer folder.
 * @param {string} action - The name of the action.
 * @param {boolean} js - If true, the JavaScript implementation will be created.
 * @param {boolean} ts - If true, the TypeScript implementation will be created.
 * @param {boolean} applyReduxThunk - If true, apply Redux Thunk middleware to action.
 * @version 1.0.0
 * @example replaceAction('myReducer', 'myAction', true, false, true)
 */
exports.replaceAction = (reducer, action, applyReduxThunk, js, ts) => {
  const path = `src/redux/actions/${reducer}/${action}.${js ? "js" : "ts"}`;
  if (fs.existsSync(path)) {
    const template = js
      ? customActionTemplateJs(reducer, action, applyReduxThunk)
      : customActionTemplateTs(reducer, action, applyReduxThunk);
    fs.writeFile(path, template, (err) => {
      if (err) {
        console.log(`Unable to replace action ${action} in reducer ${reducer}`);
      } else {
        console.log(`${action} action in reducer ${reducer} replaced`);
      }
    });
  } else {
    console.log(`${path} does not exist`);
  }
};
