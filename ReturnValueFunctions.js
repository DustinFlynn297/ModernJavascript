function multiplyBy(num) {
    return function(x){
        return x * num;
    }
}

const triple = multiplyBy(3);

triple(6);

const double = multiplyBy(2);
double(20)

function makeBetweenFunc(x,y) {
    return function(num){
        //will return a boolean based on numbers passed in as x,y
        return num >= x && num <= y
    }
}

//calling makeBetweenFunc here is how you set the parameters/arguments to test whether a number is between the two numbers provided.
const isChild = makeBetweenFunc(0,18);
isChild(5); //true
