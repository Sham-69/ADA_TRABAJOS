// Ejercicio 7: Matriz 5x5 
// Declara una variable que contenga una matriz de 5x5 llena de puros 
// números enteros y positivos. Luego, escribe un algoritmo para sumar todos 
// los números en la matriz.

let matriz = [
     [5, 4, 3, 2, 1],
     [1, 2, 3, 4, 5],
     [10, 9, 8, 7, 6],
     [15, 14, 13, 12, 11],
     [8, 5, 2, 6, 4]
];

let suma = 0;

for (let fila = 0; fila < matriz.length; fila++) {
    for (let columna = 0; columna < matriz[fila].length; columna++) {
       suma += matriz[fila][columna]
    }
    
}

console.log(`La suma de todos los numeros de la matriz es: ${suma}`);
