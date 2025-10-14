let numero = prompt("Introduce un número:");

if (isNaN(numero)) {
    alert("El valor introducido no es un número válido.");
}

if (numero < 0) {
    for (let i = 0; i > numero ; i--) {
        if (numero % i == 0) {
            console.log(i);
        }  
    }     
}
else {
    for (let i = 0; i < numero ; i++) {
        if (numero % i == 0) {
            console.log(i);
        } 
    }
}