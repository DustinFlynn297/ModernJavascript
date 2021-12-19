//arguments cannot be used in arrow function
function sum(){
    const argsArr = [...arguments]
    return argsArr.reduce((total, currVal) => {
        return total + currVal
    })
}

function fullName(first, last, )