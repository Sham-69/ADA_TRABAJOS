// Ejercicio 9:  
// Define una constante PI con el valor de pi (3.14159).
// Pide al usuario 
// que ingrese el radio de un círculo y calcula su área y perímetro 
// utilizando la constante PI. 

const prompt = require ('prompt-sync')();

const PI = 3.14159;

let radio = parseFloat(prompt('Ingrese el radio del circulo qe desea calcular: '));

let perimetro = 2* PI * radio;

let area = PI * radio**2

console.log(`El perimetro del circulo es de ${perimetro} y el area es de ${area}`);
