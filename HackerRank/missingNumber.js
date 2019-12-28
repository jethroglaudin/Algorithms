function missingNumbers(arr, brr) {

    arr.sort();
    brr.sort();
    let objArr = {};
    let objBrr = {};
    let same = 0;

    for (let i = 0; i < brr.length; i++) {  
        objBrr[brr[i]] = (objBrr[brr[i]] === undefined) ? 1 : objBrr[brr[i]] +=1;  
    }
    for (let i = 0; i < arr.length; i++) {  
        objArr[arr[i]] = (objArr[arr[i]] === undefined) ? 1 : objArr[arr[i]] +=1;  
    }
    console.log(objBrr)
    console.log(objArr)

    
}