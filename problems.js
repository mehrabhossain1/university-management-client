/**
 * Problem 1: Sum of Numbers
Task: Given an array of numbers, use the reduce() method to find the sum of all the numbers in the array.

const numbers = [1, 2, 3, 4, 5]; // Output should be 15
 * */

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, item) => acc + item, 0);
// console.log(sum);

// Problem 2: Product of Numbers
// Task: Given an array of numbers, use the reduce() method to find the product of all the numbers in the array.

const numbers2 = [2, 3, 4]; // Output should be 24

const product = numbers2.reduce((acc, item) => acc * item, 1);
// console.log(product);

const arr = [1, 2, 3, 4, 5];

const sum2 = arr.reduce((acc, item) => {
  //   console.log(acc, item);
  acc.push(item);
  return acc;
}, []);
// console.log(sum2);

export const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "ADMIN_DASHBOARD",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "CREATE_ADMIN",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "CREATE_FACULTY",
      },
      {
        name: "Create student",
        path: "create-student",
        element: "CREATE_STUDENT",
      },
    ],
  },
];

const newArray = adminPaths2.reduce((acc, item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: "NAVLINK",
    });
  }

  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: "NAVLINK",
      })),
    });
  }

  return acc;
}, []);

console.log(newArray);
