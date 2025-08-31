// Ejercicio 1: While 
// Crea un programa que solicite al usuario ingresar números continuamente 
// hasta que el usuario ingrese un número negativo. Luego, imprime la suma 
// de todos los números ingresados.

const prompt = require ('prompt-sync')();

let numero = parseInt(prompt('Ingrese un numero: '));
let suma = 0; //creo una variable y la inicializo en 0 para poder sumar los numeros ingresados

while (numero >= 0){
    suma += numero;

    numero = parseInt(prompt('Ingrese un numero: '))

}

console.log(`La suma de todos los numeros ingresados es: ${suma}`);

