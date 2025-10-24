const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  if (typeof str !== 'string') return false;
  result = [];
  str.split('').reduce((accum, char, i) => {
    if (accum === null) {
      result.push(1);
      return char;
    }
    if (char === accum) {
      result[result.length - 1]++;
    } else {
      result.push(accum);
      result.push(1);
    }
    if (i === str.length - 1) result.push(char)
    return char;
  }, null);
  return result.filter(el => el !== 1).join('');
}

module.exports = {
  encodeLine
};
