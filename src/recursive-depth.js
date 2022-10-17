const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
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
    let depth = 1;

    if(Array.isArray(arr)) {
      for (let item of arr) {
        if(Array.isArray(item)) {
          let itemDepth = 1;
          itemDepth += this.calculateDepth(item)
          if(itemDepth > depth) {
            depth = itemDepth
          }
        }
      }
    }
    
    return depth;
  }
}

module.exports = {
  DepthCalculator
};
