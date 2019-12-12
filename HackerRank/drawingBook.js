function pageCount(n, p) {
    

    return Math.min(
        Math.floor(p / 2),
        n % 2 ?
            Math.floor((n - p) / 2) :
            Math.ceil((n - p) / 2));

}
