const numbers = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];

numbers.forEach(function(num){
    console.log(num * 2);
});

function printTripe(n) {
    console.log(n * 3);
}

numbers.forEach(printTripe);

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

books.forEach(function(b){
    console.log(books.title.toUpperCase());
});