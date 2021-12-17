const nums = [12,35,5, 67, 78];

const odds = nums.filter(n => n % 2 === 1);
const evens = nums.filter(n => n % 2 === 0);

const bigNums = nums.filter(n => n > 25);

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
        rating: 4.36,
        genre: ['fiction', 'short stories']
    },
]

const goodBooks = books.filter(b => b.rating >= 4.3);

const fantasyBooks = books.filter(b => b.genre.includes('fantasy'));

const shortForm = books.filter(b => (
    b.genre.includes('essays') || 
    b.genre.includes('short stories')
    ));

const query = '';
const results = books.filter(book =>{
    const title = book.title.toLowerCase();
    return title.includes(query.toLowerCase());
});