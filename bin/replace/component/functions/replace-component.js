const fs = require("file-system");
const { componentTemplate } = require("../../templates");

/**
 * @function replaceComponent
 * @description this function is used to replace a component implementation.
 * @param {string} name - the name of the component.
 * @param {boolean} js - if true, the javascript implementation will be created.
 * @param {boolean} ts - if true, the typescript implementation will be created.
 * @version 1.0.0
 * @example replaceComponent('MyComponent', true, false)
 */
exports.replaceComponent = (name, js, ts) => {
  const path = `src/components/${name}.${js ? "js" : "ts"}`;
  if (fs.existsSync(path)) {
    fs.writeFile(path, componentTemplate(name, ts), (err) => {
      if (err) {
        console.log(`Unable to replace component ${name}`);
      } else {
        console.log(`${name} component replaced`);
      }
    });
  } else {
    console.log(`${path} does not exist`);
  }
};
