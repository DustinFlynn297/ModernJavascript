const words = ["dog", "dig", "bog", "bag", "sig"];

//testing to see if all words are 3 letters in length
const threeLetterWords = words.every(word => word.length === 3);

// Testing to test to see if all words end with the letter 'g', true or false
const wordsEndInG = words.every(word => {
    const last = word.length -1;
    return word[last] === 'g';
});

//Use 'some' to test if any of the words in this array start with the letter d
const wordsStartWithD =  words.some(word => word[0] === 'd');

// Use 'every' to test if all words in this array start with the letter d
const allStartWithD = words.every(word => word[0] === 'd');