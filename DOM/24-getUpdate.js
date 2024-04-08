const link = document.querySelector('a');
console.log(link.getAttribute('href')); // O method "getAtribute" pega o atributo do local referenciado
link.setAttribute('href', 'https://www.thenetninja.co.uk'); // O method "setAtributo" altera o valor do local referenciado
link.innerText = 'The Net Ninja Website';

const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color: green;');