import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  const mas = arr.slice();
  for (let i = 0; i < mas.length - 1; i++) {
    if (mas[i] !== -1) {
      for (let j = i + 1; j < mas.length; j++) {
        if (mas[j] !== -1) {
          if (mas[i] > mas[j]) {
            [mas[i], mas[j]] = [mas[j], mas[i]];
          }
        }
      }
    }
  }
  return mas;
}
