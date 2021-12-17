// not implicit
const square = n => {
    return n * n
}

// implicit based on not needing {} brackets and using () instead, also do not add "return"
const square1 = n => (
    n * n
)

const num = [1,2,3,4,5,6,7,8,9];

//using a function keyword, so not implicit
const doubles1 = num.map(function(n){
    return n*2;
});

//using an arrow function, not implicit
const doubles2 = num.map(n => {
    return n*2;
});

// using an arrow function on one line so no () required, implicit because no "return" keyword
const doubles3 = num.map(n => n * 2);

const parodyList = num.map(function(n){
    if (n % 2 === 0) return 'even';
    return 'odd';
});

//using arrow function
const parodyList = num.map((n) => {
    if (n % 2 === 0) return 'even';
    return 'odd';
});

//using ternary operator we could make this an implicit one liner
const parodyList = num.map((n) => n % 2 === 0 ? 'even' : 'odd');