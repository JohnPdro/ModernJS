// const content = document.querySelector('p');
// console.log(content.classList); // A property "classList" lista as classes do item referenciado
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const paras = document.querySelectorAll('p');

paras.forEach(p => {
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }
    if(p.innerText.includes('success')){
        p.classList.add('success');
    }
});

const title = document.querySelector('.title');
title.classList.toggle('test');
title.classList.toggle('test');

// Methods 
// add - adiciona
// remove - remove
// toggle - altera 

