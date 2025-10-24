// Explicación de Expresiones Regulares en JavaScript

// Las expresiones regulares son patrones que se utilizan para buscar coincidencias en cadenas de texto.

// Crear una expresión regular
// Para crear una expresión regular en JavaScript, se puede utilizar el constructor `RegExp` o la notación literal `/patrón/`.
let regex = new RegExp("hola"); // Constructor RegExp
let regex2 = /hola/;            // Notación literal
console.log(regex);

// Métodos de las expresiones regulares
// - test: Devuelve true si la cadena cumple el patrón
let txt = "HOLA mundo"; 
console.log(regex.test(txt)); // false

// **1. Modificador i -  Búsqueda sin diferenciar entre mayúsculas y minúsculas**
console.log("=== Modificador i ===");
let regexI = /hola/i;   // Coincidirá con "hola", "Hola", "HOLA", etc.
console.log(regexI.test("hola mundo"));
console.log(regexI.test("hOLa mundo"));

// **2. Modificador `^`: Coincidir al inicio de la cadena**
console.log("\n=== Modificador ^ ===");
const regexStart = /^hola/; // Coincide si "hola" está al inicio
console.log(regexStart.test("hola mundo")); // true
console.log(regexStart.test("mundo hola")); // false

// **3. Modificador `$`: Coincidir al final de la cadena**
console.log("\n=== Modificador $ ===");
let regexEnd = /mundo$/; // Coincide si "mundo" está al final de la cadenaconst regexEnd = /mundo$/; // Coincide si "mundo" está al final
console.log(regexEnd.test("hola mundo")); // true
console.log(regexEnd.test("mundo hola")); // false

const regexCombo =/^hola mundo$/; // Coincide si "hola mundo" está al inicio y al final
console.log(regexCombo.test("hola mundo")); // true

// **4. Modificador `.`: Coincide con cualquier carácter (excepto nueva línea)**
console.log("\n=== Modificador . ===");
let regexDot = /h.l./; // Coincide con cualquier palabra que tenga 4 caracteres, donde el segundo y cuarto pueden ser cualquier cosa
console.log(regexDot.test("hola")); // true
console.log(regexDot.test("hilo")); // true
console.log(regexDot.test("haol")); // false

// **5. Modificador `[]`: Coincidir con cualquier carácter dentro del conjunto**
console.log("\n=== Modificador [] ===");
let regexSet = /h[a-e]la/; // Coincide con "hala", "hbla", "hcla", "hdla", "hela"
console.log(regexSet.test("hala")); // true
console.log(regexSet.test("hela")); // true
console.log(regexSet.test("hbla")); // true
console.log(regexSet.test("hpla")); // false

// **6. Modificador `[^expresion]`: Coincidir con cualquier carácter que NO esté en el conjunto**
console.log("\n=== Modificador [^expresion] ===");
const regexNotSet = /h[^aeiou]la/;
console.log(regexNotSet.test("hola")); // false
console.log(regexNotSet.test("hpla")); // true
console.log(regexNotSet.test("h@la")); // true

let regexVocalConsonante = /^[aeiou][^aeiou]$/;
console.log(regexVocalConsonante.test("ap")); // true

// **7. Modificadores de Cardinalidad: `*`, `+`, `?` y {}**
console.log("\n=== Modificadores de cardinalidad ===");
// `*`: Coincide 0 o más veces
console.log("\n Modificador * ");
let regexAsterisk = /ho*/; // Coincide con "h", "ho", "hoo", etc.
console.log(regexAsterisk.test("h")); // true
console.log(regexAsterisk.test("hoooola")); // true
console.log(regexAsterisk.test("hola")); // true

// `+`: Coincide 1 o más veces
console.log("\n Modificador + ");
let regexPlus = /ho+/; // Coincide con "ho", "hoo", etc.
console.log(regexPlus.test("h")); // false
console.log(regexPlus.test("hoooola")); // true

// `?`: Coincide 0 o 1 vez
console.log("\n Modificador ? ");
let regexQuestion = /ho?/; // Coincide con "h" o "ho"
console.log(regexQuestion.test("hola")); // true
console.log(regexQuestion.test("h")); // true
console.log(regexQuestion.test("hooo")); // true (solo se toma la primera coincidencia)

// `{}`: Coincide un número determinado de veces
console.log("\n Modificador {} ");
let regexExacto = /a{2}/; // Coincide con exactamente 2 apariciones de a
let regexAlMenos = /a{2,}/; // Coincide con al menos 2 apariciones de a
let regexEntre = /a{2,4}/; // Coincide con al menos 2 y máximo 4 apariciones de a

console.log(regexExacto.test("Hola")); // false
console.log(regexExacto.test("Holaaaaa")); // true
console.log(regexAlMenos.test("Holaaaaaaaaa")); // false
console.log(regexEntre.test("Holaaaaaa")); // true

// **8. Paréntesis `()`: Agrupar partes de una expresión**
console.log("\n=== Modificador () ===");
const regexGroup = /(hola)+ mundo/; // "hola" debe repetirse 1 o más veces seguido de " mundo"
console.log(regexGroup.test("hola mundo")); // true
console.log(regexGroup.test("holaholahola mundo")); // true
console.log(regexGroup.test("hola hola mundo hola mundo hola")); //true
console.log(regexGroup.test("mundo")); // false

// **9. Operador OR `|`: Coincidir con una u otra opción**
console.log("\n=== Operador | ===");
const regexOr = /hola|adios/; // Coincide con "hola" o "adios"
console.log(regexOr.test("hola")); // true
console.log(regexOr.test("adios")); // true
console.log(regexOr.test("hasta luego")); // false

// Existen otras maneras predefinidas de expresar conjuntos de caracteres
let regexEscape = /10\$/;
let regexNumeros = /\d/;    // Equivalente a /[0-9]/
let regexAlfanumericos = /\w/; // Equivalente a /[a-zA-Z0-9_]/
console.log(regexEscape.test("10$")); // true
console.log(regexNumeros.test("10$")); // true

// **10. Método exec(): Buscar coincidencias**
console.log("\n=== Método exec() ===");
let regexExec = /hola/;
let texto = "Hola mundo, hola JavaScript.";
let resultado = regexExec.exec(texto); // Busca la primera coincidencia
console.log(resultado); // Devuelve un objeto con información sobre la coincidencia
// resultado.index: Posición donde comienza la coincidencia
// resultado.input: Texto original

// **Resumen del uso del método exec**
if (resultado) {
    console.log(`Se encontró "${resultado[0]}" en la posición ${resultado.index}`);
} else {
    console.log("No se encontró ninguna coincidencia.");
}

console.log("//////////////////////");

console.log("EJERCICIOS DE CLASE");

let regex_telefono = /^\(\+[0-9]{2,3}\)[\d]{9,10}$/;
let regex_email = /^[\w#\*\+&'!%@\?{}\^"]([\.]?[\w#\*\+&'!%@\?{}\^"])*[^\.]@[\w\.-]+\.\w{2,3}$/;

let telefono1 = "(+34)623456789";
let telefono2 = "(+432)612345879";

let email1 = "javier.barcelo@murciaeduca.es";
let email2 = "javier.bar.celo@murciaeduca.com";

console.log(regex_telefono.test(telefono1));
console.log(regex_telefono.test(telefono2));
console.log(regex_email.test(email1));
console.log(regex_email.test(email2));

console.log("\n");