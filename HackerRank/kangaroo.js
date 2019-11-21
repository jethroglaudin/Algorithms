function kangaroo(x1, v1, x2, v2) {
    //x1 is 1st kangaroo's start position
    // x2 is 2nd kangaroo
    let kang1Position = x1;
    let kang2Position = x2;
    let kang1JumpDistance= v1;
    let kang2JumpDistance = v2;
    let kang1Jumps = 0;
    let kang2Jumps = 0;
    let result = "";

    if (kang2Position > kang1Position && kang2JumpDistance > kang1JumpDistance) {
        result = "NO";
    } else if (kang1Position > kang2Position && kang1JumpDistance > kang2JumpDistance) {
        result = "NO";
    } else {
        while (kang1Position <= 10000 && kang2Position <= 10000) {
            if (kang1Position == kang2Position && kang1Jumps == kang2Jumps) {
                result = "YES";
            
            } else {
                result = "NO"
            }
            kang1Jumps++;
            kang2Jumps++;
            kang1Position += kang1JumpDistance;
            kang2Position += kang2JumpDistance;
            console.log(kang1Position);
            console.log(kang2Position);
        }
    }
    console.log(result);
    return result;
}
kangaroo(4523, 8092, 9419, 8076)