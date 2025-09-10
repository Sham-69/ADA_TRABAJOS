// Ejercicio 9: Contar hasta un número 
// Crea una función declarada llamada contarHasta que reciba un número y 
// use un bucle para imprimir todos los números desde 1 hasta ese número. 

const prompt = require ('prompt-sync')();

let numero = parseInt(prompt('¿Hasta donde desea contar? '));

function contarHasta (n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
        
    }
}

contarHasta(numero);

