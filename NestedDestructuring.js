const results = [
    {
        first: "Eliud",
        last: "Kipchoge",
        country: "Kenya"
    },
    {
        first:"Feyisa",
        last:"Lelisa",
        country:"Ethiopia"
    },
    {
        first:"Galen",
        last:"Rupp",
        country:"United States"
    },
]

//skipping the first element with the comma
// const [, {country}] = results;
// country here gives the country of the second place person
const [{first: goldWinner}, {country}] = results;