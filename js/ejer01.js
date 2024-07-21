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
console.log(`Suma (+): ${a+b}`);
console.log(`Resta (-) ${a-b}`);
console.log(`Multiplicacion (*) ${a*b}`);
console.log(`Divicion (/) ${a/b}`);
console.log(`Residuo (%) ${a%b}`);
console.log(`Exponencializar (**) ${a**b}`);
console.log("--------------------------------");

//Operadores de comparacion
console.log("Operadores de comparacion:");
console.log(`Igualdad debil (==) a==b ${a==b}`); //false (Compara solo que los valores sean iguales).
console.log(`Igualdad estricta (===) a===b ${a===b}`); //False (Ademas de comparar que los valores sean iguales, compara que sean del mismo tipo).
console.log(`Diferente (!=) a!=b ${a!=b}`); //true
console.log(`Mayor que (>) a>b ${a>b}`); //true
console.log(`Menor que (<) a<b ${a<b}`); //false
console.log(`Mayor ó igual (>=) a>=b ${a>=b}`); //true
console.log(`Menor ó igual (<=) a<=b ${a<=b}`); //false
console.log("--------------------------------");

// Operadores de asignacion
console.log("Operadores de asignacion:");