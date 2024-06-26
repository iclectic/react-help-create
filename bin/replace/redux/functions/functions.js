const fs = require('fs');
const path = require('path');

function replaceRedux(oldReduxName, newReduxName) {
  const oldReduxPath = path.join('src', 'redux', `${oldReduxName}.js`);
  const newReduxPath = path.join('src', 'redux', `${newReduxName}.js`);

  if (!fs.existsSync(oldReduxPath)) {
    console.log(`Redux implementation ${oldReduxName} does not exist.`);
    return;
  }

  if (!fs.existsSync(newReduxPath)) {
    console.log(`Redux implementation ${newReduxName} does not exist.`);
    return;
  }

  fs.unlinkSync(oldReduxPath);
  fs.renameSync(newReduxPath, oldReduxPath);
}

function replaceReducer(oldReducerName, newReducerName) {
  const oldReducerPath = path.join('src', 'redux', 'reducers', `${oldReducerName}.js`);
  const newReducerPath = path.join('src', 'redux', 'reducers', `${newReducerName}.js`);

  if (!fs.existsSync(oldReducerPath)) {
    console.log(`Reducer ${oldReducerName} does not exist.`);
    return;
  }

  if (!fs.existsSync(newReducerPath)) {
    console.log(`Reducer ${newReducerName} does not exist.`);
    return;
  }

  fs.unlinkSync(oldReducerPath);
  fs.renameSync(newReducerPath, oldReducerPath);
}

function replaceAction(oldActionName, newActionName) {
  const oldActionPath = path.join('src', 'redux', 'actions', `${oldActionName}.js`);
  const newActionPath = path.join('src', 'redux', 'actions', `${newActionName}.js`);

  if (!fs.existsSync(oldActionPath)) {
    console.log(`Action ${oldActionName} does not exist.`);
    return;
  }

  if (!fs.existsSync(newActionPath)) {
    console.log(`Action ${newActionName} does not exist.`);
    return;
  }

  fs.unlinkSync(oldActionPath);
  fs.renameSync(newActionPath, oldActionPath);
}

module.exports = {
  replaceRedux,
  replaceReducer,
  replaceAction,
};
