export class AritmeticException extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "AritmeticException";
    }
}

export class DividirPor0Exception extends AritmeticException {
    constructor(mensaje) {
        super(mensaje);
        this.name = "DividirPor0Exception";
    }
}

class ValidacionException extends Error {
    constructor(mensaje) {
        super(mensaje);                      
        this.name = "ValidacionException";
    }
}

export class MiExcepcion extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "MiExcepcion";  
    }
}


