const MAX_NUMBER = 10;

let numero = Math.floor(Math.random() * MAX_NUMBER) + 1;
let intentos = 1;


while (true) {
    let numeroUsuario = prompt(`Adivina el número entre 1 y ${MAX_NUMBER}:`);

    if (numeroUsuario > numero) {
        alert("El número es menor");
    } else if (numeroUsuario < numero) {
        alert("El número es mayor");
    } else {
        alert(`¡Has adivinado el numero en ${intentos} intentos!`);
        break;
    }
    intentos++;
}

