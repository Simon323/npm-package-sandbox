import { __chunk, __concat, __doubles } from "utils";

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [11, 12];
console.log(__chunk(arr1, 4));
console.log(__doubles(arr1));
console.log(__concat(arr1, arr2));
