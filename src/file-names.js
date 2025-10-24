const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const output = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (typeof name === 'string') {
      if (output[0]) {
        if (output.indexOf(name) === -1) {
          output.push(name);
        } else {
          counter = 1;
          while (output.indexOf(`${name}(${counter})`) !== -1) {
            counter++;
          }
          output.push(`${name}(${counter})`);
        }
      } else {
        output.push(name);
      }
    }
  }
  return output;
}

module.exports = {
  renameFiles
};
