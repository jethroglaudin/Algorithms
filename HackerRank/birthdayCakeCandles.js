// Complete the function birthdayCakeCandles in the editor below. It must return an integer representing the number of candles she can blow out.

// birthdayCakeCandles has the following parameter(s):

// ar: an array of integers representing candle heights


function birthdayCakeCandles(ar) {
    let newArr = ar.sort(function(a, b){
        return a - b
    });
    let count = 0;

    for (let i = 0; i < newArr.length; i++)
    {
        if(newArr[i] == newArr[newArr.length-1]){
            count++;
        }
    }
    return count;


}