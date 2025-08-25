
// Ejercicio 4:  
// Declara una variable nombre y pide al usuario que ingrese su nombre. 
// Verifica si el nombre ingresado es igual a tu nombre. 

const prompt = require('prompt-sync')();

let nombre = prompt('Ingrese su nombre: ').toLowerCase();

if (nombre === 'yamila') {
    console.log('Yo tambien me llamo Yamila');
    
} else {
    console.log(`Hola ${nombre}`);
    
}