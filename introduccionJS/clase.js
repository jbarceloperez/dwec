/****************************************
 *******   REPASO DE JAVASCRIPT   *******
 ****************************************/

// el punto y coma final, aunque prescindible, es recomendado
console.log("[0] Probando a loggear...")

// Comentario de línea única

/*
    Comentario
    de varias
    líneas
*/

/********************************
 ****** DECLARAR VARIABLES ******
 ********************************/
console.log("\t[1] Declarar Variables");
/*
    Se pueden declarar con let y var
      - let -> ámbito local (de bloque o función)
      - var -> ámbito "global" (el contexto de ejecución)
*/

{
    let miLet = "Esto es una variable declarada con let";
    console.log(miLet);

    var miVar = "Esto es una variable declarada con var";
    console.log(miVar);
}

console.log(miVar);
// console.log(miLet);      // DA ERROR, let queda sólo en el ambito del bloque de código

// realmente var no es una variable global, simplemente pertenece al scope en el que se declara, ya que
// podrían declararse varias variables con el mismo nombre en distintos scopes y serían distintas


// Modificar el valor de la variable

miVar = "Valor modificado";
console.log(miVar);


// También se pueden declarar constantes con const

const MI_CONSTANTE = "Esto es una constante";
console.log(MI_CONSTANTE);

// MI_CONSTANTE = "Ya no es constante?";    // DA ERROR, no se puede modificar el valor de una constante


/********************************
 ****** TIPOS DE VARIABLES ******
 ********************************/
 console.log("\t[2] Tipos de Variables");

////////  CADENAS DE CARACTERES (STRING)

let miCadena1 = "Esta cadena";
let miCadena2 = "es de ejemplo";

// los strings se pueden concatenar con el operador +
console.log(miCadena1 + " sí " + miCadena2);

// Si quiero añadir a una cadena una expresión u otra cadena sin tener que usar el operador +, se usa la
// expresión ${} y las comillas invertidas `` y lo que haya entre los corchetes se evalua y transforma en string.
let cadenaCompuesta = `Cadena completa: ${miCadena1} ${miCadena2} y 57*32 es ${57 * 32}.`;
console.log(cadenaCompuesta);

// en caso de querer usar caracteres reservados por el lenguaje en una cadena, hay que usar el caracter de escape: \
let miCadena3 = "Comillas dobles \", comillas simples \', salto de línea \n, tabulación \t, y el caracter de escape también escapa con \\";
console.log(miCadena3);

////////  TIPO NUMBER

// por debajo es un punto flotante, pero representa a cualquier número entero, decimal o exponencial
let miNumero = 19;
let miDecimal = 18.5;
let velocidadLuz = 3e8;  // m/s

// esto permite que se pueda operar entre ellos sin problema
console.log(miNumero + miDecimal + velocidadLuz);

// en JavaScript, existen dos valores peculiares para un lenguaje de programación:
// infinito:
console.log(miNumero / 0);  // al dividir entre 0 se obtiene infinito en vez de error

// Not a Number (NaN)
console.log(miNumero * "cadena de texto"); // no aplica, devuelve valor NaN

////////  TIPO BOOLEANO

let miBooleano; // puede tomar valor true o false

/**
 * VALORES BOOLEANOS DE DIFERENTES TIPOS DE DATOS
 *  - Number: 0 false, otro true
 *  - String: ""(cadena vacía) false, otro true
 *  - undefined y null: false
 *  - infinity: true
 *  - NaN: false
 */

//////// TIPOS UNDEFINED Y NULL -> ausencia de valor

// null representa la ausencia de valor porque así lo ha decidido el programador
let sinValor = null;

// no se debe asignar undefined, porque representa la ausencia de valor porque aún no se ha definido o el valor o incluso la variable
// undefined es cosa del propio lenguaje.

//////// CONVERSIÓN DE TIPOS

