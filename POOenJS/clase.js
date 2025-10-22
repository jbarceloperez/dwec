import { readFile, writeFile } from "fs";

// ==============================================
// PROGRAMACIÓN ORIENTADA A OBJETOS EN JAVASCRIPT
// ==============================================

// Definición de una variable, cadena, array y objeto
let variable = 10;
console.log(typeof variable);

// A esta cadena podemos aplicarle métodos propios de los strings
let cadena = "hola".toUpperCase();
console.log(typeof cadena);

// Observamos que el tipo de nuestro array es 'object'
let vector = [0,1,2];
console.log(typeof vector);


// DECLARACIÓN DE OBJETOS

// Definición de un objeto literal
let vehiculo = {
    marca: "audi",
    caballos: 110,
    color: "verde",
    ruedas: 4,
    mostrarInformacion: function () {
        console.log(`Marca del coche: ${this.marca}, ${this.caballos} caballos de potencia, color ${this.color}.`);
    }
};

// Accedemos a los atributos y métodos del objeto
vehiculo.color = "azul";
// Se puede añadir un nuevo atributo al objeto
vehiculo.longitud = 4.5;
console.log(vehiculo);
vehiculo.caballos = 130;
vehiculo.mostrarInformacion();

// Definición de una clase
class Viaje {
    origen = "Cartagena";               // Se puede inicializar un atributo con un valor por defecto
    destino = "Barcelona";
    dias = 5;
    precio = 500;       
    constructor(orig,dest,dias,prec) {  // Método constructor
        this.origen = orig;             // this hace referencia al objeto que se está creando
        this.destino = dest;
        this.dias = dias;
        this.precio = prec;
    }
    mostrarInformacion() {
        console.log(`Viaje desde ${this.origen} hasta ${this.destino} de ${this.dias} días por ${this.precio}€.`);
    }
};

// Creación de un objeto a partir de la clase mediante el operador 'new' y el constructor
let miViaje = new Viaje("Cartagena", "Murcia", 2, 8);
miViaje.precio = 10;    // Modificamos un atributo del objeto
miViaje.mostrarInformacion();


// Se pueden recorrer los atributos del objeto con un bucle for...in
// for(atributo in miViaje) {
//     console.log(atributo);
// }

// miViaje es un elemento del tipo object, para comprobar si es una instancia de la clase Viaje usamos 'instanceof'
console.log(miViaje instanceof Viaje);  // devuelve true


// Implementación de herencia entre clases
// Crear clase a partir de la palabra class
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;   
        this.apellido = apellido;
        this.email = "";
    };

    getNombreCompleto = function () {   // Se puede definir una función dentro de la clase
        return `${this.nombre} ${this.apellido}`;
    };
}

// Crear una clase que herede de otra
class Estudiante extends Persona {
    constructor(nombre, apellido, estudios) {
        super(nombre, apellido);    // Llamar al constructor de la clase padre
        this.estudios = estudios;   // Añadir atributos propios de la clase hija
    }

    // método concreto de esta clase
    estudiar = function () {
        console.log(`Estoy estudiando`);
    }
}

// Crear un objeto de la clase hija
const estudiante1 = new Estudiante("Javier", "Barceló", "DAW en el ISEN");

// Acceder a los métodos de la clase padre y de la hija
console.log(estudiante1.getNombreCompleto());
estudiante1.estudiar();

///////////////////
//// AGREGADOS ////
///////////////////

// Crear una clase que contiene un array de objetos de otra clase
class Profesor extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this.departamento = departamento;
    }

    impartirClase = function () {    
        console.log("Impartiendo clase...");
    }
}

// Clase que contiene un array de objetos Estudiante
class Clase {
    constructor(nombre, profesor, estudiantes) {
        this.nombre = nombre;
        this.profesor = profesor;
        this.estudiantes = estudiantes || [];  // Array de objetos Estudiante
    }

    mostrarClase = function () {
        console.log(`Clase de ${this.nombre}, impartida por ${this.profesor.getNombreCompleto()}.`);
        console.log("Estudiantes inscritos:");
        this.estudiantes.forEach(estudiante => {
            console.log(`  - ${estudiante.getNombreCompleto()}`);
        });
        console.log("---------------------");
    }
}

