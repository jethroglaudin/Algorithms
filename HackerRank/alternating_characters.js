function alternatingCharacters(s) {
    let deletions = 0;

    for (let letter = 0; letter < s.length; letter++){
        if(s[letter] == s[letter + 1]){
            deletions++;     
        }
    }
    console.log(deletions);
    return deletions;
}
