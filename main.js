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
let creditHours = [];

const button = document.getElementById("btn_calculate");

let display_input1 = document.getElementById("gpa");

button.onclick = function() {
    clearErrors();

    if (validateInput())
        display_input1.innerText = "GPA: "+calculateGPA();

}

function validateInput() {
    if (creditHours1.value.trim().length === 0 && obtainedMarks1.value.trim().length !== 0) {
        creditHours1.setCustomValidity("*Required");
        creditHours1.reportValidity();

        if (!(creditHours1.className.split(" ").includes("red-border")))
            creditHours1.className += " red-border";
        
        return false;
    }
    if (creditHours1.value.trim().length !== 0 && obtainedMarks1.value.trim().length === 0) {
        obtainedMarks1.setCustomValidity("*Required");
        obtainedMarks1.reportValidity();

        if (!(obtainedMarks1.className.split(" ").includes("red-border")))
            obtainedMarks1.className += " red-border";
        
        return false;
    }
    if (creditHours2.value.trim().length === 0 && obtainedMarks2.value.trim().length !== 0) {
        creditHours2.setCustomValidity("*Required");
        creditHours2.reportValidity();

        if (!(creditHours2.className.split(" ").includes("red-border")))
            creditHours2.className += " red-border";
        
        return false;
    }
    if (creditHours2.value.trim().length !== 0 && obtainedMarks2.value.trim().length === 0) {
        obtainedMarks2.setCustomValidity("*Required");
        obtainedMarks2.reportValidity();

        if (!(obtainedMarks2.className.split(" ").includes("red-border")))
            obtainedMarks2.className += " red-border";
        
        return false;
    }
    if (creditHours3.value.trim().length === 0 && obtainedMarks3.value.trim().length !== 0) {
        creditHours3.setCustomValidity("*Required");
        creditHours3.reportValidity();

        if (!(creditHours3.className.split(" ").includes("red-border")))
            creditHours3.className += " red-border";
        
        return false;
    }
    if (creditHours3.value.trim().length !== 0 && obtainedMarks3.value.trim().length === 0) {
        obtainedMarks3.setCustomValidity("*Required");
        obtainedMarks3.reportValidity();

        if (!(obtainedMarks3.className.split(" ").includes("red-border")))
            obtainedMarks3.className += " red-border";
        
        return false;
    }
    if (creditHours4.value.trim().length === 0 && obtainedMarks4.value.trim().length !== 0) {
        creditHours4.setCustomValidity("*Required");
        creditHours4.reportValidity();

        if (!(creditHours4.className.split(" ").includes("red-border")))
            creditHours4.className += " red-border";
        
        return false;
    }
    if (creditHours4.value.trim().length !== 0 && obtainedMarks4.value.trim().length === 0) {
        obtainedMarks4.setCustomValidity("*Required");
        obtainedMarks4.reportValidity();

        if (!(obtainedMarks4.className.split(" ").includes("red-border")))
            obtainedMarks4.className += " red-border";
        
        return false;
    }
    if (creditHours5.value.trim().length === 0 && obtainedMarks5.value.trim().length !== 0) {
        creditHours5.setCustomValidity("*Required");
        creditHours5.reportValidity();

        if (!(creditHours5.className.split(" ").includes("red-border")))
            creditHours5.className += " red-border";
        
        return false;
    }
    if (creditHours5.value.trim().length !== 0 && obtainedMarks5.value.trim().length === 0) {
        obtainedMarks5.setCustomValidity("*Required");
        obtainedMarks5.reportValidity();

        if (!(obtainedMarks5.className.split(" ").includes("red-border")))
            obtainedMarks5.className += " red-border";
        
        return false;
    }
    if (creditHours6.value.trim().length === 0 && obtainedMarks6.value.trim().length !== 0) {
        creditHours6.setCustomValidity("*Required");
        creditHours6.reportValidity();

        if (!(creditHours6.className.split(" ").includes("red-border")))
            creditHours6.className += " red-border";
        
        return false;
    }
    if (creditHours6.value.trim().length !== 0 && obtainedMarks6.value.trim().length === 0) {
        obtainedMarks6.setCustomValidity("*Required");
        obtainedMarks6.reportValidity();

        if (!(obtainedMarks6.className.split(" ").includes("red-border")))
            obtainedMarks6.className += " red-border";
        
        return false;
    }

    creditHours = [], obtainedMarks = [];

    if (creditHours1.value.trim().length !== 0)
        creditHours.push(parseInt(creditHours1.value));
    if (creditHours2.value.trim().length !== 0)
        creditHours.push(parseInt(creditHours2.value));
    if (creditHours3.value.trim().length !== 0)
        creditHours.push(parseInt(creditHours3.value));
    if (creditHours4.value.trim().length !== 0)
        creditHours.push(parseInt(creditHours4.value));
    if (creditHours5.value.trim().length !== 0)
        creditHours.push(parseInt(creditHours5.value));
    if (creditHours6.value.trim().length !== 0)
        creditHours.push(parseInt(creditHours6.value));

    if (obtainedMarks1.value.trim().length !== 0)
        obtainedMarks.push(parseInt(obtainedMarks1.value));
    if (obtainedMarks2.value.trim().length !== 0)
        obtainedMarks.push(parseInt(obtainedMarks2.value));
    if (obtainedMarks3.value.trim().length !== 0)
        obtainedMarks.push(parseInt(obtainedMarks3.value));
    if (obtainedMarks4.value.trim().length !== 0)
        obtainedMarks.push(parseInt(obtainedMarks4.value));
    if (obtainedMarks5.value.trim().length !== 0)
        obtainedMarks.push(parseInt(obtainedMarks5.value));
    if (obtainedMarks6.value.trim().length !== 0)
        obtainedMarks.push(parseInt(obtainedMarks6.value));

    return true;

}

function calculateGPA() {
    let totalCH = 0, numerator = 0;

    for (let x=0; x<creditHours.length; x++) {
        totalCH += creditHours[x];
    }

    for (let x=0; x<obtainedMarks.length; x++) {
        numerator += getGrade(obtainedMarks[x]) * creditHours[x];
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

function clearErrors() {
    creditHours1.className = creditHours1.className.replace(" red-border", "");
    creditHours2.className = creditHours2.className.replace(" red-border", "");
    creditHours3.className = creditHours3.className.replace(" red-border", "");
    creditHours4.className = creditHours4.className.replace(" red-border", "");
    creditHours5.className = creditHours5.className.replace(" red-border", "");
    creditHours6.className = creditHours6.className.replace(" red-border", "");

    obtainedMarks1.className = obtainedMarks1.className.replace(" red-border", "");
    obtainedMarks2.className = obtainedMarks2.className.replace(" red-border", "");
    obtainedMarks3.className = obtainedMarks3.className.replace(" red-border", "");
    obtainedMarks4.className = obtainedMarks4.className.replace(" red-border", "");
    obtainedMarks5.className = obtainedMarks5.className.replace(" red-border", "");
    obtainedMarks6.className = obtainedMarks6.className.replace(" red-border", "");
}

