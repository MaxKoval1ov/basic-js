import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  const res = [];
  for (let i = 0; i < matrix.length; i++) {
    const mas = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let count = 0;
      for (
        let k = Math.max(0, i - 1);
        k <= Math.min(matrix.length - 1, k + 1);
        k++
      ) {
        for (
          let m = Math.max(0, j - 1);
          m <= Math.min(matrix[i].length - 1, m + 1);
          m++
        ) {
          if ((i !== k || j !== m) && matrix[k][m] === true) {
            count++;
          }
        }
      }
      mas.push(count);
    }
    res.push(mas);
  }
  return res;
}