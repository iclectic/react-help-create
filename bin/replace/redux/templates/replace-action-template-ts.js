exports.replaceActionTemplateTs = (reducer, action, applyReduxThunk) => `
export const ${action} = () => {
  return {
    type: '${reducer.toUpperCase()}_${action.toUpperCase()}',
  };
};
`;
