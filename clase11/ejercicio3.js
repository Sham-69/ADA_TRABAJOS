// Ejercicio 3: ¿Sabes contar? 
// Consigna: 
// Crea un programa que le pida al usuario un número positivo. 
// El programa deberá contar desde el 1 hasta ese número e imprimir cada valor en la consola. 
// Usa un ciclo for para realizar la tarea.

const prompt= require ('prompt-sync')();

let numero = parseFloat(prompt('Ingrese un numero positivo: '));

for (let contador = 1; contador <= numero; contador++) {
   console.log(contador);
   
}

