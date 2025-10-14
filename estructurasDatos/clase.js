// ==============================
// 1. TRABAJANDO CON ARRAYS
// ==============================

// Creación de un array
console.log("=== ARRAYS ===");
let arrayEjemplo = [1, 2, 3, 4, 5]; // Creamos un array con valores iniciales
let mimMatriz = [0,1][1,0];
let arrayVacio = [];
let otroArray = Array();
console.log("Array inicial:", arrayEjemplo);

// Agregar elementos al array
arrayEjemplo.push(6); // Agregamos un elemento al final
arrayEjemplo.unshift(0); // Agregamos un elemento al inicio
console.log("Array después de agregar elementos:", arrayEjemplo);

// Modificar elementos
arrayEjemplo[2] = 9; // Modificamos el tercer elemento (índice 2)
console.log("Array después de modificar un elemento:", arrayEjemplo);

// Eliminar elementos
arrayEjemplo.pop(); // Elimina el último elemento
arrayEjemplo.shift(); // Elimina el primer elemento
console.log("Array después de eliminar elementos:", arrayEjemplo);

// Recorrer un array
for(let i = 0; i < arrayEjemplo.length; i++)
{
    console.log(arrayEjemplo[i]);
}

for (let valor of arrayEjemplo)
{
    console.log(valor);
}

// Referenciar Arrays

// Al crear una variable con el valor de otra, lo que tenemos son dos variables independientes
let x=1;
let y=x;
x = 5;
console.log(x, y);


// No sucede lo mismo con los arrays, lo que creamos es OTRA REFERENCIA al mismo array
let array1 = [1,2,3];
let array2 = array1;    // REFERENCIA, NO UNA COPIA
array1[0] = 0;
console.log(array2);    // el array 2 no ha sido modificado, pero se muestra modificado. Eso es porque array2
                        // no es otro array, sino una referencia a array1


// Unir y copiar arrays
let arrayConcatenado = arrayEjemplo.concat(array1);
console.log(arrayConcatenado);

let arrayCopiado = arrayEjemplo.slice();

let arrayMedioCopiado = arrayEjemplo.slice(0,2);

// Saber si hay un valor en el array
let condicion = 9;
console.log(arrayEjemplo.includes(condicion));

// Ordenar arrays
let arrayOrdenado = arrayEjemplo.sort();
let arrayReverso = arrayEjemplo.reverse();
console.log(arrayOrdenado);     // OJO, el método sort() ordena alfabéticamente, no numéricamente.

// Convertir el array a un Set
let setDesdeArray = new Set(arrayEjemplo);
console.log("Set creado desde el array:", setDesdeArray);

console.log("\n");

// // ==============================
// // 2. TRABAJANDO CON SETS
// // ==============================

console.log("=== SETS ===");
// Creación de un Set
let setEjemplo = new Set([1, 2, 3, 4, 5]); // Creamos un Set con valores iniciales
console.log("Set inicial:", setEjemplo);

// Agregar elementos al Set
setEjemplo.add(6); // Agregamos un nuevo elemento
setEjemplo.add(3); // Intentamos agregar un elemento duplicado (no se añadirá)
console.log("Set después de agregar elementos:", setEjemplo);

// Eliminar elementos del Set
setEjemplo.delete(4); // Eliminamos un elemento
console.log("Set después de eliminar un elemento:", setEjemplo);

// // Comprobar si un elemento existe en el Set
console.log("¿El Set contiene el número 2?", setEjemplo.has(2));
console.log("¿El Set contiene el número 4?", setEjemplo.has(4));

// Recorrer un Set

for (const elemento of setEjemplo) {
    console.log(elemento);
}

// Tamaño del conjunto
console.log("Tamaño del conjunto:", setEjemplo.size);

// Convertir el Set a un Array  -  ORDEN SPREAD (...)
let arrayDesdeSet = [...setEjemplo];
console.log("Array creado desde el Set:", arrayDesdeSet);

let conjunto = new Set([...array1, ...arrayEjemplo, ...arrayDesdeSet]);

console.log(conjunto);

console.log("\n");

// // ==============================
// // 3. TRABAJANDO CON MAPS
// // ==============================

console.log("=== MAPS ===");
// Creación de un Map
let mapEjemplo = new Map([
    ["Bruno", 10],
    ["Jorge", 10],
    ["German", 10]
]); // Creamos un Map con pares clave-valor
console.log("Map inicial:", mapEjemplo);

// Agregar elementos al Map
mapEjemplo.set("David", 10); // Agregamos una nueva clave-valor
console.log("Map después de agregar un elemento:", mapEjemplo);

// Modificar elementos en el Map
mapEjemplo.set("Jorge", 4); // Actualizamos el valor de una clave existente
console.log("Map después de modificar un elemento:", mapEjemplo);

// Eliminar elementos del Map
mapEjemplo.delete("German"); // Eliminamos una clave-valor
console.log("Map después de eliminar un elemento:", mapEjemplo);

// Comprobar si una clave existe en el Map
console.log("¿El Map contiene la clave 'Bruno'?", mapEjemplo.has("Bruno"));
console.log("¿El Map contiene la clave 'German'?", mapEjemplo.has("German"));

// // Recorrer un Map
console.log("Recorriendo el Map:");

// Recorrer el mapa obteniendo cada uno de los pares en la variable 'par'
for (const par of mapEjemplo) 
{
    console.log(par);
}

// Recorrer el mapa obteniendo las claves del mapa en la variable 'clave'
for (let clave of mapEjemplo.keys())
{
    console.log(mapEjemplo.get(clave));
}


// // Convertir un Map a un Array
// let arrayDesdeMap = Array.from(mapEjemplo);
// console.log("Array creado desde el Map:", arrayDesdeMap);

console.log("\n");

// ==============================
// CONVERSIONES ENTRE ESTRUCTURAS
// ==============================

console.log("=== CONVERSIONES ===");
// Array a Set
let nuevoSet = new Set([1, 2, 3, 4, 4, 5]); // Duplicados serán eliminados
console.log("Set desde un Array con duplicados:", nuevoSet);

// Set a Array
let nuevoArray = Array.from(nuevoSet);
// También se pueden crear arrays como un nuevo objeto array y el metodo from, pero recomendamos usar el operador '...' para las conversiones
console.log("Array desde un Set:", nuevoArray);

// Array a Map
let nuevoMap = new Map([
    [1, "uno"],
    [2, "dos"],
    [3, "tres"]
]);
console.log("Map creado desde un array de pares clave-valor:", nuevoMap);

// Map a Array
let arrayDesdeNuevoMap = [...nuevoMap];
console.log("Array desde un Map:", arrayDesdeNuevoMap);
