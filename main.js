$(document).ready(main);

const creditHrs1 = new Map([
    ["pf", 4],
    ["ict", 3],
    ["cal1", 3],
    ["app_ph", 3],
    ["ecc", 3],
    ["isl", 2]
]);

const creditHrs2 = new Map([
    ["oop", 4],
    ["dld", 4],
    ["ps", 3],
    ["ur", 3],
    ["cps", 3],
    ["pak_st", 2]
]);

const creditHrs3 = new Map([
    ["dsa", 4],
    ["coal", 4],
    ["diff_eq", 3],
    ["dsc_st", 3],
    ["tbw", 3]
]);

const creditHrs4 = new Map([
    ["dbms", 4],
    ["vp", 3],
    ["la", 3],
    ["daoa", 3],
    ["toa", 3]
]);

const creditHrs5 = new Map([
    ["ccn", 4],
    ["os", 4],
    ["cal2", 3],
    ["ise", 3],
    ["dm", 3]
]);

const creditHrs6 = new Map([
    ["ai", 3],
    ["cc", 3],
    ["nsc", 3],
    ["oose", 3],
    ["wp", 3]
]);

const creditHrs7 = new Map([
    ["dsc", 3],
    ["ap", 3],
    ["wp2", 3],
    ["hci", 3],
    ["pdc", 3],
    ["fyp1", 3]
]);

const creditHrs8 = new Map([
    ["mt", 3],
    ["sda", 3],
    ["fyp2", 3]
]);

var totalCHrs1 = 0;
var qGrades1 = 0;

var totalCHrs2 = 0;
var qGrades2 = 0;

var totalCHrs3 = 0;
var qGrades3 = 0;

var totalCHrs4 = 0;
var qGrades4 = 0;

var totalCHrs5 = 0;
var qGrades5 = 0;

var totalCHrs6 = 0;
var qGrades6 = 0;

var totalCHrs7 = 0;
var qGrades7 = 0;

var totalCHrs8 = 0;
var qGrades8 = 0;


function main() {
    init();
    semListeners();
}

function init() {
    setCreditHours();
    setTotalCHrs();
}

function setCreditHours() {
    $("#c_hours_pf").text(creditHrs1.get("pf"));
    $("#c_hours_ict").text(creditHrs1.get("ict"));
    $("#c_hours_cal1").text(creditHrs1.get("cal1"));
    $("#c_hours_app_ph").text(creditHrs1.get("app_ph"));
    $("#c_hours_ecc").text(creditHrs1.get("ecc"));
    $("#c_hours_isl").text(creditHrs1.get("isl"));

    $("#c_hours_oop").text(creditHrs2.get("oop"));
    $("#c_hours_dld").text(creditHrs2.get("dld"));
    $("#c_hours_ps").text(creditHrs2.get("ps"));
    $("#c_hours_ur").text(creditHrs2.get("ur"));
    $("#c_hours_cps").text(creditHrs2.get("cps"));
    $("#c_hours_pak_st").text(creditHrs2.get("pak_st"));

    $("#c_hours_dsa").text(creditHrs3.get("dsa"));
    $("#c_hours_coal").text(creditHrs3.get("coal"));
    $("#c_hours_diff_eq").text(creditHrs3.get("diff_eq"));
    $("#c_hours_dsc_st").text(creditHrs3.get("dsc_st"));
    $("#c_hours_tbw").text(creditHrs3.get("tbw"));

    $("#c_hours_dbms").text(creditHrs4.get("dbms"));
    $("#c_hours_vp").text(creditHrs4.get("vp"));
    $("#c_hours_la").text(creditHrs4.get("la"));
    $("#c_hours_daoa").text(creditHrs4.get("daoa"));
    $("#c_hours_toa").text(creditHrs4.get("toa"));

    $("#c_hours_ccn").text(creditHrs5.get("ccn"));
    $("#c_hours_os").text(creditHrs5.get("os"));
    $("#c_hours_cal2").text(creditHrs5.get("cal2"));
    $("#c_hours_ise").text(creditHrs5.get("ise"));
    $("#c_hours_dm").text(creditHrs5.get("dm"));

    $("#c_hours_ai").text(creditHrs6.get("ai"));
    $("#c_hours_cc").text(creditHrs6.get("cc"));
    $("#c_hours_nsc").text(creditHrs6.get("nsc"));
    $("#c_hours_oose").text(creditHrs6.get("oose"));
    $("#c_hours_wp").text(creditHrs6.get("wp"));

    $("#c_hours_dsc").text(creditHrs7.get("dsc"));
    $("#c_hours_ap").text(creditHrs7.get("ap"));
    $("#c_hours_wp2").text(creditHrs7.get("wp2"));
    $("#c_hours_hci").text(creditHrs7.get("hci"));
    $("#c_hours_pdc").text(creditHrs7.get("pdc"));
    $("#c_hours_fyp1").text(creditHrs7.get("fyp1"));

    $("#c_hours_mt").text(creditHrs8.get("mt"));
    $("#c_hours_sda").text(creditHrs8.get("sda"));
    $("#c_hours_fyp2").text(creditHrs8.get("fyp2"));
}

