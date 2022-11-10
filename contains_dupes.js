/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

*/

[1, 2, 3, 4, 5, 7, 3];

const isDuplicated = (arr) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in obj) return true;
    obj[arr[i]] = true;
  }
  return false;
};

const isDupliacted2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let num1 = arr[i],
        num2 = arr[j];
      if (num1 === num2) return true;
    }
  }
  return false;
  // o(n^2)time o(1)space
};

console.log(isDuplicated([1, 2, 3, 4, 5, 7, 8]));
