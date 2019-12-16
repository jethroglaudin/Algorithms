function marsExploration(s) {
    let message = "SOS";
    let altered = 0;

    s.split("").forEach((letter, index) => {
        if(letter.charCodeAt(0) != message.charCodeAt(index % 3)){
            altered++
        }
    });
   return altered;
}