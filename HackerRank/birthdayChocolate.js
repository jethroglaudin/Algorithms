function birthday(s, d, m) {

    let ways = 0;

    for (let index = 0; index < s.length; index++)
    {
       let multiple = s.slice(index, index + m)
       if(multiple.reduce((prev, curr) => {return prev + curr}) === d){
           ways++
       }
    }

    return ways;

}

// function birthday(s, d, m) {
//     let ways = 0;
    

//     for(let i = 0; i < s.length; i++){
//         let multipleSum = 0;
//         for(let j = i; j < i+m; j++){
//             multipleSum += s[j];
//         }

//         if(multipleSum === d){
//             ways++
//         }
//     }

//     return ways;
// }