const profesor1 = new Profesor("Ana", "García", "Informática");
const estudiante2 = new Estudiante("Luis", "Martínez", "DAW en el ISEN");
const clase1 = new Clase("Programación", profesor1, [estudiante1, estudiante2]);

clase1.mostrarClase();

////////////////////////////////
///// MODIFICAR PROTOTIPOS /////
////////////////////////////////

console.log("   - PROTOTIPOS - ");
console.log(estudiante1);   // Desde la consola se puede ver el prototipo del objeto
console.log(profesor1);

// Modificar el prototipo de una clase para añadir un método a todas las instancias de la clase
Persona.prototype.saludar = function () {
    console.log("Hola, soy " + this.getNombreCompleto());
};

// Aunque el método se añade después de crear el objeto, se puede utilizar igualmente
estudiante1.saludar();
profesor1.saludar();

// Modificar el prototipo de una clase propia del lenguaje para añadir o modificar métodos
// String.prototype.toLowerCase = function () {
//     console.log("Esto no deberias hacerlo");
// }

let str = "CADENA DE TEXTO";
console.log(str.toLowerCase());     // Se ejecuta el método modificado en vez del original

// ----------------------------------
// Objetos predefinidos de JavaScript
// ----------------------------------

// La clase String permite trabajar con cadenas de texto.
// Ofrece muchos métodos para manipular, buscar o transformar texto.

console.log("=== STRING ===");

let texto = "  JavaScript es Genial  ";
console.log("Texto original:", `"${texto}"`);

// toUpperCase(): convierte todo el texto a MAYÚSCULAS
console.log("toUpperCase():", texto.toUpperCase());

// toLowerCase(): convierte todo el texto a minúsculas
console.log("toLowerCase():", texto.toLowerCase());

// trim(): elimina los espacios en blanco del principio y del final
console.log("trim():", `"${texto.trim()}"`);

// indexOf(): devuelve la posición donde aparece una palabra (o -1 si no existe)
console.log("indexOf('Genial'):", texto.indexOf("Genial"));
console.log("indexOf('Python'):", texto.indexOf("Python"));

// split(): divide una cadena en partes según un separador y devuelve un array
let palabras = texto.trim().split(" ");
console.log("split(' '):", palabras);

// Ejemplo: contar palabras en una frase
console.log("Número de palabras:", palabras.length);

/////////////////////////////////////////////

// La clase Date representa fechas y horas.
// Si se crea sin argumentos, toma la fecha y hora actuales.

console.log("\n=== DATE ===");

let ahora = new Date();
console.log("Fecha actual:", ahora);

// Métodos más usados para obtener partes de la fecha/hora
console.log("Año:", ahora.getFullYear());      // año completo (ej. 2025)
console.log("Mes:", ahora.getMonth() + 1);     // mes (0-11) → se suma 1
console.log("Día del mes:", ahora.getDate());  // día del mes (1-31)
console.log("Día de la semana:", ahora.getDay()); // 0=Domingo, 6=Sábado
console.log("Horas:", ahora.getHours());
console.log("Minutos:", ahora.getMinutes());
console.log("Segundos:", ahora.getSeconds());
console.log("Milisegundos:", ahora.getMilliseconds());

// Otros métodos útiles
console.log("Timestamp (ms desde 1970):", ahora.getTime());

// Crear una fecha concreta
let navidad = new Date(2025, 11, 25, 12, 30, 0); // Año, Mes(0-11), Día, Hora, Minuto, Segundo
console.log("Fecha de Navidad:", navidad.toString());

// Formatos legibles
console.log("toDateString():", ahora.toDateString());
console.log("toLocaleDateString():", ahora.toLocaleDateString());
console.log("toLocaleTimeString():", ahora.toLocaleTimeString());

/////////////////////////////////////////////

// Math contiene constantes y métodos matemáticos de uso común.

console.log("\n=== MATH ===");

