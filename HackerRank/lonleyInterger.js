function lonelyinteger(a) {
    let ans = 0;
    // sort array 
    let newArr = a.sort(); 
    newArr.forEach((elem,index) => {
        if(newArr[index + 1] !== elem && newArr[index - 1] !== elem)
        ans = elem;
        return ans;
    })
    console.log(ans);
    return ans;

    

}
