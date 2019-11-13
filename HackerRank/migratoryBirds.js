function migratoryBirds(arr) {
    let max = 2;
    let obj = {}
    let ans = [];

    arr.forEach((item) => {
        if (!obj[item]) {
            obj[item] = 0;
        }
        obj[item] += 1;
    })
    for (let i in obj) {
        if (obj[i] > max) {
            max = obj[i];
            ans.push(parseInt(i))
        }
    }
    console.log(obj)
    console.log(ans)
    console.log(Math.max(...ans))
    return ans.length > 1 ? Math.max(...ans) : ans

}
migratoryBirds([2, 4, 3, 2, 3, 1, 2, 1, 3])