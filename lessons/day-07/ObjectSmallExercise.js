// 3 student, get the best one with the highest score

// Data
const pinky = {
    name: "Pinky",
    grades: [9, 8, 6],
}

const uyeny = JSON.parse(JSON.stringify(pinky));
uyeny.name = "Uyen";
uyeny.grades = [7, 9, 9];

const hoa = JSON.parse(JSON.stringify(pinky));
hoa.name = "Hoa";
hoa.grades = [6, 7, 8];

// Usage
const bestStudentInfo = findBestStudent([pinky, uyeny, hoa]);
const { bestStudent, currentHighestScore} = bestStudentInfo;
console.log(`The bes student is: ${JSON.stringify(bestStudent)} with average score ${currentHighestScore}`);

// Controllers
function findBestStudent(students) {
    let bestStudent = students[0];
    let currentHighestScore = 0;

    for (const student of students) {
        const averageScore = calculateAverageScrore(student);
        if (averageScore >= currentHighestScore) {
            bestStudent = student;
            currentHighestScore = averageScore;
        }
    }
    return {
        bestStudent,
        currentHighestScore
    };
}

function calculateAverageScrore({grades}){
    let totalScore = 0;
    for (const grade of grades){
        totalScore = totalScore + grade;
        //totalScore += grade;
    }
    return Math.ceil(totalScore / grades.length);
}