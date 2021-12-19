//Reduce is a callback with at least two parameters
//The first parameter will store the total or accumulated value that we are reducing down to
//The second parameter is stores each individual element in the array

const nums = [3,4,5,6,7,8,9];

const product = nums.reduce((total, currentVal) => {
    return total * currentVal;
})

const grades = [23, 67, 89, 97, 78, 94];

//First way to get maxGrade using if statement
const maxGrade = grades.reduce((max, currentVal) => {
    if (currentVal > max) return currentVal;
    return max;
})

//Second way to get maxGrade using Math.max
const maxGrade2 = grades.reduce((max, currentVal) => {
    return Math.max(max, currentVal);
});
const minGrade = grades.reduce((min, currentVal) => {
    return Math.min(min, currentVal);
});

// can declare an initial value when using reduce directly in the function
const sum = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
    return sum + currVal;
})