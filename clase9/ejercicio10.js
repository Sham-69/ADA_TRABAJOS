// Ejercicio 10:  
// Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la 
// semana correspondiente. Si el número no está dentro de ese rango, 
// muestra un mensaje de error.

const prompt = require ('prompt-sync')();

let numero = parseInt(prompt('Ingrese un numero de la semana: '));

if (numero === 1){
    console.log('Corresponde al dia lunes');
    
} else if (numero ===2){
    console.log('Corresponde al dia Martes');
    
} else if (numero === 3){
    console.log('Corresponde al dia Miercoles');
    
} else if (numero === 4 ){
    console.log('Corresponde al dia Jueves'); 

} else if (numero === 5){
    console.log('Corresponde al dia Viernes');

} else if (numero === 6){
    console.log('Corresponde al dia Sabado');

} else if (numero === 7){
    console.log('Corresponde al dia Domingo');    
} 
else {
    console.log('Error. Ingrese un numero del 1 al 7.');
    
}