//Reduce is a callback with at least two parameters
//The first parameter will store the total or accumulated value that we are reducing down to
//The second parameter is stores each individual element in the array

const nums = [3,4,5,6,7,8,9];

const product = nums.reduce((total, currentVal) => {
    return total * currentVal;
})

const grades = [23, 67, 89, 97, 78, 94];

//First way to get maxGrade using if statement
const maxGrade = grades.reduce((max, currentVal) => {
    if (currentVal > max) return currentVal;
    return max;
})

//Second way to get maxGrade using Math.max
const maxGrade2 = grades.reduce((max, currentVal) => {
    return Math.max(max, currentVal);
});
const minGrade = grades.reduce((min, currentVal) => {
    return Math.min(min, currentVal);
});

// can declare an initial value when using reduce directly in the function
const sum = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
    return sum + currVal;
}, 100)

//Tallying

const votes = ['y','y','y',,'n','y','n','y','n','y','n','n','n','y','y','n', 'absent'];

//using if statement
const results = votes.reduce((tally, val) => {
    if (tally[val]) {
        tally[val]++
    } else {
        tally[val] = 1;
    }
    return tally
}, {})

//using one line
const results2 = votes.reduce((tally, val) => {
    tally[val] = (tally[val] || 0) +1;
    return tally;
}, {})

const books = [
    {
        title: 'Good Omens',
        authors: ['Terry pratchett', 'Neil Gaiman'],
        rating: 4.25,
        genre: ['fiction', 'fantasy']
    },
    {
        title: 'Changing My Mind',
        authors: ['Zadie Smith'],
        rating: 3.83,
        genre: ['non-fiction', 'essays']
    },
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42,
        genre: ['fiction', 'graphic novel', 'fantasy']
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11,
        genre: ['fiction', 'fantasy']
    },
    {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36,
        genre: ['fiction', 'historical fiction']
    },
    {
        title: 'The Overstory',
        authors: ['Richard Powers'],
        rating: 3.67,
        genre: ['fiction', 'short stories']
    },
    {
        title: 'A Truly Horrible Book',
        authors: ['Xavier Time'],
        rating: 2.18,
        genre: ['fiction', 'garbage']
    },
]

const groupBooks = books.reduce((groupedBooks, book) => {
    const key = Math.floor(book.rating);
    if (!groupedBooks[key]) groupedBooks[key] = [];
    groupedBooks[key].push(book)
    return groupedBooks;
})