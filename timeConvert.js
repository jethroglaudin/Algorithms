
// Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. 

// Use the Parameter Testing feature in the box below to test your code with different arguments.


function TimeConvert(num) { 
    let hours = Math.floor(num/60);
    let minutes = num % 60;
    let time = `${hours}:${minutes}`;


  // code goes here  
  return time;
         
}
   
// keep this function call here 
TimeConvert(readline());