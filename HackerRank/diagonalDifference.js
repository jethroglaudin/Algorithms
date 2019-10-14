function diagonalDifference(arr) {
    // Write your code here
    let diagonal1 = [];
    let diagonal2 = [];

    for(let i = 0; i < arr.length; i++){
        
        diagonal1.push(arr[i][i]);
        diagonal2.push(arr[i][arr.length - 1 - i]);
    }
    let sumDiagonal1 = diagonal1.reduce((prev, curr) =>{
        return prev + curr;
    })
    let sumDiagonal2 = diagonal2.reduce((prev, curr) =>{
        return prev + curr;
    })


    
  return Math.abs(sumDiagonal1 - sumDiagonal2);
}
