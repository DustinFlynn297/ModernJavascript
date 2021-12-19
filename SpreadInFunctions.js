// not supported in IE

function giveMeFour(a,b,c,d){
    console.log('a', a)
    console.log('b', b)
    console.log('c', c)
    console.log('d', d)
}

const colors = ['red', 'orange', 'yellow', 'blue']
//spread is used by passing ... followed by the variable name
giveMeFour(...colors)

// does not have to be an array or object to use the spread. Can use a single string, it would be based on the number of params listed in the function used.
const str = 'GOAT';

giveMeFour(...str)