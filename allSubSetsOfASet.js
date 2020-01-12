function allSubSets(arr) {
  // find all different subsets from the given array
  // log each diff subset
  // ex {}, {1, 2}, {1}, {2};

  let subset = [arr.length];

  helper(arr, subset, 0);

  console.log(subset);

  function helper(arr, subset, index) {
    if (index == arr.length) {
      console.log(subset.filter(item => item !== null));
    } else {
      subset[index] = null;
      helper(arr, subset, index + 1);
      subset[index] = arr[index];
      helper(arr, subset, index + 1);
    }
  }
}
allSubSets([1, 2]);
