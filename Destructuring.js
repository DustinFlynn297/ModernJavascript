const raceResults = [
    'Eliud Kipchoge',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Ghirmay Ghebreslassie',
    'Alphonce Simbu',
    'Jared Ward'
];

//first way of "destructuring" an array
// const gold = raceResults[0]
// const silver = raceResults[1]
// const bronze = raceResults[2]

//new way of destructuring, order does matter.
const [gold, silver, bronze] = raceResults;

//can skip elements in an array by adding commas
const [first, , , fourth] = raceResults;

//can use the ...rest parameters to collect all remaining elements of the array
const[winner, ...others] = raceResults;
