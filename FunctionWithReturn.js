// function isPurple(color) {
//     return color.toLowerCase() === 'purple';
// };

function containsPurple(arr) {
    for (let color of arr) {
        if(color === 'purple' || color === 'magenta'){
            return true;
        }
    }
    return false;
};

containsPurple(['blue', 'pink', 'purple']);