/*
* EJERCICIO:
* - Muestra ejemplos de creación de todas las estructuras soportadas por defecto
*   en tu lenguaje.
* - Utiliza operaciones de inserción, borrado, actualización y ordenación.

* DIFICULTAD EXTRA (opcional):
* Crea una agenda de contactos por terminal.
* - Debes implementar funcionalidades de búsqueda, inserción, actualización
*   y eliminación de contactos.
* - Cada contacto debe tener un nombre y un número de teléfono.
* - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
*   y a continuación los datos necesarios para llevarla a cabo.
* - El programa no puede dejar introducir números de teléfono no númericos y con más
*   de 11 dígitos (o el número de dígitos que quieras).
* - También se debe proponer una operación de finalización del programa.
*/

//Arrays

// Creacion/implementacion
let array = [1,2,3,4];

// Inserccion
array.push(5) //Añade un elemento al final.
array.unshift(0) //Añade un elemento al inicio.
console.log(`Array despues de añadirle: ${array}`);

// Eliminacion
array.pop(); //Elimina el ultimo elemento.
array.shift(); //Elimina el primer elemento.
console.log(`Array despues de elimir: ${array}`);

// Actualizacion
array[1] = 5; //Actualiza conforme el numero de indice.
console.log(`Array despues de actualizar: ${array}`);

// Ordenamiento
array.sort(); //Ordena el array alfabeticamente/numericamente.
console.log(`Array despues de ordenar: ${array}`);

//Añade multiples elementos 
array.splice(4,0,100,200,6,7); //Sintaxis del splice(): 1.- Num. Indice, 2.-Cantidad de elementos a eliminar (Si se omite, se eliminaran todos los elementos a partir del numero del indice), 3.- Elementos a ingresar (elem1,elem2...elemN).
console.log(`Array despues de añadirle multiples elementos: ${array}`);

//Borrra multiples elementos
array.splice(4,2);
console.log(`Array despues de eliminar multiples elementos: ${array}`);

//Objetos

// Creacion / Implementacion
let objeto = {
    nombre: "carro",
    tamaño: 1.2,
};

//Inserccion
objeto.color = "Azul"; //Añade el elemento color.
console.log('objeto despues de añadirle el color:',objeto);

//eliminacion
delete objeto.tamaño; //
console.log('objeto despues de eliminar el tamaño',objeto);

//Actualizacion
objeto.color = "Rojo";
console.log('objeto despues de cambiar el color:',objeto);

//Ordena un arrays de objetos
let arrayDeObjetos = [
    {modelo: "Sentra", año: 2011},
    {modelo: "Tsuru", año: 2004},
    {modelo: "Aveo", año: 2013}
]
arrayDeObjetos.sort((a,b)=>a.modelo.localeCompare(b.modelo)); //Ordena el array por modelo(strings)
// arrayDeObjetos.sort((a,b) => a.año - b.año); Ordena por año (numericos)
console.log("Arrays de objetos ordenado: ",arrayDeObjetos);
