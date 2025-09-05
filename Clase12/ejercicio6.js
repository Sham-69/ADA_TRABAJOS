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

for (let fila = 0; fila < matriz.length; fila++) { // recorremos cada indice(fila) de la matriz
    for (let columna = 0; columna < matriz[fila].length; columna++) { //recorremos cada VALOR de el indice(columna) actual
      
        let valor = matriz[fila][columna];   // asignamos a una variable el valor de cada iteracion
        if (valor >= 10 && valor < 1000) {   //verificamos 
            suma += valor;                   //sumamos y almacenamos
        }
    }
    
}

console.log(`La suma de los valores que hay de 10 a 1000 es: ${suma}`);
