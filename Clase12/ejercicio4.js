// Ejercicio 4: Ciclo For - Array 
// Crear un programa que permita registrar las notas de varios estudiantes 
// usando arrays y mostrarlas por pantalla: 
// 1. Crear un array para almacenar las notas. 
// 2. Define un array vacío llamado notas donde almacenaremos las notas 
// de los estudiantes. 
// 3. Pide al usuario que ingrese las notas de varios estudiantes una por una 
// utilizando el método prompt. 
// 4. Usa un bucle for para solicitar las notas y asignarlas directamente a 
// posiciones específicas del array notas. 
// 5. Imprime en consola las notas ingresadas usando el array notas.

const prompt = require ('prompt-sync')();
let notas = [];

let cantidadDeEstudiantes = parseFloat(prompt(`Ingrese la cantidad de estudiantes: `));

for (let i = 0; i < cantidadDeEstudiantes ; i++) {
    let nota = parseFloat(prompt(`Nota del estudiante ${i + 1}: `));
    notas[i] = nota; //Asignamos la nota ingresada al indice del array de NOTAS
    
}
//mostramos las notas ingrasadas
console.log('Las notas ingresadas son:');
for (let i = 0; i < notas.length; i ++){
    console.log(`Estudiante ${i + 1}: ${notas[i]}`);
    
}

