function missingNumbers(arr, brr) {
  const numCounter = array =>
    array.reduce((acc, curr) => {
      acc[curr] ? acc[curr]++ : (acc[curr] = 1);
      return acc;
    }, {});

  const arrObj = numCounter(arr);
  const brrObj = numCounter(brr);

  console.log(arrObj);
  console.log(brrObj);

  let missingNums = Object.keys(brrObj).filter(
    num => arrObj[num] !== brrObj[num]
  );

  return missingNums;
}
