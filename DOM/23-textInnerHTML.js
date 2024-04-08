const para = document.querySelector('p');

console.log(para.innerText);// A propriedade "innerText" mostra apenas o texto dentro da tag p
para.innerHTML = 'ninjas are awesome!';
para.innerHTML += ' ninjas are awesome!';

const paras = document.querySelectorAll('p');
paras.forEach(para => {
    console.log(para.innerText);;
    para.innerText += ' new text';
});

const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML += '<h2>THIS IS A NEW H2</h2>';

const people = ['mario', 'luigi', 'yoshi'];
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});