// Ejercicio 10: Adivina el número 
// Consigna: 
// Crea un programa donde la computadora seleccione un número al azar entre 1 
// y 10. 
// Luego, pide al usuario que adivine el número hasta 3 intentos. Si el usuario 
// acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén 
// los intentos restantes. Si no acierta después de los 3 intentos, muestra el 
// número secreto. Usa un for para resolver este ejercicio.

const prompt = require ('prompt-sync')();
let numeroAlAzar = Math.floor(Math.random() * 10 + 1);


for (let i = 3; i > 0 ; i--) {

    //creo la variable dentro del bucle para que el usuario tenga las tres oportunidades
    let numero = parseInt(prompt(`Adivine el numero del 1 al 10. Tienes ${i} oportunidades `));
    
    if (numero === numeroAlAzar) {
        console.log('Felicidades. Haz acertado');
        break;  // si se cumple la condicion detiene el bucle
    }
    else {
        console.log('Lo siento. No has acertado');
        
    }
    if ( i === 1){
        console.log(`Han pasado tus oportunidades. El numero era: ${numeroAlAzar} `);
        
    }
    }
