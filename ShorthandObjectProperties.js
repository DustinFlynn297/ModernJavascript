
//long hand method before ES2015
// const getStats= (arr) => {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     const sum = arr.reduce((sum, r) => sum + r);
//     const avg = sum / arr.length;
//     return {
//         max: max,
//         min: min,
//         sum: sum,
//         avg: avg
//     }
// }

// const reviews = [4.6, 5.0, 3.55, 2.88, 3.5, 4.0]

// const stats = getStats(reviews);

const getStats= (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, r) => sum + r);
    const avg = sum / arr.length;
    return {
        max,
        min,
        sum,
        avg
    }
}

const reviews = [4.6, 5.0, 3.55, 2.88, 3.5, 4.0]

const stats = getStats(reviews);