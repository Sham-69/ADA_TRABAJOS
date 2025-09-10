// Ejercicio 8: Convertir grados Celsius a Fahrenheit (Ejercicio entrevista) 
// Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba 
// una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit. 

const prompt = require ('prompt-sync')();

let temperaturaEnCelsius = parseInt(prompt('Ingrese la temperatura en celsius: '));

let convertirCelsiusAFahrenheit = function (celsius) {
    return (celsius * 9 /5) + 32;
}

console.log('La temperatura en Fahrenheit es: ', convertirCelsiusAFahrenheit(temperaturaEnCelsius) );
