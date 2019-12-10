function camelcase(s) {
    // find 
    let counter = 0;
    let regex = /([a-z])([A-Z])/g;

    s.replace(regex, "$1 $2").split(" ").forEach((word) => {
        counter++;
    });
    console.log(counter);
    return counter;
}
