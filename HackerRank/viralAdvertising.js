function viralAdvertising(n) {
    let advertised = 5;
    let cumulativeLikes = 0;
    for (let i = 0; i < n; i++){
        let liked = Math.floor(advertised / 2);
        cumulativeLikes += liked;
        advertised = liked * 3;
    }
    return cumulativeLikes;
}
