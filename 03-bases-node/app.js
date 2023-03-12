const { multiplicar, allTablasMutiplicar } = require('./helpers/multiplicar');
const argv = require('./config/yargs')


const color = require('colors');
console.clear(); 

let {b,l,h} = argv;

// allTablasMutiplicar(b,l,h);

console.log(multiplicar(b,l,h)) 


