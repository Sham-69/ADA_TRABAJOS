// Ejercicio 4: ¿Es par o impar? 
// Consigna: 
// Los números pueden ser pares o impares. Escribe un programa que le pida al 
// usuario un número y determine si es par o impar. Muestra un mensaje 
// explicativo indicando qué significa cada caso.

const prompt = require ('prompt-sync')();

let numero = parseFloat(prompt('Ingrese un numero: '));

let esParOImpar = numero % 2 === 0 ? 'El numero ingresado es par' : 'El numero ingresado es impar';

console.log(esParOImpar);
