let movies = [
    "The Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
]

const movie = movies.find(movie => {
    return movie.includes("Mrs");
})

const movie2 = movies.find(movie => 
    movie.indexOf("Mrs") === 0
)

const books = [
    {
        title: 'Good Omens',
        authors: ['Terry pratchett', 'Neil Gaiman'],
        rating: 4.25
    },
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.25
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.25
    },
]

const goodBook = books.find(b => b.rating >= 4.3);

const neilBook = books.find(a => a.authors.includes("Neil Gaiman"));