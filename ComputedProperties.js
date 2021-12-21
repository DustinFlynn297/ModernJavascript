const role = 'Host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = "James Cameron";

const team = {
    [role]: person,
    [role2]: person2
}

function addProp(obj, key, value){
    const copy = {...obj};
    copy[key] = value;
    return copy;
}

const res = addProp(team, 'happy', ':)')