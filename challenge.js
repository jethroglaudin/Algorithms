// Year Check
// tip use Date object

// Given a year and month determine the number of years (two decimal accuracy) between
// the given time and now

// advanced challenge
// give day
// and go in the future



var now = new Date()
var readlineSync = require('readline-sync');
let currentYear = now.getFullYear()
let currentMonth = now.getMonth() + 1;

let userYear = parseInt(readlineSync.question("Enter a year "));
let userMonth = parseInt(readlineSync.question("Enter a month xx format "));

console.log(userYear);
console.log(userMonth);

if (!Number.isInteger(userMonth)){
    console.log("Month but be in number format")
    return 1;
}

if (userYear > currentYear){
    let futureYearlyDifference = userYear - currentYear;
    let futureMonthDifference = Math.abs((userMonth - currentMonth) / 12)
    let futureTotal = futureYearlyDifference + futureMonthDifference;

    console.log(`${futureTotal.toFixed(2)} years ahead`)
    
} else {
    let yearlyDifference = currentYear - userYear;
    let monthlyDifference = Math.abs(((currentMonth - userMonth) / 12)) 
    let total = yearlyDifference + monthlyDifference;
    
    console.log(`${total.toFixed(2)} years`)
}




// console.log(`${yearlyDifference}${monthyDifference}`)