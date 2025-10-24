const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const result = [];
  if (typeof str !== 'string') str = `${str}`;
  if (!options.separator) options.separator = '+';
  if (!options.additionSeparator) options.additionSeparator = '|';
  if (!options.repeatTimes) options.repeatTimes = 1;
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  let addition = '';
  if (options.addition !== undefined) {
    addition = repeater(
      options.addition,
      {
        repeatTimes: options.additionRepeatTimes,
        separator: options.additionSeparator,
      }
    );
  }
  result.push(str);
  result.push(addition);
  for (let i = 1; i < options.repeatTimes; i++) {
    result.push(options.separator);
    result.push(str);
    result.push(addition);
  }
  return result.join('');
}

module.exports = {
  repeater
};
