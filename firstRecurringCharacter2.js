function returningChar(string) {
   let hashTable = {}; // create hash table
    let ans = null;

    for(let i in string){
        if(!hashTable.hasOwnProperty(string[i])){
            hashTable[string[i]] = 1;
        }
        else {
            hashTable[string[i]] += 1;
        }
        if(hashTable[string[i]] > 1){
            ans = string[i]
            break;
        }
    }
   console.log(hashTable)
   console.log(ans)
  }
 
  returningChar("ABCA");
  returningChar("BCABA");
  returningChar("ABCDEFG");
  