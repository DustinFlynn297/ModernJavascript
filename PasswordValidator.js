
// checking each condition separately.
function isValidPassword(password, username) {
    if (password.length < 8) {
        return false;
    } 
    if (password.indexOf(' ') !== -1){
        return false;
    } 
    if (password.indexOf(username) !== -1) {
        return false;
    } 
    return true;
}

// turning the conditions into variables to shorten the comparison
function isValidPassword(password, username){
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(username) !== -1;
    return !tooShort && !hasSpace && !tooSimilar;
}
isValidPassword('asdfa', 'asdf');