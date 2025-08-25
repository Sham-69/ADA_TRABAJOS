// Ejercicio 5: 
// Escribe un programa que pida al usuario que ingrese tres números y 
// // determine cuál es el mayor de los tres.

const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt('Ingrese un numero: '));
let numero2 = parseFloat(prompt('Ingrese otro numero: '));
let numero3 = parseFloat(prompt('Ingrese un ultimo numero: '));

if (numero1 > numero2 && numero1 > numero3) {
    console.log(`${numero1} es mayor`);
    
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log(`${numero2} es mayor`)
} else {
    console.log(`${numero3} es el mayor`);
    
}