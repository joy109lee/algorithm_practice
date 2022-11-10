/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/

function productExcept(arr) {
  function recursion1(arr, prefix = [1]) {
    if (arr.length <= 1) return prefix;
    return recursion1(
      arr.slice(1),
      prefix.concat([arr[0] * prefix[prefix.length - 1]])
    );
  }
  function recursion2(arr, prefix = [1]) {
    if (arr.length <= 1) return prefix;
    return recursion2(
      arr.slice(0, arr.length - 1),
      [arr[arr.length - 1] * prefix[0]].concat(prefix)
    );
  }
  const prefix2 = recursion2(arr);

  return recursion1(arr).map((el, idx) => {
    return el * prefix2[idx];
  });
}

console.log(productExcept([1, 2, 3, 4, 5]));
