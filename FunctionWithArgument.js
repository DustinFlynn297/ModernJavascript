//Defining a function with a paramter of name so that you can pass any name as an argument to this function.
function greet (name) {
    console.log(`Hi ${name}!`);
};

greet('Tim')

function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`)
};

//setting a paramater for throwDice and looping through allowing you to change the number of dice that are rolled
function throwDice(numRoll){
    for (let i = 0; i < numRoll; i++) {
        rollDie();
    };
};

//Passing in an argument to the function to determine the number of dice that should be rolled.
throwDice(8)