let inventario = new Map();

function agregarProducto(nombre, cantidad) {
    if (cantidad <= 0) {
        console.log("La cantidad a agregar debe ser mayor que cero.");
        return;
    }
    if (inventario.has(nombre)) {
        let cantidadActual = inventario.get(nombre);
        inventario.set(nombre, cantidadActual + cantidad);
    } 
    else {
    inventario.set(nombre, cantidad);
    }
}


function eliminarProducto(nombre, cantidad) {
    if (inventario.has(nombre)) {
        let cantidadActual = inventario.get(nombre);
        if (cantidadActual - cantidad <= 0) {
            inventario.delete(nombre);
        }
        else {
            inventario.set(nombre, cantidadActual - cantidad);
        }
    }
    else {        
        console.log(`El producto ${nombre} no existe en el inventario.`);
    }
}

function consultarProducto(nombre) {
    if (!inventario.has(nombre)) {
        return -1;
    }
    return inventario.get(nombre);
}

function listarProductos() {
    let arrayProductos = [];
    for (let clave of inventario.keys()) {
        arrayProductos.push(clave);
    }
    return new Set(arrayProductos);
}


function productosUnicos() {
    return inventario.size;
}


function mostrarInventario() {
    console.log("Inventario:");
    for (let par of inventario) {
        console.log(`Producto: ${par[0]}, Cantidad: ${par[1]}`);
    }
    console.log("-----");
}





////////////////////////////////////// 

agregarProducto("Manzanas", 50);
agregarProducto("Manzanas", 30);
agregarProducto("Naranjas", 20);
agregarProducto("Naranjas", 10);
agregarProducto("Plátanos", 15);

eliminarProducto("Naranjas", 5);
eliminarProducto("Plátanos", 20); // Esto debería eliminar Plátanos del inventario

agregarProducto("Fresas", -15);

console.log(consultarProducto("Manzanas"));

console.log(inventario);
console.log(listarProductos());
console.log(productosUnicos());

mostrarInventario();