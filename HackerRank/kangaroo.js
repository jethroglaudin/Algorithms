function kangaroo(x1, v1, x2, v2) {
    //x1 is 1st kangaroo's start position
    // x2 is 2nd kangaroo
    let kang1Position = x1;
    let kang2Position = x2;
    let kang1JumpDistance = v1;
    let kang2JumpDistance = v2;
    if ((kang2Position > kang1Position && kang2JumpDistance >= kang1JumpDistance) || ((kang1Position - kang2Position) % (kang2JumpDistance - kang1JumpDistance)) != 0)
        return 'NO'
    else
        return 'YES'
}

kangaroo(4523, 8092, 9419, 8076)