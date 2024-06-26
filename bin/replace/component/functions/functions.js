const fs = require('fs');
const path = require('path');
const { componentTemplate } = require("../../templates");

function replaceComponent(oldComponentName, newComponentName) {
  const oldComponentPath = path.join('src', 'components', `${oldComponentName}.js`);
  const newComponentPath = path.join('src', 'components', `${newComponentName}.js`);

  if (!fs.existsSync(oldComponentPath)) {
    console.log(`Component ${oldComponentName} does not exist.`);
    return;
  }

  if (!fs.existsSync(newComponentPath)) {
    console.log(`Component ${newComponentName} does not exist.`);
    return;
  }

  fs.unlinkSync(oldComponentPath);
  fs.renameSync(newComponentPath, oldComponentPath);
  console.log(`Replaced ${oldComponentName} with ${newComponentName}.`);
}

module.exports = { replaceComponent };
