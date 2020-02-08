function angryProfessor(k, a) {
    const AttendanceNeeded = k;

    let newArr = a.filter((num) => { return num <= 0;});
    console.log(AttendanceNeeded)
 
    return newArr.length >= AttendanceNeeded ? 'NO' : 'YES'
}
