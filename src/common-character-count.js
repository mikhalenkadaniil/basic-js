const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  if (s1 > s2) {
    [s1, s2] = [s2, s1];
  }
  lessCounter = countCharacters(s1);
  biggerCounter = countCharacters(s2);
  for (char in lessCounter) {
    if(biggerCounter[char]) {
      if (biggerCounter[char] > lessCounter[char]) {
        counter += lessCounter[char];
      } else {
        counter += biggerCounter[char];
      }
    }
  }
  return counter;
}

function countCharacters(str) {
  const characterCounter = {};
  str.split('').forEach(el => {
    if (characterCounter[el]) {
      characterCounter[el]++;
    } else {
      characterCounter[el] = 1;
    }
  });
  return characterCounter;
}

module.exports = {
  getCommonCharacterCount
};
