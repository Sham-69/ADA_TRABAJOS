// jercicio 5: Encuentra los números pares entre dos valores 
// Consigna: 
// Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El 
// programa debe mostrar todos los números pares que se encuentran entre esos 
// dos valores, incluyendo los límites si son pares. Utiliza un ciclo for para recorrer 
// los números entre el inicio y el fin. Si el número inicial es mayor que el final, el 
// programa debe mostrar un mensaje indicando que los valores son inválidos. 

const prompt = require ('prompt-sync')();

let inicio = parseInt(prompt('Ingrese un numero de inicio: '));
let final = parseInt(prompt('Ingrese um numero final: '));

if (inicio > final) {
    console.log('El numero inicial no puede ser mayor al numero final. Vuelva a intentar');
    
} else {
    console.log('Los numeros pares entre los numeros ingresados son: ');
    
    for (let contador = inicio; contador <= final; contador++) {
        if (contador %2 === 0) { //si contador es par
            console.log(contador); //muestra los pares
            
        }
    
} }