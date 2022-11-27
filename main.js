const subject1 = document.getElementById("subject_1");
const subject2 = document.getElementById("subject_2");
const subject3 = document.getElementById("subject_3");
const subject4 = document.getElementById("subject_4");
const subject5 = document.getElementById("subject_5");
const subject6 = document.getElementById("subject_6");

const creditHours1 = document.getElementById("c_hours1");
const creditHours2 = document.getElementById("c_hours2");
const creditHours3 = document.getElementById("c_hours3");
const creditHours4 = document.getElementById("c_hours4");
const creditHours5 = document.getElementById("c_hours5");
const creditHours6 = document.getElementById("c_hours6");

const obtainedMarks1 = document.getElementById("obtained_subj1");
const obtainedMarks2 = document.getElementById("obtained_subj2");
const obtainedMarks3 = document.getElementById("obtained_subj3");
const obtainedMarks4 = document.getElementById("obtained_subj4");
const obtainedMarks5 = document.getElementById("obtained_subj5");
const obtainedMarks6 = document.getElementById("obtained_subj6");

let obtainedMarks = [];
let cHours = [];

const button = document.getElementById("btn_calculate");

let display_input1 = document.getElementById("gpa");

button.onclick = function() {
    init();
    display_input1.innerText = "GPA: "+calculateGPA();
}

function init() {
    obtainedMarks = [
        parseInt(obtainedMarks1.value),
        parseInt(obtainedMarks2.value),
        parseInt(obtainedMarks3.value),
        parseInt(obtainedMarks4.value),
        parseInt(obtainedMarks5.value),
        parseInt(obtainedMarks6.value)
    ];

    cHours = [
        parseInt(creditHours1.value),
        parseInt(creditHours2.value),
        parseInt(creditHours3.value),
        parseInt(creditHours4.value),
        parseInt(creditHours5.value),
        parseInt(creditHours6.value)
    ];

}

function calculateGPA() {
    let totalCH = 0, numerator = 0;

    for (let x=0; x<cHours.length; x++) {
        totalCH += cHours[x];
    }

    for (let x=0; x<obtainedMarks.length; x++) {
        numerator += getGrade(obtainedMarks[x]) * cHours[x];
    }
    
    return numerator / totalCH;
}

function getGrade(marks) {
    obj = parseInt(marks);
    if (obj >= 80) return 4.0;
    else if (obj >= 75) return 3.5;
    else if (obj >= 70) return 3.0;
    else if (obj >= 65) return 2.5;
    else if (obj >= 55) return 2.0;
    else if (obj >= 50) return 1.5;
    else return 0.0;
}

