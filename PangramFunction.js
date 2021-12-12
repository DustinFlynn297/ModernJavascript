
// supported by IE using indexOf
// function isPangram(sentence){
//     let lowerCased = sentence.toLowerCase();
//     for(let char of 'abcdefghijklmnopqrstuvwxyz'){
//         if(lowerCased.indexOf(char) === -1){
//             return false;
//         }
//     }
//     return true;
// }

// not supported by IE using includes


function isPangram(sentence){
    let lowerCased = sentence.toLowerCase();
    for(let char of 'abcdefghijklmnopqrstuvwxyz'){
        if(!lowerCased.includes(char)){
            return false;
        }
    }
    return true;
}