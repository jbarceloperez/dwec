let numero1 = prompt("Dame el primer número:");
let numero2 = prompt("Dame el segundo número:");
let operacion = prompt("Dame la operación (+, -, *, /):");

if (isNaN(numero1) || isNaN(numero2)) {
    alert("Debes introducir números válidos.");
}

let resultado;

switch (operacion) {
    case "+":
        resultado = numero1 + numero2;
        break;
    case "-":
        resultado = numero1 - numero2;
        break;
    case "*":
        resultado = numero1 * numero2;
        break;
    case "/":
        if (numero2 == 0) {
            alert("No se puede dividir entre cero.");
            break;
        }
        resultado = numero1 / numero2;
        break;
    case "%":
        resultado = numero1 % numero2;
        break;
    case "^":
        resultado = numero1 ** numero2;
        break;
    default:
        alert("Operación no válida.");
        break;
}

alert(`El resultado de ${numero1} ${operacion} ${numero2} es ${resultado}`);