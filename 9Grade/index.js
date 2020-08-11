
const marks = [35, 80, 50].reduce((a, b,) => (a + b)); //.reduce((a, b) => a + b, 0


// Average = 70

// 1-59: F
// 60-69: D
// 70-79: C 
// 80-89: B
// 90-100: A

console.log(calculateGrade(marks));


function calculateGrade(marks) {
marks = marks / 3;
if (marks < 1)
{
    console.log("Errorrr")
}
else if (marks < 70) {
    return "D"
}
else if (marks < 80) {
    return "C"
}
else if (marks < 90) {
    return "B"
}
else if (marks < 100) {
    return "A"
}
else if (marks > 100) {
    console.log("too much bruh");
}
}