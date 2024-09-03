// Remove elements from a JavaScript Array

/*
Using pop() Method
Using shift() Method
Using splice() Method
Using filter() Method
Using Delete Operator
Using Clear and Reset Approach
Using for() loop and new array
Using lodash _.remove Method
Using JavaScript Array.prototype.reduce Method
Using forEach(), indexOf(), and splice()
*/

/*Using pop() Method
The pop() method is used to remove the last element of the array and returns the removed element. This function decreases the length of the array by 1 every time the element is removed. */

let arr = ["shift", "splice", "filter", "pop"];

let popped = arr.pop();

// console.log(arr);
// console.log(popped);

/*
Example 2: The below code removes the elements from array using pop() method until the length of the array turns to 0.
*/

// Declare and initialize an array
let array = ["pop", "splice", "filter", "shift"];
console.log("Original array: " + array);

// Loop run while array length not zero
while (array.length > 1) {
  // Remove elements from array
  let popped = array.pop();

  console.log("Array Length: " + array.length);
  console.log("Popped Element: " + popped);
}
