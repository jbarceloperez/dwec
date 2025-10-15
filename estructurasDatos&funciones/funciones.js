// ==============================
// FUNCIONES EN JAVASCRIPT
// ==============================

console.log("=== FUNCIONES EN JAVASCRIPT ===");

// 1. Definición e Invocación de Funciones
console.log("\n--- Definición e Invocación de Funciones ---");

// Definición de una función simple
function saludar() {
    console.log("Saludos, programador!");
}

// Invocación de la función
saludar();

// Función con parámetros
function sumar(a, b) {
    console.log(`La suma de ${a} y ${b} es:`, a + b);
}

// Invocación con argumentos
sumar(5, 7);

// 2. Valores de Retorno
console.log("\n--- Valores de Retorno ---");

function multiplicar(a, b) {
    return a * b; // Devuelve el resultado de la multiplicación
}

const resultado = multiplicar(4, 3);
console.log("Resultado de multiplicar 4 y 3:", resultado);

// 3. Ámbito de las Variables
console.log("\n--- Ámbito de las Variables ---");

let variableGlobal = "Soy global"; // Variable global
let mensaje = "Valor fuera de la función";

function mostrarAmbito() {
    let variableLocal = "Soy local"; // Variable local
    let mensaje = "Valor dentro de la función"; // Variable "mensaje" de ámbito local
    console.log("Dentro de la función:", variableGlobal);
    console.log("Dentro de la función:", variableLocal);
    console.log(mensaje);   // Se imprime la variable local, no la global
}

mostrarAmbito();
// console.log(variableLocal);  // Esto dará error porque la variableLocal no es accesible fuera de la función
console.log(mensaje);           // La variable de ámbito global mensaje sigue teniendo el mismo valor aun habiendo sido redefinida localmente en la función.

// 4. Parámetros (Por Valor y Por Referencia)
console.log("\n--- Parámetros (Por Valor, Por Referencia, Por Defecto y Variables) ---");

// Parámetros por valor
function menor(a,b) {
    // a = 10;
    // b = 15;      
    let numeroMenor = a;
    if (b < a) {
        numeroMenor = b;
    }
    return numeroMenor;
}

let num1 = 5;
let num2 = 4;
console.log(menor(num1, num2));
console.log(`Los números ${num1} y ${num2} no varían.`);
// Aunque se modifiquen los valores dentro, el valor de la variable fuera de la función no cambia.

// Parámetros por referencia
let vector = [6,2,9,5,3];
function menorArray(array) {
    let numeroMenor = array[0];
    let posicion = 0;
    for (let i=0; i<array.length; i++) {
        if (array[i] < numeroMenor) {
            numeroMenor = array[i];
            posicion = i;
        }
    }
    array[posicion] = null;
    return numeroMenor;
}

console.log(`El número menor del vector es el ${menorArray(vector)}.`);
console.log(vector);

function cambiarObjeto(objeto) {
    objeto.nombre = "Nuevo Nombre"; // Cambiamos una propiedad del objeto
    console.log("Dentro de la función (por referencia):", objeto);
}

let persona = { nombre: "Juan", edad: 25 };
cambiarObjeto(persona);
console.log("Fuera de la función (por referencia):", persona); // El objeto original se modifica

// se pueden añadir parámetros por defecto
function dividir(numerador, denominador=1) {
    return numerador/denominador;
}

console.log(`dividir(4) = ${dividir(4)}`);      // asume que el 4 es el numerador y no hay denominador, toma 1 por defecto
console.log(`dividir(4,2) = ${dividir(4,2)}`);  // usa 4 como numerador y 2 como denominador
console.log(`dividir() = ${dividir()}`);        // NaN (no se puede dividir undefined)

// Parámetros variables
function sumaTodo() {
    let suma = 0;
    for (let i=0; i<arguments.length; i++) {
        suma += arguments[i];
    }
    return suma;
}

console.log(`La suma de 4, 6, 10 y -8 es: ${sumaTodo(4,6,10,-8)}`);


// 5. Tipos de Funciones
console.log("\n--- Tipos de Funciones ---");

// 5.1 Funciones por Declaración
function funcionDeclarada() {
    console.log("Soy una función declarada.");
}
funcionDeclarada();

// 5.2 Funciones por Expresión
const funcionExpresion = function () {
    console.log("Soy una función por expresión.");
};
funcionExpresion();

// 5.3 Funciones como Objetos (esto realmente no se usa nunca)
function funcionObjeto() {}
funcionObjeto.propiedad = "Soy una propiedad de la función";
console.log("Propiedad de la función:", funcionObjeto.propiedad);

// 5.4 Funciones Anónimas
const funcionAnonima = function () {
    console.log("Soy una función anónima.");
};
funcionAnonima();

// 5.5 Callbacks
console.log("\n--- Callbacks ---");

function procesarDatos(dato, callback) {
    console.log("Procesando dato:", dato);
    callback(dato);
}

function imprimirDato(dato) {
    console.log("Dato procesado:", dato);
}

procesarDatos("Hola", imprimirDato);

// 5.6 Funciones Autoejecutables (IIFE)
console.log("\n--- Funciones Autoejecutables ---");

(function () {
    console.log("Soy una función autoejecutable.");
})();

(function (nombre) {
    console.log(`Hola, ${nombre}, desde una función autoejecutable.`);
})("Luis");

// 5.7 Funciones Flecha
console.log("\n--- Funciones Flecha ---");

// Función flecha simple
const funcionFlecha = () => {
    console.log("Soy una función flecha.");
};
funcionFlecha();

// Función flecha con parámetros
const sumarFlecha = (a, b) => a + b; // Retorno implícito
console.log("Suma con función flecha:", sumarFlecha(8, 5));

// ==============================
// EJEMPLOS
// ==============================

console.log("\n--- Ejemplos ---");

// Usando un callback con funciones flecha
const calcular = (a, b, operacion) => operacion(a, b);

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

console.log("Suma con callback:", calcular(10, 5, suma));
console.log("Resta con callback:", calcular(10, 5, resta));

// Uso combinado de IIFE y funciones flecha
(() => {
    const nombre = "Clase de Funciones";
    console.log(`Bienvenido a la ${nombre}!`);
})();
