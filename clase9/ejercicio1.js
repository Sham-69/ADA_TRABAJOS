// Actividades: 
//  Ejercicio 1:  
// Declara dos variables numéricas numero1 y numero2. Pide al usuario 
// que ingrese dos números y muestra cuál es mayor o si son iguales.

const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt('Ingrese un numero: '));
let numero2 = parseFloat(prompt('Ingrese otro numero: '));

if (numero1 > numero2) {
    console.log(`${numero1} es mayor a ${numero2}`);
    
} else if (numero2 == numero1) {
    console.log(`Los numeros ingresados son iguales`);
    
} else (
    console.log(`${numero2} es mayor a ${numero1}`)
    
)

