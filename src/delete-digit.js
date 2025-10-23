const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = `${n}`;
  const length = str.length;
  for (let i = 0; i < length - 1; i++) {
    const currentDigit = +str[i];
    const nextDigit = +str[i + 1];
    if (currentDigit < nextDigit) return +str.slice(0, i).concat(str.slice(i + 1));
  }
  return Math.trunc(n / 10);
}

module.exports = {
  deleteDigit
};
