// ============================
// Objeto navigator
// ============================
console.log("=== Objeto navigator ===");

// Obtener información del navegador
let infoNavigator = "clipboard: " + navigator.clipboard + "\n";
infoNavigator += "cookieEnabled: " + navigator.cookieEnabled + "\n";
infoNavigator += "geolocation: " + navigator.geolocation + "\n";
infoNavigator += "language: " + navigator.language + "\n";
infoNavigator += "onLine: " + navigator.onLine + "\n";
infoNavigator += "storage: " + navigator.storage + "\n";
infoNavigator += "userAgent: " + navigator.userAgent + "\n";
console.log(infoNavigator);
