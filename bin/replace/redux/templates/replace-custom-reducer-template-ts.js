exports.customReducerTemplateTs = (reducerName) => `
interface State {
  // Define your state types here
}

const initialState: State = {
  // Initialize your state here
};

const ${reducerName}Reducer = (state = initialState, action): State => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ${reducerName}Reducer;
`;
