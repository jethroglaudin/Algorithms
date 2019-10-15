function miniMaxSum(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    
    let minSum = arr.reduce((prev,  curr) => {return (prev + curr)}) - min
    let maxSum = arr.reduce((prev,  curr) => {return (prev + curr)}) - max

    console.log(maxSum, minSum)

}
