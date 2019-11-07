function sockMerchant(n, ar) {

    let pairs = 0;
    let newArr = ar.sort((a, b) => {return a - b});
    console.log(newArr)
    
    for(let i = 0; i < newArr.length; i++){
        if(newArr[i] == newArr[i + 1]){
            pairs++;
            newArr.shift(); // newArr.splice(i, 1);   
        }    
    }
    console.log(pairs)
    return pairs

}