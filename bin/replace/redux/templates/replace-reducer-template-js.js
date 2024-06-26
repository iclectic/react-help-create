exports.replaceReducerTemplateJs = () => `
const initialState = {};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default generalReducer;
`;
