// Complete the hurdleRace function below.
function hurdleRace(k, height) {
    let maxHeight = k;
    let doses = 0;

    for (let i = 0; i < height.length;) {
        if (height[i] > maxHeight) {
            doses++;
            maxHeight++;
        } else {
            i++;
        }
    }
    console.log(doses);
    return doses;
}
