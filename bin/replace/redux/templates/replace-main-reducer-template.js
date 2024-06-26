exports.replaceMainReducerTemplate = () => `
import { combineReducers } from 'redux';
import generalReducer from './general';

export const rootReducer = combineReducers({
  general: generalReducer,
});

export default rootReducer;
`;
