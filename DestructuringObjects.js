//Destructuring using objects

const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
    title: "Elder of the Order of the Golden heart of Kenya"
}

const {first, last} = runner;

// Saving the country to a new variable called nation

const {country: nation} = runner;