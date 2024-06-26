const fs = require('fs');
const path = require('path');

/**
 * Replaces an old page with a new page.
 * @param {string} oldPageName - The name of the old page.
 * @param {string} newPageName - The name of the new page.
 */
function replacePage(oldPageName, newPageName) {
  const oldPagePath = path.join('src/pages', `${oldPageName}.js`);
  const newPagePath = path.join('src/pages', `${newPageName}.js`);

  if (!fs.existsSync(oldPagePath)) {
    console.log(`Page ${oldPageName} does not exist.`);
    return;
  }

  if (!fs.existsSync(newPagePath)) {
    console.log(`Page ${newPageName} does not exist.`);
    return;
  }

  fs.unlinkSync(oldPagePath);
  fs.renameSync(newPagePath, oldPagePath);
}

module.exports = {
  replacePage,
};
