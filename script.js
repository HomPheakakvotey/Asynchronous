'use strict'

// normal function

// function sayHello() {
//     console.log('Hello');
//     return 'Hello Everyone.'
    
// }
// const txt = sayHello();
// console.log(txt);

// const sum = b => 10 + b;
// console.log(sum(30));

// const sum = (a, b) => a + b;
// console.log(sum(20, 50));

// const sum = () => 10 + 20;
// console.log(sum());

// const sum = (b, ...a) => {
//     console.log("a : ", a);
//     console.log("b : ",b)
// }
// console.log(sum(10, 20, 30, 40, 50))

// const sum = (b, ...a) => {
//     let total = 0;
//     for ( let i = 0; i < a.length; i++){
//         total += a[i];
//     }
//     return total;
// }
// console.log(sum(10, 20, 30, 40, 50));

/*
// copy array : so that we don't make the original array broken

const scores = [10, 20, 30, 40, 50];

// slice
const copyScore1 = scores.slice(); 
console.log(copyScore1);

// from function
const copyScore2 = Array.from(scores);
console.log(copyScore2);

// spread operator
const copyScore3 = [...scores];
console.log(copyScore3);
*/

/*
// Destructuring obj

const products = {
    id : 1,
    name : "Pen",
    price : 1.2,
    stock : 10,
};

const{id, name, price, stock} = products;
console.log(products.id);
console.log("id = "+id);
console.log("name = "+name);
console.log("price = "+price);
console.log("stock = "+stock);

const printReceipt = ({id, name, price,stock}) => {
    console.log(`id = ${id}`);
    console.log(`name = ${name}`);
    console.log(`price = ${price}`);
    console.log(`stock = ${stock}`);
};
printReceipt(products);

// Destructuring array

const priceList = [10, 20, 30, 40, 50];
console.log(priceList[0]);
console.log(priceList.at(0));
const [,,price3,price4,price5] = priceList;
console.log(price3,price4,price5);
// const [price1,price2,...rest] = priceList;
// console.log(price1,price2,...rest);
*/










