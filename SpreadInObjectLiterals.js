const feline = {
    legs: 4,
    family: 'Felidae'
};

const canine = {
    family: 'Canidae',
    furry: true,
    legs: 4
};

//adding everything from canine to dog.
const dog = {
    ...canine,
    isPet: true,
    adorable: tru
};

// adding everything from feline to houseCat
const houseCat = {
    ...feline,
    isGrumpy: true,
    personality: 'unpredictable'
}

//a problem can arrise if you combine two objects using the spread if they both have the same attributes such as legs: 4, one overwrites the other. 
const catDog = {
    ...canine,
    ...feline
};

//Order does matter when it comes to overwriting data, 
//if ...canine is before legs:3 the end value will be legs: 3, but if ...canine is after legs: 3 the value will be 4

const tripod = {
    legs: 3,
    ...canine
};