// Constantes
console.log("PI:", Math.PI);
console.log("E (número de Euler):", Math.E);
console.log("SQRT2 (raíz cuadrada de 2):", Math.SQRT2);

// Métodos numéricos
let num = 7.8;

console.log("abs(-5):", Math.abs(-5));       // valor absoluto
console.log("round(7.8):", Math.round(num)); // redondeo al entero más cercano
console.log("ceil(7.2):", Math.ceil(7.2));   // redondeo hacia arriba
console.log("floor(7.8):", Math.floor(num)); // redondeo hacia abajo
console.log("trunc(7.8):", Math.trunc(num)); // elimina decimales
console.log("min(3, 7, 2, 9):", Math.min(3, 7, 2, 9)); // mínimo
console.log("max(3, 7, 2, 9):", Math.max(3, 7, 2, 9)); // máximo

// Potencias y raíces
console.log("pow(2, 3):", Math.pow(2, 3));   // 2 elevado a 3 = 8
console.log("sqrt(16):", Math.sqrt(16));     // raíz cuadrada
console.log("cbrt(27):", Math.cbrt(27));     // raíz cúbica

// Aleatoriedad
let numAleatorio = Math.random();           // número aleatorio entre 0 y 1
console.log("random():", numAleatorio); 
console.log("random entre 1 y 10:", Math.floor(Math.random() * 10) + 1);

// Trigonometría (en radianes)
console.log("sin(0):", Math.sin(0));
console.log("cos(0):", Math.cos(0));
console.log("tan(45°):", Math.tan(Math.PI / 4));

/////////////////////////////////////////////

// Boolean
// Simplemente recordad los valores que se consideran false y true en JavaScript:
console.log("\n=== BOOLEAN ===");
console.log("Boolean(0):", Boolean(0));         // false
console.log("Boolean(1):", Boolean(1));         // true
console.log("Boolean('texto'):", Boolean("texto")); // true
console.log("Boolean(''):", Boolean(""));       // false
console.log("Boolean(null):", Boolean(null));   // false
console.log("Boolean(undefined):", Boolean(undefined)); // false
console.log("Boolean([]):", Boolean([]));       // true
console.log("Boolean({}):", Boolean({}));       // true

// ==============================
// JSON
// ==============================
console.log("\n=== JSON ===");

// JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos.
// Se basa en una sintaxis similar a los objetos literales de JavaScript.

class Coche {
    constructor(modelo, color) {
        this.modelo = modelo;
        this.color = color;
    }
}

class Concesionario {
    constructor(nombre) {
        this.nombre = nombre;
        this.coches = [];
    }

    agregarCoches = function (coche) {
        this.coches.push(coche);
    }
    // Convertir un array de objetos a un string JSON
    cochesAJSON = function () {
        return JSON.stringify(this.coches);
    }
    // Convertir un string JSON a un array de objetos
    jsonACoches = function (jsonString) {
        const cochesData = JSON.parse(jsonString);
        this.coches = cochesData.map(coche => new Coche(coche.modelo, coche.color));    // Crea objetos Coche a partir de los datos, si no crearía objetos genéricos Object
    }
}

const concesionario = new Concesionario("Concesionario de la media sala");
concesionario.agregarCoches(new Coche("Audi RS3", "Verde"));
concesionario.agregarCoches(new Coche("BMW M2", "Azul"));

console.log(concesionario);

const cochesString = concesionario.cochesAJSON();

console.log(cochesString);

// Guardar el string JSON en un fichero
writeFile("./coches.json", cochesString, (error) => {
    if (error) {
        console.error("Algo ha fallado", error);
    } else {
        console.log("Se ha guardado el fichero.")
    }
});

const nuevoConcesionario = new Concesionario("Otro concesionario");
nuevoConcesionario.jsonACoches(cochesString);
console.log(nuevoConcesionario);

// Leer el contenido de un fichero JSON
readFile("./clase.json", (error, data) => { // parametro data tiene el contenido del fichero en una cadena
    if (error) {
        console.log("Error", error);
    } else {
        const datos = JSON.parse(data); // Convertir la cadena JSON a un objeto JavaScript
        console.log(datos);
    }
});