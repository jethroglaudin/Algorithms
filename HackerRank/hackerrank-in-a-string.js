function hackerrankInString(s) {
    let check = "hackerrank";
    let count = 0;
    let index = 0;
   s.split("").forEach((letter) => {
       if(letter == check[index]){
           count++;
           index++;
       }
       
   })
    return count == check.length? "YES" : "NO" 
}
