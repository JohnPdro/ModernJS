// callbacks & foreach

const myFunc = (callbackFunc) => { // ----> Regular function
    //do something
    let value = 50;
    callbackFunc(value)
};

myFunc(value => { // ----> Arrow function
    //do something
    console.log(value);
})


let people = ['mario', 'luig', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`)
}

people.forEach(logPerson);

// people.forEach((person, index) => {
//     console.log(index, person);
// });
