function pangrams(s) {
    let letters = [];
    let newS = s.toLowerCase();

    const isAlpha = value => {
        if (value.charCodeAt(0) >= 97 && value.charCodeAt(0) <= 122) {
            return true;
        }
        return false;
    }

    for (let i in newS) {
        if (isAlpha(newS[i])) {
            if (!letters.includes(newS[i])) {
                letters.push(newS[i])
            }
        }
    }

    return letters.length === 26 ? 'pangram' : 'not pangram'
}
