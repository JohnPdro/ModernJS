alert('Hello, World!');

console.log(1); // Carrega informações para o console
console.log(2);

let age =25;
let year = 2019;
console.log(age, year);

age = 30;
console.log(age);

const points = 100;
console.log(points);


// Strings
console.log('hello, world');

let email = 'mario@thenetninja.com.uk';
console.log(email);

// String concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// Getting characters
console.log(fullName[0]);

// String length
console.log(fullName.length);

// String methods
console.log(fullName.toUpperCase()); // O method toUpperCase transforma a string toda em maiuscula
let result = fullName.toLowerCase(); // O method toLowerCase transforma a string toda em minuscula
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);


// Common string methods
console.log(email.lastIndexOf('n')); // O method lastIndexOf mostra o ultimo resultado do valor informado
console.log(email.slice(0,5)); // O method slice corta a string de acordo com os valore informados ex: corta do caractere na posição 0 até a posição 5
console.log(email.substring(4, 10)); // O method substring retorna a parte da string entre os indicies inicial(4) e final(10) 
console.log(email.replace('m', 'w')); // O method replace troca os valores de lugar 


// Template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const like = 30;

// Concatenation way
let concat = 'The blog called ' + title + ' by ' + author + ' has ' + like + ' likes';
console.log(concat); 

// Template string way
let template = `The blog called ${title} by ${author} has ${like} likes`;
console.log(template);

// Creating html templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${like} likes</span>
`;





// Numbers
let radius = 10;
const pi = 3.14;
console.log(radius, pi);

// Math operators +, -, *, /, **, %
console.log(10/2);
console.log(radius % 3);
console.log(pi * radius**2);

// Order of operation - B I D M A S
console.log(5 * (10-3)**2);

let likes = 10;
console.log(likes);

likes = likes + 1; // Pode ser representado também por likes++, como abaixo
console.log(likes);

likes++;
console.log(likes);

likes--;
console.log(likes);

likes += 10;
console.log(likes);

likes -= 5;
console.log(likes);

likes *= 2;
console.log(likes);

likes /= 2;
console.log(likes);


// NaN - not a number
console.log(5 / 'hello');
console.log(5 * 'hello');

let concatStrNumber = 'the blog has ' + likes + ' likes';
console.log(concatStrNumber);






// Creating array
let ninjas = ['shaun', 'ryu', 'chun-li'];

ninjas[1] = 'ken';
console.log(ninjas[1]);

let ages = [20,25,30,35];
console.log(ages[2]);

let random = ['shaun', 'crystal', 30, 20];
console.log(random);

console.log(ninjas.length);

// Arrays methods

console.log(ninjas.join(',')); // O method join cria um array com os valores separados por ","
console.log(ninjas.indexOf('chun-li')); // O method indexOf localiza o valor desejado dentro do array e mostra em que posição ele está 
console.log(ninjas.concat(['ken', 'crystal'])); // O method concat é utilizado para mesclar dois ou mais arrays 
console.log(ninjas.push('ken')); // O method push adiciona um ou mais elementos no final do array
console.log(ninjas.pop()); // O method pop remove o elemento no final do array





// Null and Undefined
let idade = null;

console.log(idade, idade + 3,`the age is ${idade}`);



// Booleans & Comparisons
console.log(true, false, "true", "false");

// Methods can return booleans 
let emailBolleans = 'luigi@thenetninja.com.uk';
let names = ['mario', 'luigi', 'toad'];
console.log(emailBolleans.includes('@')); // O method includes verifica se o elemento passado como parametro "@" existe dentro da variavel "emailBolleans"
console.log(names.includes('luigi'));

//Comaparison operators
let ageComparison = 25;
console.log(ageComparison == 25); // true
console.log(ageComparison == 30); // false
console.log(ageComparison != 30); // true
console.log(ageComparison > 20); // true
console.log(ageComparison < 20); // false
console.log(ageComparison <= 25); //true
console.log(ageComparison >= 25); //true

let nameComparison = 'shaun';
console.log(nameComparison == 'shaun'); // true
console.log(nameComparison == 'Shaun'); // false
console.log(nameComparison > 'crystal'); // true
console.log(nameComparison > 'Shaun'); // true
console.log(nameComparison > 'Crystal'); // true

let idades = 25;

// loose comparison (different types can still be equal)

console.log(idades == 25); // true
console.log(idades == '25'); // true
console.log(idades != 25); // false
console.log(idades != '25'); // false

// strict comprison (different types cannot be equal)

console.log(idades === 25); // ture
console.log(idades === '25'); // false
console.log(idades !== 25); // false
console.log(idades !== '25'); // true

// type conversion
let score = '100';

score = Number(score);
console.log(score + 1);
console.log(typeof score);

// let resultConversion = Number('hello');
// let resultConversion = String(50);
// let resultConversion = Boolean(0);
let resultConversion = Boolean('');

console.log(resultConversion, typeof resultConversion);



