function avg (arr) {
    let total = 0;
    //loop over each num
    for(let num of arr){
        total += num;
    }
    return total/arr.length;
}