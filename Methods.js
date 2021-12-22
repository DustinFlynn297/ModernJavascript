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