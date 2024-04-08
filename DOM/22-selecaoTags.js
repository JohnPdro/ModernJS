// Formas de seleção de tags

// querySelector
const para = '';
para = document.querySelector('.error');
console.log(para);
para = document.querySelector('div.error');
console.log(para);
para = document.querySelector('body > h1');
console.log(para);

// querySelectorAll
const paras = document.querySelectorAll('p');
// paras.forEach(para =>{
//     console.log(para)
// })
console.log(paras[2]);
const error = document.querySelectorAll('.error');
console.log(error);

// getElementById
const title = document.getElementById('page-title');
console.log(title);

// getElementsByClassName
const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);
errors.forEach(error => {
    console.log(error);
})

//getElementsByTagName
const parag = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);




