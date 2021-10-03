import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater(str, options) {
  let res = [];
  for (let i = 0; i < (options.repeatTimes || 1); i++) {
    res[i] = String(str);
    if (options.hasOwnProperty("addition")) {
      let resaddition = [];
      for (let j = 0; j < (options.additionRepeatTimes || 1); j++) {
        resaddition[j] = String(options.addition);
      }
      res[i] += resaddition.join(options.additionSeparator || "|");
    }
  }

  return res.join(options.separator || "+");
};
