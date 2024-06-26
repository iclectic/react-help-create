const fs = require("file-system");
const {
  replaceStoreTemplateJs,
  replaceStoreTemplateTs,
  replaceReducerTemplateTs,
  replaceMainReducerTemplate,
  replaceActionTemplateTs,
  replaceReducerTemplateJs,
  replaceActionTemplateJs,
} = require("../templates");
const { config } = require("../../../utils");

/**
 * @function replaceRedux
 * @description this function is used to replace a redux implementation.
 * @param {boolean} js - if true, the javascript implementation will be created.
 * @param {boolean} ts - if true, the typescript implementation will be created.
 * @version 2.0.0
 * @example replaceRedux(true, false)
 */
exports.replaceRedux = (js, ts) => {
  const { reduxRoot, applyReduxThunk } = config;
  const path = `${reduxRoot}/`;
  if (ts) {
    fs.writeFile(
      `${path}index.ts`,
      replaceStoreTemplateTs(applyReduxThunk),
      (err) => {
        if (err) {
          console.log("Unable to replace redux store");
        } else {
          console.log(`${path}index.ts replaced`);
        }
      }
    );
    fs.writeFile(
      `${path}reducers/general/index.ts`,
      replaceReducerTemplateTs(),
      (err) => {
        if (err) {
          console.log("Unable to replace redux general reducer");
        } else {
          console.log(`${path}reducers/general/index.ts replaced`);
        }
      }
    );
    fs.writeFile(`${path}reducers/index.ts`, replaceMainReducerTemplate(), (err) => {
      if (err) {
        console.log("Unable to replace redux main reducer");
      } else {
        console.log(`${path}reducers/index.ts replaced`);
      }
    });
    fs.writeFile(
      `${path}actions/general/index.ts`,
      replaceActionTemplateTs(applyReduxThunk),
      (err) => {
        if (err) {
          console.log("Unable to replace redux general actions");
        } else {
          console.log(`${path}actions/general/index.ts replaced`);
        }
      }
    );
  } else {
    fs.writeFile(
      `${path}index.js`,
      replaceStoreTemplateJs(applyReduxThunk),
      (err) => {
        if (err) {
          console.log("Unable to replace redux store");
        } else {
          console.log(`${path}index.js replaced`);
        }
      }
    );
    fs.writeFile(
      `${path}reducers/general/index.js`,
      replaceReducerTemplateJs(),
      (err) => {
        if (err) {
          console.log("Unable to replace redux general reducer");
        } else {
          console.log(`${path}reducers/general/index.js replaced`);
        }
      }
    );
    fs.writeFile(`${path}reducers/index.js`, replaceMainReducerTemplate(), (err) => {
      if (err) {
        console.log("Unable to replace redux main reducer");
      } else {
        console.log(`${path}reducers/index.js replaced`);
      }
    });
    fs.writeFile(
      `${path}actions/general/index.js`,
      replaceActionTemplateJs(applyReduxThunk),
      (err) => {
        if (err) {
          console.log("Unable to replace redux general actions");
        } else {
          console.log(`${path}actions/general/index.js replaced`);
        }
      }
    );
  }
};
