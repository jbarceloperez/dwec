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
console.log(regexI.test("HOLA mundo"));
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
console.log(regexDot.test("hola mundo")); // true
console.log(regexDot.test("h lo")); // true
console.log(regexDot.test("haol")); // false

// **5. Modificador `[]`: Coincidir con cualquier carácter dentro del conjunto**
console.log("\n=== Modificador [] ===");
let regexSet = /h[a-eA-E0-9]la/; // Coincide con "hala", "hbla", "hcla", "hdla", "hela"
console.log(regexSet.test("hala")); // true
console.log(regexSet.test("hela")); // true
console.log(regexSet.test("hCla")); // true
console.log(regexSet.test("hila")); // false

// **6. Modificador `[^expresion]`: Coincidir con cualquier carácter que NO esté en el conjunto**
console.log("\n=== Modificador [^expresion] ===");
const regexNotSet = /h[^aeiou]la/;
console.log(regexNotSet.test("hola")); // false
console.log(regexNotSet.test("hpla")); // true
console.log(regexNotSet.test("h@la")); // true

let regexVocalConsonante = /^[aeiou][^aeiou]$/;
console.log(regexVocalConsonante.test("a ")); // true

// **7. Modificadores de Cardinalidad: `*`, `+`, `?` y {}**
console.log("\n=== Modificadores de cardinalidad ===");
// `*`: Coincide 0 o más veces
console.log("\n Modificador * ");
let regexAsterisk = /ho*la/; // Coincide con "h", "ho", "hoo", etc.
console.log(regexAsterisk.test("hla")); // true
console.log(regexAsterisk.test("hoooola")); // true
console.log(regexAsterisk.test("hola")); // true

// `+`: Coincide 1 o más veces
console.log("\n Modificador + ");
let regexPlus = /ho+la/; // Coincide con "ho", "hoo", etc.
console.log(regexPlus.test("hla")); // false
console.log(regexPlus.test("hoooooola")); // true

// `?`: Coincide 0 o 1 vez
console.log("\n Modificador ? ");
let regexQuestion = /ho?la/; // Coincide con "h" o "ho"
console.log(regexQuestion.test("hola")); // true
console.log(regexQuestion.test("hla")); // true
console.log(regexQuestion.test("hooola")); // false

// `{}`: Coincide un número determinado de veces
console.log("\n Modificador {} ");
let regexExacto = /a{2}/; // Coincide con exactamente 2 apariciones de a
let regexAlMenos = /a{2,}/; // Coincide con al menos 2 apariciones de a
let regexEntre = /a{2,4}/; // Coincide con al menos 2 y máximo 4 apariciones de a

console.log(regexExacto.test("Hola")); // false
console.log(regexExacto.test("Holaaaaa")); // true
console.log(regexAlMenos.test("Holaaaaaaaaa")); // true
console.log(regexEntre.test("Holaaaaaa")); // true

// Ahora ya no da true, porque acaba y empieza por ese patron
let regexHola = /^hola{3,6}$/;
console.log(regexHola.test("holaa")); 
console.log(regexHola.test("holaaaa"));
console.log(regexHola.test("holaaaaaa"));
console.log(regexHola.test("holaaaaaaa"));     

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

let regexOrComplex = /(hola|adios) mundo/; // Coincide con "hola mundo" o "adios mundo"
console.log(regexOrComplex.test("hola mundo")); // true
console.log(regexOrComplex.test("adios mundo")); // true
console.log(regexOrComplex.test("hola adios")); // false

// Existen otras maneras predefinidas de expresar conjuntos de caracteres
let regexEscape = /10\$/;
let regexNumeros = /\d/;    // Equivalente a /[0-9]/
let regexAlfanumericos = /\w/; // Equivalente a /[a-zA-Z0-9_]/
console.log(regexEscape.test("10$")); // true
console.log(regexNumeros.test("10$")); // true

// **10. Método exec(): Buscar coincidencias**
console.log("\n=== Método exec() ===");
let regexExec = /hola+/;
let texto = "Hola mundo, holaaaaaaaaaaaaaaa JavaScript. HOLA!!!";
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

// **11. Método match(): Obtener todas las coincidencias**
console.log("\n=== Método match() ===");
let regexMatch = /hola+/gi; // g: búsqueda global, i: sin distinguir mayúsculas/minúsculas
let resultadosMatch = texto.match(regexMatch); // Devuelve un array con todas las coincidencias
console.log(resultadosMatch); // ["Hola", "hola", "HOLA"]

// **12. Assertions en Expresiones Regulares**
console.log("=== ASSERTIONS EN REGEX ===");
// Las assertions permiten definir condiciones para las coincidencias sin incluir esos patrones en el resultado final.
// Es decir, no consumen caracteres de la cadena, solo verifican condiciones.

// LOOKAHEAD POSITIVO (?=...)
// Coincide con algo solo si está seguido de otro patrón.

let texto1 = "manzana verde, manzana roja, manzana azul";
let regexAssert1 = /manzana(?= roja)/g; // Buscar "manzana" solo si va seguida de " roja"
console.log("\nLookahead positivo (?=...):");
console.log("Texto:", texto1);
console.log("Coincidencias:", texto1.match(regexAssert1)); // ["manzana"]

// LOOKAHEAD NEGATIVO (?!...)
// Coincide con algo solo si NO está seguido de otro patrón.

let regexAssert2 = /manzana(?! roja)/g; // Buscar "manzana" que NO vaya seguida de " roja"
console.log("\nLookahead negativo (?!...):");
console.log("Coincidencias:", texto1.match(regexAssert2)); // ["manzana", "manzana"]

// LOOKBEHIND POSITIVO (?<=...)
// Coincide con algo solo si está precedido de cierto patrón.

let texto2 = "€100, $200, €300, $400";
let regex3 = /(?<=€)\d+/g; // Buscar números precedidos del símbolo €
console.log("\nLookbehind positivo (?<=...):");
console.log("Texto:", texto2);
console.log("Coincidencias:", texto2.match(regex3)); // ["100", "300"]

// LOOKBEHIND NEGATIVO (?<!...)
// Coincide con algo solo si NO está precedido de cierto patrón.

let regex4 = /(?<!€)\d+/g; // Buscar números que NO vayan precedidos de €
console.log("\nLookbehind negativo (?<!...):");
console.log("Coincidencias:", texto2.match(regex4)); // ["200", "400"]

console.log("\n//////////////////////\n");

console.log("EJERCICIOS DE CLASE");

// let regex_telefono = /./;
let regex_email = /^[\w#\*\+&'!%\?{\^}"]{1}(\.?[\w#\*\+&'!%@\?{}\^"])*@[\w\.-]+\.[a-z]{2,}$/;
let regex_telefono = /^\(\+\d{1,3}\)\d{9,12}$/;
console.log(regex_email.test("j+&'!.%.#.*@gmail.com"));
console.log(regex_telefono.test("(+1)4485693217"));
let telefono1 = "(+34)623456789";
let telefono2 = "(+432)612345879";

let email1 = "javier.barcelo@murciaeduca.es";
let email2 = "javier.bar.celo@murciaeduca.com";

console.log(regex_telefono.test(telefono1));
console.log(regex_telefono.test(telefono2));
console.log(regex_email.test(email1));
console.log(regex_email.test(email2));

console.log("\n");