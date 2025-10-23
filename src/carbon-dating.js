const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
    if (typeof sampleActivity === 'string') {
      if (isNaN(parseFloat(sampleActivity)) || !isFinite(sampleActivity)) return false;
    } else {
      return false;
    }
    if (+sampleActivity > 15 || +sampleActivity <= 0) return false;
  return Math.ceil(-HALF_LIFE_PERIOD * Math.log2(+sampleActivity / MODERN_ACTIVITY));
}

module.exports = {
  dateSample
};
