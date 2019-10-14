function breakingRecords(scores) {

    let highestScore = scores[0];
    let highestEclipsed = 0;

    let lowestScore = scores[0];
    let lowestEclipsed = 0;

    let ans = []

    for (let item = 0; item < scores.length; item++){
        if (scores[item] > highestScore){
            highestEclipsed++;
            highestScore = scores[item];
        }
        else if(scores[item] < lowestScore){
            lowestScore = scores[item];
            lowestEclipsed++;
        }

    }
    ans.push(highestEclipsed, lowestEclipsed)
    console.log(ans)

    return ans
}
