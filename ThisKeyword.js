//"this" logs what is in the "window" or the current scope where being called.

function sayHi(){
    console.log("Hi")
    console.log(this)
};

const greet = function () {
    console.log(this)
}