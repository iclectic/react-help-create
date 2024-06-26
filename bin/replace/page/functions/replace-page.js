const fs = require("file-system");
const { pageTemplate } = require("../../templates");

/**
 * @function replacePage
 * @description this function is used to replace a page implementation.
 * @param {string} name - the name of the page.
 * @param {boolean} js - if true, the javascript implementation will be created.
 * @param {boolean} ts - if true, the typescript implementation will be created.
 * @version 1.0.0
 * @example replacePage('HomePage', true, false)
 */
exports.replacePage = (name, js, ts) => {
  const path = `src/pages/${name}.${js ? "js" : "ts"}`;
  if (fs.existsSync(path)) {
    fs.writeFile(path, pageTemplate(name, ts), (err) => {
      if (err) {
        console.log(`Unable to replace page ${name}`);
      } else {
        console.log(`${name} page replaced`);
      }
    });
  } else {
    console.log(`${path} does not exist`);
  }
};
