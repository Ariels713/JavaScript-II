// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  return cb(arr.length)
// getLength passes the length of the array into the callback.
}
getLength(items,function(length){
console.log(length)
})


function last(arr, cb) {
  return cb(arr.pop())
  // last passes the last item of the array into the callback.
}

last(items, function(lastItem){
  console.log(lastItem)
})

function sumNums(x, y, cb) {
    // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y)
}

function adds(num1, num2){
  return num1 + num2
}

console.log(sumNums(5,1,adds))


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y)
}

function multiplies(num1, num2) {
  return num1 * num2
}
console.log(multiplyNums(5,5,multiplies))

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item))
}

contains('Pencil', items, (truthyOrFalsey) => {
  console.log(truthyOrFalsey)
})
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const newArray = []
  array.forEach((items) => {
    if(items === )
  })
  // array.forEach((item) => {
  //   if(newArray.includes(array[i]) === false ) {
  //     newArray.push(array[i])
  //   }
  // })
}

removeDuplicates(items, (banana) => {
  return banana;
})
//Use Map to copy the array, forEach to itterate through the array, compare each element in the array 
