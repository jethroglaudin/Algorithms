function countingValleys(n, s) {
    const Downhill = "D";
    const Uphill = "U"
    let valley = 0;
    let currentLevel = 0;
    let seaLevel = 0;

    for(let step = 0; step < s.length; step++){
        if(s[step] == Downhill){
            currentLevel--;
        }
        if (s[step] == Uphill){
            currentLevel++;
        }
        // check if the currentLevel Matches the seaLevel
        // also check if we the current step is uphill
        // if those two match means Gary just left the valley.
        if(currentLevel == seaLevel && s[step] == Uphill){
            valley++
        }
    }
    return valley

}