function gradingStudents(grades) {
    // Write your code here

    let roundedValue;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 38) {
            roundedValue = grades[i];
            while (roundedValue % 5 !== 0) {
                roundedValue++;
            }
            if (roundedValue - grades[i] < 3) {
                grades[i] = roundedValue;
            }
        }
    }
    console.log(grades)
    return grades;
}