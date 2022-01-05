/**
 * Creates an array of elements multiplied by x2
 * @param {Array} arr of numbers
 * @returns {Array} Returns the new array of diltred values qqq
 * @example
 * __doubles([1, 2, 3, 4, 5]);
 * // => [2, 4, 6, 8, 10]
 */
const __doubles = (arr: number[]): number[] => {
  return arr.map((x) => x * 2);
};

export { __doubles };
