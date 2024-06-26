exports.componentTemplate = (name, ts) => `
import React from 'react';

const ${name} = () => {
  return (
    <div>
      ${name} component
    </div>
  );
};

export default ${name};
`;
