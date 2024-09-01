/**
 * Problem 1: Sum of Numbers
Task: Given an array of numbers, use the reduce() method to find the sum of all the numbers in the array.

const numbers = [1, 2, 3, 4, 5]; // Output should be 15
 * */

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// Problem 2: Product of Numbers
// Task: Given an array of numbers, use the reduce() method to find the product of all the numbers in the array.

const numbers2 = [2, 3, 4]; // Output should be 24

const product = numbers2.reduce((acc, curr) => acc * curr, 1);
console.log(product);
