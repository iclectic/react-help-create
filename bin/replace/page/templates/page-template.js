exports.pageTemplate = (name, ts) => `
import React from 'react';

const ${name} = () => {
  return (
    <div>
      ${name} page
    </div>
  );
};

export default ${name};
`;
