function funnyString(s) {

    let r = s.split("").reverse().join("");
    for(let i = 0; i < s.length; i++){
        let diffS = Math.abs(s.charCodeAt(i + 1) - s.charCodeAt(i));
        let diffR = Math.abs(r.charCodeAt(i + 1) - r.charCodeAt(i));
        console.log(diffS)

        if(!isNaN(diffS) && diffS !== diffR){
            return 'Not Funny';
        }

    }
    return 'Funny';
}