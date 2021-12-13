//calling outer function will print out 300
function outer() {
    let movie = "300";
    function inner() {
        console.log(movie.toUpperCase())
    }
    inner()
}

//calling outer function will print out Toy Story

function outer() {
    let movie = "300";
    function inner() {
        let movie = "Toy Story"
        console.log(movie.toUpperCase())
    }
    inner()
}