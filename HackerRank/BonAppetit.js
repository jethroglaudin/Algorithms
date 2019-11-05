function bonAppetit(bill, k, b) {
    //bill is an array of prices to the meals that were ordered
    // Anna is allergic to some meals. If she is that index will be
    // represented with the argument k. Which is the index to remove from array
    // if k is not present in the array then it should be divided evenly thus the
    // output will be Bon Appetit.
    // else return the difference between the total and the amount anna paid for.
    // which is show in arg b. That's the amount Brian owes Anna

    let even = "Bon Appetit";
    let item = bill[k];
    let result = undefined;
    bill.includes(item)
    bill.splice(k, 1);
    let total = bill.reduce((prev, curr) => { return prev + curr });
    let split = total / 2;

    let owed = b - split;
    if (owed !== 0) { // if there is an amount owed assign amount to result then return result.
        result = owed;
    } else {
        result = even; // assign even which is the string "bon appetit"
    }

    console.log(result);
    return result
}