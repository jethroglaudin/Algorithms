function allSubSets(arr) {
  // find all different subsets from the given array
  // log each diff subset
  // ex {}, {1, 2}, {1}, {2};

  let set = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(set);
    set = arr[i];
  }
}
allSubSets([1, 2]);
