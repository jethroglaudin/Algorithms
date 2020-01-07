'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {

    let columnsMax = 3;
    let rowsMax = 3;
    let sum;
    let largestMaximumHG;

    for(let columns = 0; columns <= columnsMax; columns++){
        for(let rows = 0; rows <= rowsMax; rows++){
            // top of the hour glass
            sum = arr[columns][rows] + arr[columns][rows+1] + arr[columns][rows+2];
            // middle of the hour glass
            sum += arr[columns+1][rows+1];

            // bottom of hour glass
            
            sum += arr[columns+2][rows] + arr[columns+2][rows+1] + arr[columns+2][rows+2];
            
            if(columns == 0 && rows == 0){
                largestMaximumHG = sum;
            }

            if(largestMaximumHG < sum){
                largestMaximumHG = sum;
            }
        }
    }
    console.log(largestMaximumHG);
    return largestMaximumHG
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
