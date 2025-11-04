// ============================
//  Temporizadores
// ============================
console.log("=== Temporizadores ===");

// Ejecutar después de 3 segundos
const timeoutId = setTimeout(() => {
    console.log("Han pasado 3 segundos desde que se cargó el script.");
}, 3000);
  
// Repetir cada 2 segundos
const intervalId = setInterval(() => {
    console.log("Este mensaje se repite cada 2 segundos.");
}, 2000);

// Detener el temporizador después de 10 segundos
const segundoTimeout = setTimeout(() => {
    clearInterval(intervalId);
    console.log("Intervalo detenido después de 10 segundos.");
}, 10000);

// Cancelar el primer temporizador
clearTimeout(segundoTimeout);

// Temporizador con retraso personalizado
function temporizadorPersonalizado(mensaje, delay) {
    setTimeout(() => {
        console.log(mensaje);
    }, delay);
}
temporizadorPersonalizado("Este mensaje aparece después de 2 segundos", 2000);

// Temporizador que se detiene dinámicamente
let contador = 0;
const intervalo = setInterval(() => {
    console.log(`Intervalo ejecutado ${++contador} veces`);
    if (contador === 5) {
        clearInterval(intervalo);
        console.log("Intervalo detenido automáticamente después de 5 ejecuciones.");
    }
}, 1000);

// Temporizador anidado
setTimeout(() => {
    console.log("Primer temporizador ejecutado");
    setTimeout(() => {
        console.log("Segundo temporizador ejecutado dentro del primero");
    }, 2000);
}, 3000);

// Temporizador con función flecha
const saludo = () => console.log("Hola después de 4 segundos usando una función flecha");
setTimeout(saludo, 4000);

setTimeout(() => {
    console.log("Redirigiendo a un sitio web en 5 segundos...");
    setTimeout(() => {
        console.log("Redirección realizada.");
        location.assign("https://developer.mozilla.org");
    }, 5000);
}, 2000);