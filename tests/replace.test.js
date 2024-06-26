const fs = require('fs');
const { replaceComponent } = require('../bin/replace'); // Ensure this path is correct

jest.mock('fs');

describe('replaceComponent', () => {
  const oldComponentPath = 'src/components/OldComponent.js';
  const newComponentPath = 'src/components/NewComponent.js';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should replace the old component with the new component', () => {
    fs.existsSync.mockReturnValueOnce(true).mockReturnValueOnce(true);
    fs.unlinkSync.mockImplementation(() => {});
    fs.renameSync.mockImplementation(() => {});

    replaceComponent('OldComponent', 'NewComponent');

    expect(fs.unlinkSync).toHaveBeenCalledWith(oldComponentPath);
    expect(fs.renameSync).toHaveBeenCalledWith(newComponentPath, oldComponentPath);
  });

  test('should log an error if the old component does not exist', () => {
    console.log = jest.fn();
    fs.existsSync.mockReturnValueOnce(false);

    replaceComponent('OldComponent', 'NewComponent');

    expect(console.log).toHaveBeenCalledWith('Component OldComponent does not exist.');
  });

  test('should log an error if the new component does not exist', () => {
    console.log = jest.fn();
    fs.existsSync.mockReturnValueOnce(true).mockReturnValueOnce(false);

    replaceComponent('OldComponent', 'NewComponent');

    expect(console.log).toHaveBeenCalledWith('Component NewComponent does not exist.');
  });
});
