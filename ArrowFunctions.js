//without using arrow functions by using the word "function"
const square = function(x){
    return x * x;
}

//using an arrow function and no keyword "function"
const square = (x) => {
    return x * x;
}

// if you only have one parameter you can leave the () off for example it could be num instead of (num)
const isEven = (num) => {
    return num % 2 === 0;
}

const multiply = (x,y) => {
    return x * y;
}