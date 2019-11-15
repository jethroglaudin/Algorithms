function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // s and t determine the distance for sam's home
    // a which is to the left denotes the apple tree
    // b which is to the right denote the orange tree
    // apples and oranges denotes the amount of each fruit

    let appleDistance = apples.map((apple) => {
        return apple + a;
    }).filter((apple) => {
        if(apple >= s && apple <= t){
            return apple;
        }
    })
    let orangeDistance = oranges.map((orange) => {
        return orange + b;
    }).filter((orange)=> {
        if(orange >= s && orange <= t){
            return orange;
        }
    })
    console.log(appleDistance.length);
    console.log(orangeDistance.length);
}
