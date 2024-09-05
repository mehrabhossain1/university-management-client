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
// console.log(product);

const arr = [1, 2, 3, 4, 5];

const sum2 = arr.reduce((acc, curr) => {
  //   console.log(acc, curr);
  acc.push(curr);
  return acc;
}, []);
// console.log(sum2);

export const adminPaths2 = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: "ADMIN_DASHBOARD",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "/admin/create-admin",
        element: "CREATE_ADMIN",
      },
      {
        name: "Create Faculty",
        path: "/admin/create-faculty",
        element: "CREATE_FACULTY",
      },
      {
        name: "Create student",
        path: "/admin/create-student",
        element: "CREATE_STUDENT",
      },
    ],
  },
];

const newArray = adminPaths2.reduce((acc, curr) => {
  acc.push(curr);
  return acc;
}, []);

console.log(newArray);
