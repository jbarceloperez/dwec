// ============================
// Objeto window
// ============================

console.log("=== Objeto window ===");

// Mostrar un mensaje de alerta
window.alert("¡Bienvenido al curso de JavaScript!");

// Pedir confirmación al usuario
const confirmacion = window.confirm("¿Te está gustando JavaScript?");
console.log("Confirmación: ", confirmacion);

// Pedir información al usuario
const nombre = window.prompt("¿Cuál es tu nombre?");
console.log("Nombre ingresado: ", nombre);

let ancho = window.innerWidth;
let alto = window.innerHeight;
console.log("Ancho de la ventana: " + ancho + " y Alto de la ventana: " + alto);

// Métodos adicionales del objeto window

// Abrir una nueva ventana
const nuevaVentana = window.open("https://www.google.com", "_blank", "width=400,height=300");
console.log("Nueva ventana abierta.");

// Cambiar el tamaño de la ventana abierta
nuevaVentana.resizeTo(500, 400);
console.log("Ventana redimensionada a 500x400.");

// Mover la ventana en coordenadas relativas
nuevaVentana.resizeBy(100, 50);
console.log("Ventana redimensionada +100 ancho, +50 alto.");

// Cerrar la ventana (descomentar para probar)
nuevaVentana.close();
console.log("Ventana cerrada.");

// Desplazar el scroll de la página actual
window.scrollTo(0, 10000); // Desplaza el scroll al píxel 1000
console.log("Scroll desplazado a 100 píxeles desde el inicio.");

window.scrollBy(0, 5000); // Desplaza el scroll 500 píxeles más
console.log("Scroll desplazado 50 píxeles adicionales.");

