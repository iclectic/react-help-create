exports.customReducerTemplateJs = (reducerName) => `
const initialState = {};

const ${reducerName}Reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ${reducerName}Reducer;
`;
