const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];

// getting the sum of each row using just "for" loops

for (let i = 0; i < magicSquare.length; i++) {
    let row = magicSquare[i];
    let sum = 0;
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
        sum += row[j];
    }
    console.log(`${row} summed to ${sum}`);
};

// getting the sum of each row using "for of" loops

for (let row of magicSquare) {
    let sum = 0;
    for(let num of row) {
        sum += num;
    }
    console.log(`${row} summed to ${sum}`);
};