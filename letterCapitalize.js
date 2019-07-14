// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function LetterCapitalize(str) {
  //   code goes here
  return str
    .split(" ")
    .map(newStr => {
      return newStr[0].toUpperCase() + newStr.substr(1);
    })
    .join(" ");
}

// keep this function call here
LetterCapitalize(readline());