function setTotalCHrs() {
    for (const value of creditHrs1.values()) {
        totalCHrs1 += value;
    }
    for (const value of creditHrs2.values()) {
        totalCHrs2 += value;
    }
    for (const value of creditHrs3.values()) {
        totalCHrs3 += value;
    }
    for (const value of creditHrs4.values()) {
        totalCHrs4 += value;
    }
    for (const value of creditHrs5.values()) {
        totalCHrs5 += value;
    }
    for (const value of creditHrs6.values()) {
        totalCHrs6 += value;
    }
    for (const value of creditHrs7.values()) {
        totalCHrs7 += value;
    }
    for (const value of creditHrs8.values()) {
        totalCHrs8 += value;
    }
}

function getQGradesForSem(semester) {
    switch (semester) {
        case 1:
            return (creditHrs1.get("pf")*$("#gp_pf").text()) +
            (creditHrs1.get("ict")*$("#gp_ict").text()) +
            (creditHrs1.get("cal1")*$("#gp_cal1").text()) +
            (creditHrs1.get("app_ph")*$("#gp_app_ph").text()) +
            (creditHrs1.get("ecc")*$("#gp_ecc").text()) +
            (creditHrs1.get("isl")*$("#gp_isl").text());
        case 2:
            return (creditHrs2.get("oop")*$("#gp_oop").text()) +
            (creditHrs2.get("dld")*$("#gp_dld").text()) +
            (creditHrs2.get("ps")*$("#gp_ps").text()) +
            (creditHrs2.get("ur")*$("#gp_ur").text()) +
            (creditHrs2.get("cps")*$("#gp_cps").text()) +
            (creditHrs2.get("pak_st")*$("#gp_pak_st").text());
        case 3:
            return (creditHrs3.get("dsa")*$("#gp_dsa").text()) +
            (creditHrs3.get("coal")*$("#gp_coal").text()) +
            (creditHrs3.get("diff_eq")*$("#gp_diff_eq").text()) +
            (creditHrs3.get("dsc_st")*$("#gp_dsc_st").text()) +
            (creditHrs3.get("tbw")*$("#gp_tbw").text());
        case 4:
            return (creditHrs4.get("dbms")*$("#gp_dbms").text()) +
            (creditHrs4.get("vp")*$("#gp_vp").text()) +
            (creditHrs4.get("la")*$("#gp_la").text()) +
            (creditHrs4.get("daoa")*$("#gp_daoa").text()) +
            (creditHrs4.get("toa")*$("#gp_toa").text());
        case 5:
            return (creditHrs5.get("ccn")*$("#gp_ccn").text()) +
            (creditHrs5.get("os")*$("#gp_os").text()) +
            (creditHrs5.get("cal2")*$("#gp_cal2").text()) +
            (creditHrs5.get("ise")*$("#gp_ise").text()) +
            (creditHrs5.get("dm")*$("#gp_dm").text());
        case 6:
            return (creditHrs6.get("ai")*$("#gp_ai").text()) +
            (creditHrs6.get("cc")*$("#gp_cc").text()) +
            (creditHrs6.get("nsc")*$("#gp_nsc").text()) +
            (creditHrs6.get("oose")*$("#gp_oose").text()) +
            (creditHrs6.get("wp")*$("#gp_wp").text());
        case 7:
            return (creditHrs7.get("dsc")*$("#gp_dsc").text()) +
            (creditHrs7.get("ap")*$("#gp_ap").text()) +
            (creditHrs7.get("wp2")*$("#gp_wp2").text()) +
            (creditHrs7.get("hci")*$("#gp_hci").text()) +
            (creditHrs7.get("pdc")*$("#gp_pdc").text()) +
            (creditHrs7.get("fyp1")*$("#gp_fyp1").text());
        case 8:
            return (creditHrs8.get("mt")*$("#gp_mt").text()) +
            (creditHrs8.get("sda")*$("#gp_sda").text()) +
            (creditHrs8.get("fyp2")*$("#gp_fyp2").text());

        default: return null;
    }
}


