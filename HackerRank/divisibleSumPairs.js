function divisibleSumPairs(n, k, ar) {

    let pairs = 0;

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            let sumPairs = ar[i] + ar[j];
            if(sumPairs % k === 0){
                pairs++
            }
        }
    }
    return pairs

}