// Ejercicio 6: La tabla de multiplicar 
// Consigna: 
// Crea un programa que le pida al usuario un número y luego imprima su tabla de 
// multiplicar desde el 1 hasta el 10. Usa un ciclo for.

const prompt = require ('prompt-sync')();

let numero = parseInt(prompt('¿Que tabla desea imprimir? '));

for (let contador = 1; contador <= 10; contador++) {
        console.log(`${numero} * ${contador} = ${numero * contador}`);       
        
    }