// Ejercicio 5: Uso de Arrays y Condicionales 
// Crea un programa que solicite al usuario ingresar 5 nombres y los 
// almacene en un array. Luego, solicita al usuario ingresar un nombre y 
// verifica si ese nombre se encuentra en el array. (Pueden desglosar en 
// pasos el código si eso les facilita su desarollo

const prompt = require('prompt-sync')();

let nombres = [];

for (let i = 0; i < 5; i++) {
    let ingresarNombre = prompt('Ingrese el nombre que desea guardar: ').toLowerCase();
    nombres[i] = ingresarNombre;

}

let buscarNombre = prompt('Ingrese el nombre que desea buscar: ').toLowerCase();

let encontrado = false; //creo una variable y le doy como valor false
for (let i = 0; i < 5; i++) { //itero sobre los 5 elementos
    if (nombres[i] === buscarNombre) {  //si nombres en el indice i es igual a buscarNombres
        encontrado = true;  //cambia el valor de encontrado a true
        break; // corto el bucle
        
    }
    
}

if (encontrado) { //si el valor de encontrado es true
    console.log('El nombre se encuentra en la lista');
    
} else { 
    console.log('El nombre no se encuentra en la lista');
    
}