    /* EJERCICIO:
    * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
    *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
    *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
    * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
    *   que representen todos los tipos de estructuras de control que existan
    *   en tu lenguaje:
    *   Condicionales, iterativas, excepciones...
    * - Debes hacer print por consola del resultado de todos los ejemplos.
    *
    * DIFICULTAD EXTRA (opcional):
    * Crea un programa que imprima por consola todos los números comprendidos
    * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3. */

let a = 10;
let b = 5;
// Impresion de las variables
console.log(`Variable uno: ${a}`);
console.log(`Variable dos: ${b}`);
console.log("--------------------------------");

// Operadors aritmeticos
console.log("Operadores aritmeticos:");
console.log(`Suma (+): ${a+b}`); //15
console.log(`Resta (-) ${a-b}`); //5
console.log(`Multiplicacion (*) ${a*b}`); //50
console.log(`Divicion (/) ${a/b}`); //2
console.log(`Residuo (%) ${a%b}`); //0
console.log(`Exponencializar (**) ${a**b}`); //100,000
console.log("--------------------------------");

// Operadores de asignacion
console.log("Operadores de asignacion:");
a += 10; // e = e + 10
console.log("Asignación suma:", a); // 20
a -= 5; // e = e - 5
console.log("Asignación resta:", a); // 15
a *= 2; // e = e * 2
console.log("Asignación multiplicación:", a); // 30
a /= 5; // e = e / 5
console.log("Asignación división:", a); // 6
a %= 3; // e = e % 3
console.log("Asignación módulo:", a); // 0
console.log("--------------------------------");

//Operadores de comparacion
a=10;
console.log("Operadores de comparacion:");
console.log(`Igualdad debil (==) a==b ${a==b}`); //false (Compara solo que los valores sean iguales).
console.log(`Igualdad estricta (===) a===b ${a===b}`); //False (Ademas de comparar que los valores sean iguales, compara que sean del mismo tipo).
console.log(`Diferente (!=) a!=b ${a!=b}`); //true
console.log(`Mayor que (>) a>b ${a>b}`); //true
console.log(`Menor que (<) a<b ${a<b}`); //false
console.log(`Mayor ó igual (>=) a>=b ${a>=b}`); //true
console.log(`Menor ó igual (<=) a<=b ${a<=b}`); //false
console.log("--------------------------------");

//operadores de identidad
console.log("Operadores de indentidad (===)");
console.log(`Tipo y valor igual ${a===10}`); //true
console.log(`Tipo y valor diferente ${a==='10'}`); //false
console.log("--------------------------------");

//Operadores a nivel de bits
console.log("Operadores a nivel de bits");
let f = 5; // 0101 en binario
let g = 3; // 0011 en binario
console.log("AND bit a bit:", f & g); // 1 (0001)
console.log("OR bit a bit:", f | g); // 7 (0111)
console.log("XOR bit a bit:", f ^ g); // 6 (0110)
console.log("NOT bit a bit:", ~f); // -6 (1010)
console.log("Desplazamiento a la izquierda:", f << 1); // 10 (1010)
console.log("Desplazamiento a la derecha:", f >> 1); // 2 (0010)
console.log("--------------------------------");

//Operadores logicos
console.log("Operadores logicos");
let c = true;
let d = false;
console.log("AND:", c && d); // false
console.log("OR:", c || d); // true
console.log("NOT:", !c); // false
console.log("--------------------------------");

// Operadores de pertenencia (in)
console.log("Operadores de pertenencia (in e includes");
let obj = { name: "Alan", age: 25 };
let array = [1,2,3,4];
console.log(`name in obj ${'name' in obj}`); // true
console.log(`heigt in obj ${'heigt' in obj}`); // false
console.log(`1 include array ${array.includes(1)}`); //true
console.log(`8 includes array ${array.includes(8)}`); //false
console.log("--------------------------------");

//Tipos de estructuras de control
//Condicional if-else
console.log("Condicional if-else");
if (a>5) {
    console.log("El numero es mayor a 5");
} else {
    console.log("El numero es menor a 5")
}
console.log("--------------------------------");

//Condicional switch
console.log("Condicional Switch");
let day = 2;
switch (day) {
    case 1:
        console.log("Lunes")
        break;
    case 2:
        console.log("Martes");
        break;
    default:
        console.log("Es otro dia");
        break;
}
console.log("--------------------------------");

//Bucle for
console.log("Bucle for");
//imprime la tabla d multiplicar del 2
for (let i = 1, j = 2; i <= 10; i++) {
    console.log(`${j} * ${i} = ${j * i}`);
}
console.log("--------------------------------");

//Bucle while
console.log("Bucle while");
let contador=0
while (contador<=5) {
    console.log(`linea numero: ${contador}`);
    contador++;
}
console.log("--------------------------------");

//Bucle do-while
console.log(`Bucle do-while`);
contador=0;
do {
    console.log(`lista de do-while: ${contador}`);
    contador++;
} while (contador<=5);
console.log("--------------------------------");

//Manejo de excepciones
console.log("Manejo de excepciones");
function divide(a, b) {
    if (b === 0) {
        throw new Error("División por cero no permitida"); //Funciona para lanzar cualquier dato como una excepcion.
    }
    return a / b;
}

try { //Si no existe ninguna excepcion se ejecuta este codigo
    let result = divide(10, 5);
    let result2 = divide(10,0);
    console.log(result);
} catch (error) { //Si tiene un excepcion se ejecuta este codigo
    console.error("Ocurrió un error:", error.message);
} finally { //Este codigo se ejecutara si o si
    console.log("Operación de división completada");
}
console.log("--------------------------------");

//Extra
console.log("Dificultad extra:");
for (let l = 10; l <= 55; l++) {
    if (l % 2 == 0 && l !== 16 && l % 3 !== 0) {
        console.log(l);
    }
}