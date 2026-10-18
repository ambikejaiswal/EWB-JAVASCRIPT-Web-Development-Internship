
let score = 85;
let grade;

console.log("Score:", score);

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else if (score >= 50) {
    grade = "E";
} else {
    grade = "F";
}

switch (grade) {
    case "A":
        grade = "A";
        break;
    case "B":
        grade = "B";
        break;
    case "C":
        grade = "C";
        break;
    case "D":
        grade = "D";
        break;
    case "E":
        grade = "E";
        break;
    default:
        grade = "F";
}

console.log("Grade:", grade);

let status = score >= 40 ? "Passed" : "Failed";
console.log("Status:", status);
