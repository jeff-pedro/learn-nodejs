const Square = require('./square.js')
const path = require('path')

console.log(module.children);


const mySquare = new Square(2);

console.log(`The area of my square is ${mySquare.area()}`);
