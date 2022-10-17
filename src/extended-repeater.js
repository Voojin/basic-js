const { NotImplementedError } = require('../extensions/index.js');

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
  let resultStr = [];
  let resultAdd = [];
  repTimes = options.repeatTimes ? options.repeatTimes : 1;
  separator = options.separator ? options.separator : '+';
  addition = options.hasOwnProperty('addition') ? `${options.addition}` : '';
  additionRepTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  
  while (resultAdd.length < additionRepTimes) {
    resultAdd.push(addition);
  };

  while (resultStr.length < repTimes) {
    resultStr.push(str + resultAdd.join(`${additionSeparator}`));
  }

  return resultStr.join(`${separator}`);
}
module.exports = {
  repeater
};
