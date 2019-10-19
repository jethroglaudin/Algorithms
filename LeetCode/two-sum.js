/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indicesArr = [];
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          let temp = nums[i] + nums[j];
          if (temp === target) {
            indicesArr.push(i, j);
          }
      }
    }
  
    console.log(indicesArr);
    return indicesArr;
  };
  
  

  /* Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice. */