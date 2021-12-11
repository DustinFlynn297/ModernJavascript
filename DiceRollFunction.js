// defining a roll dice function the + 1 is because by default the numbers start at 0.
function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`)
};

// simulating a game where you roll multiple die at one time.
function throwDice(){
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
}

// calling the the function
throwDice();