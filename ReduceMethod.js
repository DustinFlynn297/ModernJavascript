//Reduce is a callback with at least two parameters
//The first parameter will store the total or accumulated value that we are reducing down to
//The second parameter is stores each individual element in the array

const nums = [3,4,5,6,7,8,9];

const product = nums.reduce((total, currentVal) => {
    return total * currentVal;
})