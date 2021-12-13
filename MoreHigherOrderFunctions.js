function callThreeTimes(f){
    f();
    f();
    f();

}

function cheer(){
    console.log('Woot woot')
}

function cry(){
    console.log('Boo Hoo')
}
//Using a function to call another function
callThreeTimes(cheer)

//Defining a function that will call another function based on a set number of times provided as an arguemnt.
function repeatNTimes(action, num) {
    for(let i = 0; i < num; i ++) {
        action();
    }
}

repeatNTimes(cheer, 8)

function pickOne(f1, f2){
    let random = Math.random();
    console.log(random)
    if(random < 0.5) {
        f1();
    }
    else {
        f2();
    }
}

pickOne(cry,cheer);