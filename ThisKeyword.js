//"this" logs what is in the "window" or the current scope where being called.

function sayHi(){
    console.log("Hi")
    console.log(this)
};

const greet = function () {
    console.log(this)
}

const person = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickName: 'Cher',
    
    fullName(){
        //adding destructuring
        const {
            first,
            last,
            nickName
        } =this;
        return `${first} ${last} AKA ${nickName}`;
    },
    printBio(){
        const fullName = this.fullName();
        console.log(`${fullName} is a person`)
    }
}