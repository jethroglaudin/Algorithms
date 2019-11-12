function timeConversion(s) {
    /*
     * Write your code here.
     */
    let hours = s.slice(0, 2);
    let period = s.slice(8);
    let militaryTime;

    if (period == "PM") {
        if (parseInt(hours) !== 12) {
            militaryTime = 12 + parseInt(hours);
            s = s.replace(hours, militaryTime);
        }
        s = s.replace(period, "");
    } else if (period == "AM") {
        if (parseInt(hours) == 12) {
            militaryTime = 12 - parseInt(hours);
            s = s.replace(hours, "0" + militaryTime);
        }
        s = s.replace(period, "");
    }
    console.log(s);
    return s;
}
