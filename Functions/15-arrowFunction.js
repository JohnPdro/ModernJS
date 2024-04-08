// regular function
// const clacArea = function(radius){
//     return 3.14 * radius**2;
// }

//arrow function
const clacArea = radius => 3.14 * radius**2;

const area = clacArea(5);
console.log('area is:', area);



// practise arrow functions

// const greet = function(){   ----> Regular function
//     return 'hello, world';
// };

// const greet = () => 'hello, world';  ----> Arrow function
// const result = greet();
// console.log(result);

// const bill = function(products, tax){  ----> Regular function
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

const bill = (products, tax) => { // ----> Arrow function
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(bill([10, 15, 30], 0.2));
