const animals = ['lions', 'tigers', 'bears'];

for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}

const examScores = [ 98, 97, 53, 67, 22, 78];

for (let i = 0; i < examScores.length; i++) {
    console.log(i, examScores[i]);
}

const myStudents = [
    {
        firstName: 'Zeus',
        grade: 96
    },
    {
        firstName: 'Apollo',
        grade: 86
    },
    {
        firstName: 'Poseidon',
        grade: 77
    },
    {
        firstName: 'Aries',
        grade: 89
    },
    {
        firstName: 'Hermes',
        grade: 99
    }
];

let total = 0;

for (let i = 0; i < myStudents.length; i++) {
    const student = myStudents[i]
    total += student.grade
};
console.log(total/myStudents.length)

const word = 'stressed';
for (let i = word.length -1; i >= 0; i--){
    console.log(word[i]);
}