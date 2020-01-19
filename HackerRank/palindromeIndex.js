function palindromeIndex(s) {
    let reversedS = s.split("").reverse().join("");
    let index = 0;
    console.log(s);
    console.log(reversedS);

    for(let i = 0, j = s.length-1; i < j, j > 0; i++, j--){
        if(s[i] !== s[j]){
            index = j;
            break;
        }
        else {
            index = -1;
        }
        
    }
    console.log(index);

    return index;   
}

palindromeIndex("baa");