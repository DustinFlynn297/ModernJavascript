function add (x,y){
    return x + y;
}

const subtract = function (a,b) {
    return a - b;
}

function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}

const operation = [add, subtract, multiply, divide]

//calling subtract, answer should be 84
// operation[1](90, 6);
//calling multiply answer should be 10
// operation[2](5,2)

//runs through each function in the operation variable
for (let func of operation){
    let result = func(30,5);
    console.log(result)
}

//stores the multiply function in the variable/object call it by using thing.doSomething(). This is how you create a Method
const thing = {
    doSomething: multiply
}

console.log(thing.doSomething(20,5))