// JavaScript es débilmente tipado, por lo que los tipos se interpretan automáticamente
// Esto puede llevar a confusión al operar las variables, ya que (por ejemplo) podemos 
// querer sumar dos números, pero que sean interpretados como cadenas y en vez de sumarse se concatenen como strings.
// Para forzar un tipo (casting) se añade el tipo previamente al valor
let var1 = 3.12;
let var2 = "5";

console.log(`3.12 + "5" = ${var1+Number(var2)}`);  
console.log(`"67" + 11 = ${Number("67")+11}`);

/********************************************
 ****** ENTRADA Y SALIDA DEL NAVEGADOR ******
 ********************************************/
 console.log("\t[3] E/S del navegador");


// Para la salida por consola existen 4 niveles de depuración:
console.log("Versión LOG de un mensaje por consola");
console.info("Versión INFO de un mensaje por consola");
console.warn("Versión WARN de un mensaje por consola");
console.error("Versión ERROR de un mensaje por consola");

// Existen 3 tipos de mensajes de cuadro de diálogo (sólo funcionan en navegador, no en node)

// confirm salta un cuadro de diálogo con dos opciones, aceptar o cancelar.
// Devuelve true si se pulsa Aceptar, y false si se pulsa Cancelar.
let respuesta = confirm("¿Aceptar o cancelar?");
console.log(`Respuesta del confirm: ${respuesta}.`);

// prompt salta un cuadro de diálogo con un cuadro de texto.
// Guarda en la variable un string con lo introducido en el cuadro de texto,
// y si se pulsa cancelar se guardará null. Se puede añadir texto por defecto como segundo parámetro.
let datos = prompt("Introduzca los datos:", "Texto por defecto (opcional)");
console.log(`Datos introducidos: ${datos}.`);

// alert simplemente muestra algun mensaje informativo, no obtiene
// ningún input del usuario.
alert("¡¡Alerta!!");

/************************
 ****** OPERADORES ******
 ************************/

 console.log("\t[4] OPERADORES");

// Operadores de Asignación
console.log("\n--- Operadores de Asignación ---");
let x = 10; // Asignamos el valor 10 a la variable x
console.log("Asignación: x =", x);
x += 5; // Equivale a x = x + 5
console.log("Asignación con suma (x += 5):", x);
x -= 3; // Equivale a x = x - 3
console.log("Asignación con resta (x -= 3):", x);
x *= 2; // Equivale a x = x * 2
console.log("Asignación con multiplicación (x *= 2):", x);
x /= 4; // Equivale a x = x / 4
console.log("Asignación con división (x /= 4):", x);
x %= 3; // Equivale a x = x % 3
console.log("Asignación con módulo (x %= 3):", x);

// Operadores Aritméticos
console.log("\n--- Operadores Aritméticos ---");
let a = 7;
let b = 3;
console.log("Suma (a + b):", a + b);
console.log("Resta (a - b):", a - b);
console.log("Multiplicación (a * b):", a * b);
console.log("División (a / b):", a / b);
console.log("Módulo (a % b):", a % b);
console.log("Exponenciación (a ** b):", a ** b);
console.log("Incremento (a++):", a++); // devuelve el valor antes de incrementar
console.log("Valor de a tras incremento:", a); // ahora a vale 8
console.log("Decremento (b--):", b--); // devuelve el valor antes de decrementar
console.log("Valor de b tras decremento:", b); // ahora b vale 2

// Operadores de Comparación
a = 5;
b = '5'; // string
console.log("\n--- Operadores de Comparación ---");
console.log("Igualdad (a == b):", a == b); // true si son iguales en valor
console.log("Desigualdad (a != b):", a != b); // true si son distintos en valor
console.log("Estrictamente igual (a === b):", a === b); // true si son iguales en valor y tipo
console.log("Estrictamente distinto (a !== b):", a !== b); // true si son distintos en valor o tipo
console.log("Mayor que (a > b):", a > b);   // true si a es mayor que b
console.log("Menor que (a < b):", a < b);  // true si a es menor que b
console.log("Mayor o igual que (a >= b):", a >= b); // true si a es mayor o igual que b
console.log("Menor o igual que (a <= b):", a <= b); // true si a es menor o igual que b

