// Ejercicio 8: Encuentra los múltiplos de un número 
// Consigna: 
// Escribe un programa que le pida al usuario un número entero positivo y 
// muestre todos los múltiplos de ese número entre 1 y 100. Utiliza un ciclo for 
// para resolverlo. 

const prompt = require ('prompt-sync')();

let numero = parseInt(prompt('Ingrese un numero: '));

if (numero > 0) {  //si el numero es positivo
    console.log(`Los multiplos de ${numero} son: `);

    for (let contador = 1; contador <= 100; contador++) {
      if (contador % numero === 0){ 
        console.log(contador); 
        
      }

    }
    
    
}