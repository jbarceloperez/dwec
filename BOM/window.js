// ============================
// Objeto window
// ============================

console.log("=== Objeto window ===");

// Mostrar un mensaje de alerta
alert("¡Bienvenido al curso de JavaScript!");

// Pedir confirmación al usuario
const confirmacion = confirm("¿Te está gustando JavaScript?");
console.log("Confirmación: ", confirmacion);

// Pedir información al usuario
const nombre = prompt("¿Cuál es tu nombre?");
console.log("Nombre ingresado: ", nombre);

let ancho = window.innerWidth;
let alto = window.innerHeight;
console.log("Ancho de la ventana: " + ancho + " y Alto de la ventana: " + alto);

// Métodos adicionales del objeto window

// // Abrir una nueva ventana
const nuevaVentana = window.open("index.html", "_blank", "width=400,height=300");
console.log("Nueva ventana abierta.");

// // Cambiar el tamaño de la ventana abierta
nuevaVentana.resizeTo(800, 600);
console.log("Ventana redimensionada a 800x600.");

// // Mover la ventana en coordenadas relativas
nuevaVentana.resizeBy(-100, -100);
console.log("Ventana redimensionada +100 ancho, +50 alto.");

// // Cerrar la ventana (descomentar para probar)
setTimeout(() => {  // temporizador para cerrar la ventana después de 5 segundos
    nuevaVentana.close();
    console.log("Nueva ventana cerrada.");
}, 5000);

// Desplazar el scroll de la página actual
window.scrollTo(0, 10000); // Desplaza el scroll al píxel 1000
console.log("Scroll desplazado a 5000 píxeles desde el inicio.");

// scrollTo acepta también un objeto con opciones
// { top: 0, behavior: 'smooth' }

setTimeout(() => {
    window.scrollTo(0, 500); // Desplaza el scroll 500 píxeles más
    console.log("Scroll desplazado 50 píxeles adicionales.");
}, 2000);
