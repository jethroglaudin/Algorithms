// Complete the minimumNumber function below.
function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let passwordArr = password.split("");

    function isUpper(value){
        if (value.charCodeAt(0) >= 65 && value.charCodeAt(0) <= 90){
            return true;
        }
        return false;
    }
    function isLower(value){
        if(value.charCodeAt(0) >= 97 && value.charCodeAt(0) <= 122){
            return true;
        }
        return false;
    }

    function isDigit(value){
        if(value.match(/[0-9]/)){
            return true;
        }
        return false;
    }
    
    function isSpecial(value){
        if(value.match(/\W/)){
            return true;
        }
        return false;
    }
    
    let charCounter = 0

    if (!passwordArr.some(isDigit)) {
        charCounter++;
    }

    if(!passwordArr.some(isSpecial)){
        charCounter++
    }

    if(!passwordArr.some(isUpper)){
        charCounter++;
    }
    if(!passwordArr.some(isLower)){
        charCounter++;
    }
   
    return (charCounter + n >= 6) ? charCounter : 6 - n;
}
