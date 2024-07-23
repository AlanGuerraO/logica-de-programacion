    /*
    * EJERCICIO:
    * - Crea ejemplos de funciones básicas que representen las diferentes
    *   posibilidades del lenguaje:
    *   Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
    * - Comprueba si puedes crear funciones dentro de funciones.
    * - Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
    * - Pon a prueba el concepto de variable LOCAL y GLOBAL.
    * - Debes hacer print por consola del resultado de todos los ejemplos.
    *   (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)
    */

//Funciones basicas
console.log("Funciones basicas");
console.log("--------------------------------");
//Funcion sin parametros
function funcionSinParametrosNiRetorno() {
    console.log("Hola mundo");
}

//Funcuiones con parametros
function funcionConUnParametrosSinRetorno(texto) {
    console.log(texto);
}
function funcionConParametrosSinRetorno(a,b) { //A estas funciones se les puede dar varios parametros.
    console.log(`Esta es la suma de ${a}+${b}: que es igual a: ${a+b}`);
}

//Funcion con retornos
function funcionConRetorno(a,b) {
    return a*b;
}

//Llamada a las funciones
funcionSinParametrosNiRetorno();
console.log("--------------------------------");
funcionConUnParametrosSinRetorno("Mariachi Mexico");
console.log("--------------------------------");
funcionConParametrosSinRetorno(2,3);
console.log("--------------------------------");
let resultado = funcionConRetorno(2,3);
console.log(`El resultado de la multiplicacion es: ${resultado}`);
console.log("--------------------------------");

//Funciones con recursividad
console.log("Funciones con recursividad");
function calcularFactorial(n) {
    if (n==0 || n==1) {
        return 1;
    } else {
        return n*calcularFactorial(n-1);
    }
}
console.log(`El factorial de 5 es: ${calcularFactorial(5)}`);
console.log("--------------------------------");

//Funciones anidades
console.log("Funciones anidadas");
console.log("--------------------------------");
function funcionExterna() {
    console.log("Este texto es de la primera funcion");
    function funcionInterna() {
        console.log("Este texto es de una funcion creada dentro de otra funcion");
    }
    funcionInterna();
}
funcionExterna();
console.log("--------------------------------");

//Funcion de flecha
console.log("Funcion de flecha");
let resta = (a,b) => a-b;
let resultadoResta = resta(10,8);
console.log(`El resultado de la resta de es: ${resultadoResta}`);
console.log("--------------------------------");

//Uso de funciones nativas
console.log("Uso de funciones nativas");
console.log("--------------------------------");
let numeroMayor = Math.max(1,44,764,3243,453,12);
console.log(`El mayor de los numeros es: ${numeroMayor}`);
let numeroAleatorioDecimal = Math.random();
console.log(`Genera un numero aleatorio decimal entre 0 y 1(excluido): ${numeroAleatorioDecimal}`);
let numeroAleatorio = Math.floor(Math.random()*10)+1;
console.log(`Genera un numero aleatorio entre 1 y 10, que es entero: ${numeroAleatorio}`);
console.log("--------------------------------");
// Haci como estas existen muchas mas, que se puede consultar en la documentacion de Mozilla.

//Concepto de variables locales y globales
let variableGlobal = "Hola soy una variable global";
function creaUnaVariableLocal() {
    let variableLocal = "Hola soy una variable local";
    return console.log(variableLocal);
}
console.log(variableGlobal);
creaUnaVariableLocal();
//Intentando imprimir una variable local
try {
    console.log(variableLocal);
} catch (error) {
    console.error(`Error, es una variable local`);
} finally{
    console.log("Intento de ejecucion de una variable local fuera de la funcion");
}

//Desafio extra
/* 
    * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
    * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
    *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
    *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
    *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
    *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
*/
function desafioExtra (texto1,texto2) {
    let contador = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(`El numero es: ${i}, y es multiplo de 3 y 5`);
            console.log(`${texto1} , ${texto2}`);
        } else if (i%3==0) {
            console.log(`El numero es: ${i}, y es multiplo de 3`);
            console.log(texto1);
        } else if (i%5==0) {
            console.log(`El numero es: ${i}, y es multiplo de 5`);
            console.log(texto2);
        } else {
            console.log(i);
            contador++;
        }
    }
    return contador;
}
desafioExtra("fuzz","buzz");