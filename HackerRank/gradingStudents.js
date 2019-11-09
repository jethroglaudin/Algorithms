function gradingStudents(grades) {
    // Write your code here

    let temp;
    for (let i = 0; i < grades.length; i++) {
        temp = grades[i];
        while (temp % 5 !== 0) {
            temp++;
        }
        if (grades[i] >= 38) {
            if (temp - grades[i] < 3) {
                grades[i] = temp;
            }
        }
        else {
            grades[i] = grades[i];
        }
    }

    console.log(grades)
    return grades;

}