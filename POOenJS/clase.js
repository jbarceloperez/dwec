let variable = 10;
console.log(variable);

let cadena = "hola".toUpperCase();
console.log(cadena);


let vector = [0,1,2];
console.log(typeof vector);


let vehiculo = {
    marca: "audi",
    caballos: 110,
    color: "verde",
    ruedas: 4,
    mostrarInformacion: function () {
        console.log(`Marca del coche: ${this.marca}, ${this.caballos} caballos de potencia, color ${this.color}.`);
    }
};

vehiculo.color = "azul";
vehiculo.caballos = 130;
vehiculo.mostrarInformacion();

class Viaje {
    origen = "Cartagena";
    destino = "Barcelona";
    dias = 5;
    precio = 500;
    constructor(orig,dest,dias,prec) {
        this.origen = orig;
        this.destino = dest;
        this.dias = dias;
        this.precio = prec;
    }
    mostrarInformacion() {
        console.log(`Viaje desde ${this.origen} hasta ${this.destino} de ${this.dias} por ${this.precio}€.`);
    }
};

let miViaje = new Viaje("Cartagena", "Murcia", 2, 8);
miViaje.mostrarInformacion();

for(atributo in miViaje) {
    console.log(atributo);
}

console.log(miViaje instanceof Viaje);

let cadenaJson = JSON.stringify(miViaje);       // stringify pasa de objeto a texto

console.log(cadenaJson);

let objeto = JSON.parse(cadenaJson);
console.log(objeto instanceof Object);

console.log("   - PROTOTIPOS - ");

console.log(miViaje);

///////////// Objetos predefinidos de JavaScript

let cadenaEjemplo = "Cadena de ejemplo";
let stringObject = Object("otra cadena de ejemplo");

console.log(stringObject);

console.log(cadenaEjemplo.toUpperCase());
console.log(cadenaEjemplo.toLowerCase());

console.log(cadenaEjemplo.slice(7,9));


// Date

let fecha = new Date();
console.log(fecha);

let miCumple = new Date(2000, 10, 30);
console.log(miCumple);

console.log(fecha.getDate());
fecha.setHours(16);
console.log(fecha.getHours());

// Math

// Boolean

let b1 = new Boolean(null);
console.log(b1);
