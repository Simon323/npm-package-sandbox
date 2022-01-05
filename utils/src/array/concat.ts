/**
 * Concat two arrays into the one
 * @param {Array} arr1 of numbers
 * @param arr2 of numbers
 * @returns Returns the new array
 * @example
 * __concat([1, 2, 3, 4, 5], [6, 7]);
 * // => [1, 2, 3, 4, 5, 6, 7]
 */
const __concat = (arr1: number[], arr2: number[]): number[] => {
  return [].concat(arr1).concat(arr2);
};

export { __concat };
