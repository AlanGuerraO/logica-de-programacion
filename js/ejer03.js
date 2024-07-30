/*
* EJERCICIO:
* - Muestra ejemplos de creación de todas las estructuras soportadas por defecto
*   en tu lenguaje.
* - Utiliza operaciones de inserción, borrado, actualización y ordenación.
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

/*
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

let contactos = [
    {nombre: "Alan", numero: 9514056377},
    {nombre: "Gaby", numero: 9514056377},
    {nombre: "Beto", numero: 9514056377},
];

//Funcion de insercion
function añadirContacto() {
    let nombre = prompt("Dame el nombre del contacto");
    let numeroDeCelular = prompt("Dame el numero de celular");

    if (!/^\d{1,10}$/.test(numeroDeCelular)) { //Expresion regular, que velida que el numero proporcionado sean solo dijitos y que contenga 10 elementos.
        console.error("El numero debe de contener solo dijitos y no debe de ser mayor de 10 dijitos");
        return;
    }
    contactos.push({nombre: nombre,numero: numeroDeCelular}); // Añade al array un contacto con el metodo .push
    console.log(`Contacto añadido: ${nombre} - ${numeroDeCelular}`);
}

//Funcion de buscar
function buscarContactos() {
    let nombre = prompt("Dame el nombre del contacto que deseas buscar");
    let nombreBuscado = contactos.filter(contactos => contactos.nombre.toLowerCase().includes(nombre.toLowerCase())); //El metodo filter, crea un arrar nuevo, con todos los elementos que cumplan con el parametro establecido, en este caso añade los elementos que sean iguales a la cadena de texto ingresada por el usuario.

    //Si el array nuevo es mayor a 0, es decir que contiene algun elemento, entonces...
    if (nombreBuscado.length > 0) {
        console.log("Contactos Encontrados:");
        nombreBuscado.forEach(contactos => console.log(`Nombre: ${contactos.nombre} - ${contactos.numero}`)); //forEach, itera una vez por cada elemento del array, es decir que ejecutara la linea de comando por cada elemento del array.
    } else {
        console.error("No existe ningun contacto con ese nombre");
    }
}

//Funcion de atualizar
function actualizarContacto() {
    let nombre = prompt("Dame el nombre del contacto que vas a actualizar");
    let contactoaActualizar = contactos.find(contacto => contacto.nombre.toLowerCase() === nombre.toLowerCase()); //El metodo find, devuelve el primer elemento que cumpla con el parametro establecido, en este ejemplo devuelve el primer contacto con el numbre proporcionado por el usuario.
    if (contactoaActualizar) {
        let numeroNuevo = prompt("Dame el nuevo numero de telefono");
        // Validar que el número de teléfono sea numérico y tenga un máximo de 10 dígitos
        if (!/^\d{1,10}$/.test(numeroNuevo)) {
            console.error("El numero debe de contener solo digitos y no debe de ser mayor de 10 digitos");
            return;
        }
        contactoaActualizar.numero = numeroNuevo;
        console.log(`Contacto actualizado: ${contactoaActualizar.nombre} - ${contactoaActualizar.numero}`);
    } else {
        console.error("No tienes un contacto con ese nombre");
    }
}

// Funcion para eliminar
function eliminarContacto() {
    let nombre = prompt("Dame el nombre del contacto a eliminar");
    let contactoEliminado = contactos.findIndex(contacto => contacto.nombre.toLowerCase() === nombre.toLowerCase()); //El metodo findIndex, devuelve el numero de index del elemento dentro del array que cumpla con la condicion establecida.
    // En caso de que ningun elemento cumpla con la condicion, el findIndex, devuelve un -1.
    if (contactoEliminado != -1) {
        let eliminado = contactos.splice(contactoEliminado,1);
        console.log(`Contacto eliminado: ${eliminado[0].nombre} - ${eliminado[0].numero}`);
    } else {
        console.error("No se encontro un contacto con ese nombre.");
    }
}

// Fucion de mostrar contactos
function mostrarContactos() {
    if (contactos.length > 0) {
        console.log("Lista de contactos");
        contactos.forEach(contactos => console.log(`${contactos.nombre} - ${contactos.numero}`));
    } else {
        console.error("Tu agenda esta vacia.");
    }
}

// Inicio de la agenda
function inciarAgenda() {
    let salir = false;
    while (!salir) {
        let opcion = prompt(`¿Que deseas hacer el dia de hoy?...
            Menu de la agenda
            1.- Añadir contacto
            2.- Buscar contacto
            3.- Actualizar contacto
            4.- Eliminar contacto
            5.- Mostrar contactos
            6.- Salir`);
        opcion = parseInt(opcion);
        switch (opcion) {
            case 1:
                añadirContacto();
                break;
            case 2:
                buscarContactos();
                break;
            case 3:
                actualizarContacto();
                break;
            case 4:
                eliminarContacto();
                break;
            case 5:
                mostrarContactos();
                break;
            case 6:
                salir = true;
                console.log("Finalizando programa...");
                break;
            default:
                console.error("Opcion invalida.");
        }
    }
}

inciarAgenda();