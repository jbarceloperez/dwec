// Creamos el Map para almacenar el inventario
const inventario = new Map();


//Función para agregar un producto al inventario
function agregarProducto(nombre, cantidad) {
    // Validamos que la cantidad sea un número positivo
    if (cantidad <= 0 || typeof cantidad !== 'number') {
        console.log("Error: La cantidad debe ser un número positivo.");
        return;
    }

    // Si el producto ya existe en el inventario, sumamos la cantidad
    if (inventario.has(nombre)) {
        let cantidadActual = inventario.get(nombre);
        inventario.set(nombre, cantidadActual + cantidad);
    } else {
        // Si no existe, lo agregamos al inventario
        inventario.set(nombre, cantidad);
    }
    console.log(`Producto agregado: ${nombre}, Cantidad: ${cantidad}`);
}


//Función para eliminar una cantidad de un producto del inventario.
function eliminarProducto(nombre, cantidad) {
    // Validamos que la cantidad sea un número positivo
    if (cantidad <= 0 || typeof cantidad !== 'number') {
        console.log("Error: La cantidad debe ser un número positivo.");
        return;
    }

    // Comprobamos si el producto existe en el inventario
    if (inventario.has(nombre)) {
        let cantidadActual = inventario.get(nombre);

        // Restamos la cantidad indicada
        if (cantidadActual - cantidad > 0) {
            inventario.set(nombre, cantidadActual - cantidad);
            console.log(`Producto actualizado: ${nombre}, Cantidad restante: ${cantidadActual - cantidad}`);
        } else {
            // Si la cantidad resultante es 0 o menor, eliminamos el producto
            inventario.delete(nombre);
            console.log(`Producto eliminado: ${nombre}`);
        }
    } else {
        console.log(`Error: El producto "${nombre}" no existe en el inventario.`);
    }
}

// Función para mostar los productos del inventario y su cantidad
function mostrarInventario() {
    console.log("Inventario actual:");
    for (let [nombre, cantidad] of inventario.entries()) {
        console.log(`\t-${nombre}: ${cantidad}`);
    }
}

// Función para listar los nombres de todos los productos en el inventario.
function listarProductos() {
    // Usamos Array.from para convertir las claves del Map a un array
    let productos = [...inventario.keys()];
    console.log("Productos en el inventario:", productos);
    return productos;
}


// Función para obtener la cantidad de productos únicos usando un Set.
function productosUnicos() {
    // Usamos un Set para contar los productos únicos
    let productosSet = new Set(inventario.keys());
    console.log("Cantidad de productos únicos:", productosSet.size);
    return productosSet.size;
}

// Ejemplo de uso del programa
agregarProducto("Manzanas", 10); // Agregamos 10 manzanas
agregarProducto("Naranjas", 5); // Agregamos 5 naranjas
agregarProducto("Manzanas", 5); // Sumamos 5 manzanas más
eliminarProducto("Naranjas", 2); // Eliminamos 2 naranjas
agregarProducto("Peras", 8); // Agregamos 8 peras
mostrarInventario(); // Mostramos el inventario actual
eliminarProducto("Naranjas", 5); // Intentamos eliminar 5 naranjas (deberían eliminarse completamente)
listarProductos(); // Listamos los productos
productosUnicos(); // Contamos los productos únicos

