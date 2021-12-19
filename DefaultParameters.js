// the two functions below are the old way to set a default parameter/argument using an if statement and typeOf
function multiply(x,y) {
    if(typeof y === 'undefined'){
        y = 1;
    };
    return x * y;
};

function multiply2(x,y) {
    y = typeof y === 'undefined' ? 1 : y;
    return x * y;
};

//Set a default parameter in the parantheses when defining the function.

function multiply3 (x,y = 1) {
    return x * y;
};

const greet = (person, greeting = 'Hey') => {
    console.log(`${greeting}, ${person}`)
}

greet('Dustin')

const blah = (x,y = [1,2,3]) => {
    console.log(x,y)
}