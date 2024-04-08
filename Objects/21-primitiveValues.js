// primitive values

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: &{scoreOne}`, `scoreTwo: ${scoreTwo}`)

const userOne = {name: 'ryu', age: 30}; // Objeto
const userTwo = userOne; // Referencia do objeto ou seja não e o objeto é apenas uma referencia 

console.log(userOne, userTwo);

userOne.name = 'chun-li';
console.log(userOne, userTwo);

// reference values

//userOne = {name: 'ryu', age: 30 };
//userTwo = userOne;

//console.log(userOne, userTwo);