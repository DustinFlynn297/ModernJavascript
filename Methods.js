//Passing functions in objects. Adding functions as properties on objects is called a method.



const math = {
    //creating a function in an object by using properties, "add" is the name of the function so you would access this by calling math.add(x,y)
    add: function(x,y){
        return x + y;
    },
    multiply: function(x,y){
        return x * y;
    }
}   

// can use an arrow function, but it's not that common because of the keyword "This"
// There is also a shorthand where we don't have to use the key value pair syntax.

const auth = {
    username: 'TommyBot',
    login(){
        console.log("Logged you in!")
    },
    logout(){
        console.log("Goodbye")
    }
}