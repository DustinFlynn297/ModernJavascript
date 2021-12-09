let subreddits = ['soccer', 'popheads', 'cringe', 'books'];
//without using for of
for(let i = 0; i < subreddits.length; i++) {
    console.log(subreddits[i]);
}
//using for of 
for (let sub of subreddits){
    console.log(sub);
}
//using for of loop to iterate through a word.
for (let char of 'cockadoodledoo'){
    console.log(char.toUpperCase());
}