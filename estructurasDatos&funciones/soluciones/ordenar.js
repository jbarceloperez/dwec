const NMIN = 0;
const NMAX = 100;
const TAM = 30;

/**
 * Función para generar un array de números aleatorios.
 * @param {number} cantidad - Cantidad de números en el array.
 * @param {number} min - Valor mínimo del rango aleatorio.
 * @param {number} max - Valor máximo del rango aleatorio.
 * @returns {number[]} Array con números aleatorios.
 */
function generarArrayAleatorio(cantidad, min, max) {
    let array = [];
    for (let i = 0; i < cantidad; i++) {
        let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push(numeroAleatorio);
    }
    return array;
}

/**
 * Función para ordenar un array en orden ascendente.
 * @param {number[]} array - Array de números a ordenar.
 * @returns {number[]} Array ordenado.
 */
function ordenarArrayAscendente(array) {
    return array.slice().sort((a,b) => a - b); // Usamos slice() para no modificar el array original
}

// Generamos un array de 20 números aleatorios entre 1 y 100
let arrayOriginal = generarArrayAleatorio(TAM, NMIN, NMAX);

// Ordenamos el array en orden ascendente
let arrayOrdenado = ordenarArrayAscendente(arrayOriginal);

// Mostramos los resultados en la consola
console.log("Array original:", arrayOriginal);
console.log("Array ordenado:", arrayOrdenado);
