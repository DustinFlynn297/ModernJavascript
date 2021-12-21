const results = 
    {
        first: "Eliud",
        last: "Kipchoge",
        country: "Kenya",
        title: "Elder of the Order of the Golden heart of Kenya"
    }


//Using {} within the () states that you only care about the specific "key" you use in the {} from the object.
//Without destructuring
function print(person) {
    const {
        first,
        last,
        title
    } = person;
    console.log(`${first} ${last}, ${title}`)
}

//using destructuring
function print2({first, last, title}) {
    console.log(`${first} ${last}, ${title}`);
};