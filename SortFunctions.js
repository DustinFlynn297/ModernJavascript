const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9800];

const badSort = prices.slice().sort();

const ascSort = prices.slice().sort((a,b) => a - b);

const descSort = prices.slice().sort((a,b) => b - a);

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
        rating: 4.16,
        genre: ['fiction', 'short stories']
    },
]

const ascBooksRating = books.sort((a,b) => a.rating - b.rating)