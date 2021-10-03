import { NotImplementedError } from '../extensions/index.js';

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
export default function encodeLine(str) {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    const char = str[i];
    while (char === str[i + 1]) {
      count++;
      i++;
    }
    if (count > 1) {
      res += count + char;
    } else {
      res += char;
    }
  }
  return res;
}