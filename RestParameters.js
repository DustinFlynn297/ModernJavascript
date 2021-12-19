function sum(...nums) {
    return nums.reduce((total, currVal) => {
        return total + currVal;
    });
}

//collects all remaining arguments. like adding any and all titles to the end of a name. the Rest parameter
//must be the last parameter listed in a function.

function fullName(first, last, ...titles) {
    console.log('first', first);
    console.log('last', last);
    console.log('titles', titles);
}

const multiply = (...nums) => (
    nums.reduce((total, currVal) => total*currVal)
)
