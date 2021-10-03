import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats( domains ) {
  const counter = {};
  for (let i = 0; i < domains.length; i++) {
    const buf = domains[i].match(/\w+/g);
    for (let j = 0; j < buf.length; j++) {
      let str = '';
      for (let k = buf.length - 1; k >= buf.length - 1 - j; k--) {
        str += '.';
        str += buf[k];
      }
      counter[str] = (counter[str] || 0) + 1;
    }
  }
  return counter;
}
