// ============================
// Objeto location
// ============================
console.log("=== Objeto location ===");

// Mostrar la URL actual
console.log("URL actual: ", location.href);

// Redirigir al usuario a otra página (descomentar para probar)
location.assign("https://www.google.com");

// Recargar la página (descomentar para probar)
location.reload();

// Propiedades detalladas del objeto location
console.log("URL completa: ", location.href);
console.log("Fragmento hash: ", location.hash); // Devuelve cualquier hash presente en la URL (#section1)
console.log("Nombre del host: ", location.host); // Ejemplo: "www.example.com:8080"
console.log("Nombre del hostname: ", location.hostname); // Ejemplo: "www.example.com"
console.log("Origen completo: ", location.origin); // Ejemplo: "https://www.example.com"
console.log("Ruta pathname: ", location.pathname); // Ejemplo: "/ruta/al/archivo.html"
console.log("Número de puerto: ", location.port); // Ejemplo: "8080" (vacío si no hay puerto explícito)
console.log("Protocolo utilizado: ", location.protocol); // Ejemplo: "https:"

// Ejemplo práctico de redirección basada en protocolo
if (location.protocol !== "https:") {
    console.warn("Advertencia: No estás utilizando un protocolo seguro. Redirigiendo a HTTPS...");
    location.replace("https://" + location.host + location.pathname);
}

// ============================
// Objeto history
// ============================
console.log("=== Objeto history ===");

console.log("Historial de navegación: ", history);

// Navegar en el historial
console.log("Entradas en el historial: ", history.length);

// Ir a la página anterior (descomentar para probar)
history.back();

// Ir a la página siguiente (descomentar para probar)
history.forward();

// Navegar n páginas en el historial (descomentar para probar)
history.go(-2); // Retrocede 2 páginas



