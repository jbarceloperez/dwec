import * as er from "./errores.js";
import { areaCirculo, areaRectangulo, pi } from "./libreriaMat.js";

// 1. CREACIÓN Y LANZAMIENTO DE ERRORES

// Puedes crear un error manualmente usando el constructor Error
let customError = new Error("Este es un error personalizado.");
console.log("Nombre del error:", customError.name);  // Propiedad "name"
console.log("Mensaje del error:", customError.message);  // Propiedad "message"


// Ejemplo de lanzamiento explícito de un error
function dividir(a, b) {
    if (b === 0) {
        throw new er.DividirPor0Exception("No se puede dividir por cero.");
    }
    return a / b;
}
// dividir(10,0);


// 2. MANEJO DE EXCEPCIONES CON try/catch

try {
    let resultado = dividir(10, 0); // Provocará un error
    console.log("Resultado:", resultado);
} catch (error) {
    console.error(error.name, "> Se ha producido un error:", error.message);
}

console.log("El programa continúa ejecutándose después del manejo del error.");


function procesarTexto(texto) {
    try {
        // Simulamos una operación que puede fallar
        if (typeof texto !== "string") {
            throw new TypeError("Se esperaba un string.");
        }
        console.log("Texto en mayúsculas:", texto.toUpperCase());
    } catch (error) {
        console.error("Error atrapado:", error.name, "-", error.message);
    }
}

procesarTexto(123);  // Provoca una excepción TypeError
procesarTexto("Hola, mundo!"); // Funciona correctamente


// try/catch/finally


function leerArchivo() {
    try {
        console.log("Intentando leer archivo...");
        // throw new Error("Archivo no encontrado.");
        console.log("se ha leido el archivo");
    } catch (error) {
        console.error("Error durante la lectura:", error.message);
    } finally {
        console.log("Operación finalizada. Recurso cerrado.");
    }
}

leerArchivo();


// MODO ESTRICTO ("strict mode")


/*
El modo estricto (strict mode) ayuda a escribir un código más seguro y libre de errores.
Prohíbe ciertas malas prácticas y lanza errores donde antes simplemente se ignoraban.
*/
{
    'use strict';  // Activa el modo estricto para este bloque de código

    // Sin modo estricto, declarar variables sin "let", "const" o "var" es válido
    // Con strict mode, provoca un error
    cadena = "10"; // ReferenceError: x is not defined
        

}


// Algunos de los errores concretos de JavaScript:

// RangeError: Se produce cuando un valor está fuera del rango permitido.
try {
    let arr = new Array(-1); // No puede tener tamaño negativo
} catch (error) {
    if (error instanceof RangeError) {
        console.error("Se ha producido un RangeError:", error.message);
    }
}

// ReferenceError: Aparece cuando se intenta acceder a una variable no definida.
try {
    console.log(variableInexistente);
} catch (error) {
    if (error instanceof ReferenceError) {
        console.error("Se ha producido un ReferenceError:", error.message);
    }
}

// SyntaxError: Ocurre cuando el código tiene un error de sintaxis.
try {
    eval("if true { console.log('Error de sintaxis'); }"); // Falta paréntesis
} catch (error) {
    if (error instanceof SyntaxError) {
        console.error("Se ha producido un SyntaxError:", error.message);
    }
}

// TypeError: Surge cuando una operación se aplica a un tipo de dato incorrecto.
try {
    let num = 5;
    num.toUpperCase(); // No tiene sentido usar toUpperCase en un número
} catch (error) {
    if (error instanceof TypeError) {
        console.error("Se ha producido un TypeError:", error.message);
    }
}

// se puede usar instanceof para detectar el tipo de error en un try/catch
function manejarErrores() {
    try {
        // Lanza un error personalizado
        throw new RangeError("mensaje personalizado");
    } catch (error) {
        if (error instanceof RangeError) {
            console.error("Manejando RangeError:", error.message);
        } else if (error instanceof ReferenceError) {
            console.error("Manejando ReferenceError:", error.message);
        } else {
            console.error("Otro tipo de error:", error.message);
        }
    }
}

manejarErrores();


// -----------------------------
// 5. Creación personalizada de excepciones y módulos
// -----------------------------


try {
    throw new er.MiExcepcion("Este es un error personalizado.");
} catch (error) {
    console.error(`Capturado: ${error.name} - ${error.message}`);
}



//////////////////
console.log("MATEMATICAS");

let radio1 = 1;
let radio2 = 15;
console.log(areaCirculo(radio1));
console.log(areaCirculo(radio2));
console.log(areaRectangulo(10,5));

let miPi = pi;
