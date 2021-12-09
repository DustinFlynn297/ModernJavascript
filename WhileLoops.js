var target = Math.floor(Math.random() * 10);
var guess = Math.floor(Math.random() * 10);
while (guess !== target) {
    console.log("Target: ".concat(target, " Guess: ").concat(guess));
    guess = Math.floor(Math.random() * 10);
}
;
console.log("Target: ".concat(target, " Guess: ").concat(guess));
console.log("Congrats, you won!");
