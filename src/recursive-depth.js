const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let currentDepth = 1;
    for (let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        const newDepth = this.calculateDepth(arr[i]) + 1;
        if (newDepth > currentDepth) currentDepth = newDepth;
      }
    }
    return currentDepth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
