exports.replaceStoreTemplateTs = (applyReduxThunk) => `
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
${applyReduxThunk ? "import thunk from 'redux-thunk';" : ''}

const store = createStore(
  rootReducer,
  ${applyReduxThunk ? "applyMiddleware(thunk)" : ""}
);

export default store;
`;
