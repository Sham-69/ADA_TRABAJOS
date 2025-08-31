// Ejercicio 2: Do While 
// Escribe un programa que solicite al usuario ingresar una contraseña. Si la 
// contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese 
// la correcta. La contraseña correcta es "1234".

const prompt = require ('prompt-sync')();

const contraseña = "1234";
let usuario; // solo declaro la variable para utilizarla dentro del bucle

do {
    usuario = prompt('Ingrese la contraseña: ');  //LLamo a la variable y le asigno el valor
    if(usuario === contraseña){
        console.log('La contraseña es correcta');
        
    } else {
        console.log('La contraseña es incorrecta. Vuelve a intentarlo');
        
    }
        
    } while (usuario !== contraseña);
    