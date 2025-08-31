// Ejercicio 7: Calculadora simple 
// Consigna: 
// Crea un programa que le pida al usuario dos números y una operación 
// matemática a realizar: suma, resta, multiplicación o división. Según la operación 
// ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario 
// ingresa una operación inválida, el programa debe mostrar un mensaje de error. 
// Usa switch para resolverlo.

const prompt = require ('prompt-sync')();

let numero1 = parseInt(prompt('Ingrese un numero: '));
let numero2 = parseInt(prompt('Ingrese otro numero: '));
let operacion = prompt('Ingrese si desea sumar, restar, multiplicar o dividir: ').toLocaleLowerCase();

switch (operacion) {
    case "sumar":
        console.log(numero1 + numero2);
        
        break;

    case "restar":
        console.log(numero1 - numero2);
        
        break;

    case "multiplicar":
        console.log(numero1 * numero2);
        
        break;

    case "dividir":
        console.log(numero1 / numero2);
        
        break;
    
        
    default:
        console.log('Error. Por favor ingrese la operacion correctamente');
        
        break;
}