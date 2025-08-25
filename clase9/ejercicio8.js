// Pide al usuario que ingrese las longitudes de los tres lados de un 
// triángulo. Determina y muestra si el triángulo es equilátero, isósceles o 
// escaleno. (Investiga sobre los triángulos para determinar la formula) 

const prompt = require('prompt-sync')();

let ladoA = parseFloat(prompt('Ingrese la longitud del lado A: '));
let ladoB = parseFloat(prompt('Ingrese la longitud del lado B: '));
let ladoC = parseFloat(prompt('Ingrese la longitud del lado C: '));

if (ladoA === ladoB && ladoB === ladoC) {
    console.log('Las longitudes equivalen a un triangulo equilatero');
    
} else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
    console.log('Las longitudes equivalen a un triangulo escaleno');
    
} else {
    console.log('Las longitudes equivalen a un triangulo isosceles');
    
}