exports.replaceReducerTemplateTs = () => `
interface State {
  // Define your state types here
}

const initialState: State = {
  // Initialize your state here
};

const generalReducer = (state = initialState, action): State => {
  switch (action.type) {
    default:
      return state;
  }
};

export default generalReducer;
`;