// Operadores Lógicos
console.log("\n--- Operadores Lógicos ---");
const c = true;
const d = true;
console.log("AND lógico (c && d):", c && d); // true si ambos son true
console.log("OR lógico (c || d):", c || d); // true si al menos uno es true
console.log("XOR lógico (c ^ d):", c ^ d); // true si uno es true y el otro false
console.log("NOT lógico (!c):", !c); // Invierte el valor lógico

// Operador Ternario: asigna el valor correspondiente según la evaluación de una condición
console.log("\n--- Operador Ternario ---");
let edad = 20;
// condición ? valor_si_verdadero : valor_si_falso
let esMayor = (edad >= 18) ? true : false;
console.log("¿Es mayor de edad?:", esMayor);

/************************************
 ****** ESTRUCTURAS DE CONTROL ******
 ************************************/
 console.log("\t[5] Estructuras de control");

// Condicional if-else
console.log("\n--- if-else ---");
const EDAD = 20;
if (EDAD >= 18) 
{
    console.log("Eres mayor de edad.");
} 
else 
{
    console.log("Eres menor de edad.");
}

// Condicional if-else if-else
const nota = 55;
if (nota >= 90) {
    console.log("Tu calificación es A.");
} else if (nota >= 80) {
    console.log("Tu calificación es B.");
} else if (nota >= 70) {
    console.log("Tu calificación es C.");
} else {
    console.log("Tu calificación es F.");
}
// Esta estructura tiende a generar código poco legible, se desaconseja
// usar más de dos o tres if-else de esta manera. Para eso está la siguiente
// estructura de cotrol: el switch
console.log("\n--- switch ---");
const diaSemana = 3; // 1 = Lunes, 2 = Martes, ..., 7 = Domingo
switch (diaSemana) {
    case 1:
        console.log("Hoy es Lunes.");
        break;
    case 2:
        console.log("Hoy es Martes.");
        break;
    case 3:
        console.log("Hoy es Miércoles.");
        break;
    case 4:
        console.log("Hoy es Jueves.");
        break;
    case 5:
        console.log("Hoy es Viernes.");
        break;
    case 6:
        console.log("Hoy es Sábado.");
        break;
    case 7:
        console.log("Hoy es Domingo.");
        break;
    default:    // bloque de código que se ejecuta si no hay ningun caso para el valor de la variable
        console.log("Número de día no válido.");
}

// Ciclo while
console.log("\n--- while ---");
let contador = 0;
while (contador < 5) {
    contador++;
    console.log("Contador (while):", contador);
}

// Ciclo do-while
console.log("\n--- do-while ---");
contador = 0;
do {
    contador++;
    console.log("Contador (do-while):", contador);
} while (contador < 5);

// Se observa la diferencia entre while y do-while en la salida de
// los contadores. En el while primero se comprueba la condición y después 
// se ejecuta la iteración, mientras que en el do-while se comprueba tras la
// ejecución de la iteración del bucle.

// Ciclo for
console.log("\n--- for ---");
for (let miIndice = 0; miIndice < 10; miIndice++)
    {
        // en este caso, si el número es divisible entre 2 (o sea, si es par) continua a la siguiente iteración, sin ejecutar la actual.
        if ((miIndice % 2) == 0) continue;      // continue se utiliza como condición detener UNA ITERACIÓN de un bucle (continua con la siguiente)
        console.log(miIndice);
        if(miIndice == 7) break;                // break se utiliza para detener EL BUCLE COMPLETO
    }


// document.write("Código escrito desde el fichero mi_codigo.js");
//Esto está deprecated, no se debe usar document.write sino manipular el DOM
    