function semListeners() {
    for (const subj of creditHrs1.keys()) {
        listenerSem(subj, 1);
    }
    for (const subj of creditHrs2.keys()) {
        listenerSem(subj, 2);
    }
    for (const subj of creditHrs3.keys()) {
        listenerSem(subj, 3);
    }
    for (const subj of creditHrs4.keys()) {
        listenerSem(subj, 4);
    }
    for (const subj of creditHrs5.keys()) {
        listenerSem(subj, 5);
    }
    for (const subj of creditHrs6.keys()) {
        listenerSem(subj, 6);
    }
    for (const subj of creditHrs7.keys()) {
        listenerSem(subj, 7);
    }
    for (const subj of creditHrs8.keys()) {
        listenerSem(subj, 8);
    }
}

function listenerSem(subject, semester) {
    var marks_subj = `#marks_${subject}`;
    var grade_subj = `#grade_${subject}`;
    var gp_subj = `#gp_${subject}`;
    var semester_gpa = `#gpa_${semester}`;

    $(marks_subj).on("input", function() {
        $(grade_subj).text(getGradeFromMarks($(marks_subj).val()));
        $(gp_subj).text(getGPFromMarks($(marks_subj).val()));

        // gpa
        var gpa = (getQGradesForSem(semester)/getTotalCHrsForSem(semester)).toFixed(2);

        if (isNaN(gpa)) {
            gpa = "-";
        }
        $(semester_gpa).text(`GPA: ${gpa}`);

        // cgpa
        var sumOfQGrades = 0;
        var sumOfCHrs = 0;

        for (var x=1; x<=8; x++) {
            var gpa_sem = `#gpa_${x}`;

            if ($(gpa_sem).text() != "GPA: -") {
                sumOfQGrades += getQGradesForSem(x);
                sumOfCHrs += getTotalCHrsForSem(x);
            }
        }
        console.log(sumOfQGrades + " " + sumOfCHrs);
        $("#gpa_cgpa").text(`CGPA: ${(sumOfQGrades/sumOfCHrs).toFixed(2)}`);

    });
}

function getTotalCHrsForSem(semester) {
    switch (semester) {
        case 1: return totalCHrs1;
        case 2: return totalCHrs2;
        case 3: return totalCHrs3;
        case 4: return totalCHrs4;
        case 5: return totalCHrs5;
        case 6: return totalCHrs6;
        case 7: return totalCHrs7;
        case 8: return totalCHrs8;
        default: return null;
    }
}

function getGradeFromMarks(marks) {
    if (marks == "") return "-";
    if (marks >= 80) return "A";
    if (marks >= 75) return "B+";
    if (marks >= 70) return "B";
    if (marks >= 65) return "C+";
    if (marks >= 55) return "C";
    if (marks >= 50) return "D";
    return "F";
}

function getGPFromMarks(marks) {
    if (marks == "") return "-";
    if (marks >= 80) return 4.0;
    if (marks >= 75) return 3.5;
    if (marks >= 70) return 3.0;
    if (marks >= 65) return 2.5;
    if (marks >= 55) return 2.0;
    if (marks >= 50) return 1.5;
    return 0;
}