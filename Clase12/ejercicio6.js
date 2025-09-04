//  Iguales a 10 pero menores de 1000 
// Dada una matriz, recorrer sus valores y sumar solo los números que estén 
// por encima o sean iguales a 10, pero menores que 1000.

let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
];


let suma = 0;

for (let i = 0; i < matriz.length; i++) { // recorremos cada indice de la matriz
    for (let j = 0; j < matriz[i].length; j++) { //recorremos cada valor de el indice actual
      
        let valor = matriz[i][j]; // entramos al indice del array matriz y al valor del indice del array actual

        if (valor >= 10 && valor < 1000) {
            suma += valor;
        }
    }
    
}

console.log(suma);
