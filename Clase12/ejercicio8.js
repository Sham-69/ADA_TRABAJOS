// Ejercicio 8: Rojo y Verde 
// Para este ejercicio vamos a generar dos funciones: 
// a) Una va a sumar los valores en la diagonal marcada en rojo. 
// b) La otra va a marcar los valores de la diagonal marcada en verde. 
// Ambas funciones deben devolver un resultado único. Rojo: 505 
// Verde 505 
// IMPORTANTE: Para hacer este ejercicio, tendrán que investigar sobre el 
// método “push” en los Arrays. ¡Este método lo veremos en las próximas 
// clases, pero si desean pueden investigarlo para resolver este desafío!

let matriz = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81,82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
];

function sumaDiagonalRoja(matriz) {
    let suma = 0;
    let rojo = [];

    for (let i = 0; i < matriz.length; i++) {
        let valor = matriz[i][i];            //Accedo a los elementos de la diagonal (0,0), (1,1), (2,2) etc
        rojo.push(valor);  //agrego el elemento a rojo
        suma += valor;   //sumo el valor
        
    } 
    console.log(`Valores de la diagonal ROJA: ${rojo}`);
    console.log(`La suma de sus valores es: ${suma}`);
    
}


function sumarDiagonalVerde(matriz){
    let suma = 0;
    let verde = [];
    let longitud = matriz.length;  //Asigna la longitud de la matriz en este caso 10

    for (let i = 0; i < longitud; i++){
        let valor = matriz[i][longitud - 1 - i]; 
        // Accedo a la fila i y calculo el indide de la columna. La longitud 10 en CANTIDAD de indices seria 11 por eso le restamos 1
        
        verde.push(valor);
        suma += valor;

    }
    console.log(`Valores de la diagonal VERDE: ${verde}`);
    console.log(`La suma de sus valores es: ${suma}`);
    
}


sumaDiagonalRoja(matriz);
sumarDiagonalVerde(matriz)


// // Función para sumar la diagonal roja
// function sumaDiagonalRoja() {
//   let diagonalRoja = [];
//   let contador = 0;
//   for (let i = 0; i < 10; i++) {
//     let valor = 1 + i * 11;
//     diagonalRoja.push(valor);
//   }
//   for (let i = 0; i < diagonalRoja.length; i++) {
//     contador += diagonalRoja[i];
//   }
//   return contador;
// }

// // Función para sumar la diagonal verde
// function sumaDiagonalVerde() {
//   let diagonalVerde = [];
//   let contador = 0;
//   for (let i = 0; i < 10; i++) {
//     let valor = 10 + i * 9;
//     diagonalVerde.push(valor);
//   }
//   for (let i = 0; i < diagonalVerde.length; i++) {
//     contador += diagonalVerde[i];
//   }
//   return contador;
// }

// console.log("Rojo:", sumaDiagonalRoja(matriz)); // 505
// console.log("Verde:", sumaDiagonalVerde(matriz)); // 505