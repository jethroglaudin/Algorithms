function catAndMouse(x, y, z) {
    let catA = x;
    let catB = y;
    let mouse = z;
    let winner = undefined;

    if (Math.abs(mouse - catA) < Math.abs(mouse - catB)) {
        winner = "Cat A";
    }
    else if (Math.abs(mouse - catB) < Math.abs(mouse - catA)) {
        winner = "Cat B"
    }
    else {
        winner = "Mouse C"
    }
    return winner;
}
