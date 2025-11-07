// ===================================
// Manipulación del DOM con JavaScript
// ===================================

// Selección de elementos
console.log("=== Selección de elementos ===");

// Selección por ID
const titulo = document.getElementById("titulo");
console.log("Elemento seleccionado por ID:", titulo);

// Selección por clase con querySelector
// Las clases en CSS empiezan por . (punto)
const descripcion = document.querySelector(".descripcion");
console.log("Elemento seleccionado por clase (querySelector):", descripcion);

// Selección de múltiples elementos con querySelectorAll
const elementos = document.querySelectorAll("li.elemento");
console.log("Elementos seleccionados por clase (querySelectorAll):", elementos);

const elements = document.querySelectorAll("li");
console.log("Elementos seleccionados por clase (querySelectorAll):", elements);

// Modificación de elementos

// Cambiar el texto de un elemento
titulo.textContent = "Nuevo Título Principal";
console.log("Nuevo texto del título:", titulo.textContent);

titulo.innerHTML = "<em>Nuevo Título Principal</em>";

// Cambiar el contenido HTML de un elemento
descripcion.innerHTML = "<strong>Descripción modificada</strong>";
console.log("Nuevo contenido HTML de la descripción:", descripcion.innerHTML);

// Modificar los atributos de un elemento
const entrada = document.getElementById("entrada");
entrada.setAttribute("placeholder", "Introduce un nuevo texto...");
console.log(
  "Nuevo atributo 'placeholder' de la entrada:",
  entrada.getAttribute("placeholder")
);

// ============================
// Ejemplo práctico: interacción con botones
// ============================

// Botón para cambiar contenido de los elementos de la lista
document.getElementById("boton-cambiar").addEventListener("click", () => {
  elementos.forEach((elemento, index) => {
    elemento.textContent = `Elemento modificado ${index + 1}`;
  });
  console.log("Elementos de la lista modificados.");
});

// Botón para resaltar elementos
document.getElementById("boton-resaltar").addEventListener("click", () => {
  elements.forEach((elemento) => {
    elemento.classList.add("resaltado");
  });
  console.log("Se añadieron clases de resaltado a los elementos.");
});

// Mostrar el texto introducido en el campo de entrada
entrada.addEventListener("input", () => {
  const resultado = document.getElementById("resultado");
  resultado.textContent = `Has escrito: ${entrada.value}`;
  console.log("Texto actual en el input:", entrada.value);
});

// Recorrido del DOM
// Acceder a los hijos de un elemento
let lista = document.getElementById("lista");
for(let i=0; i<lista.children.length; i++) {
    console.log("Elemento hijo:", lista.children[i]);
}

console.log(lista.nextSibling); // este recorre el arbol html completo
console.log(lista.nextElementSibling); // este recorre solo los elementos del arbol
console.log(lista.previousElementSibling);

// ========================
// Manipulación de Atributos
// ========================
// const titulo = document.getElementById("titulo");

// hasAttribute: Comprueba si el elemento tiene un atributo
console.log("¿Tiene el atributo 'data-curso'? ", titulo.hasAttribute("data-curso"));

// getAttribute: Obtiene el valor de un atributo
const dataCurso = titulo.getAttribute("data-curso");
console.log("Valor del atributo 'data-curso': ", dataCurso);

// setAttribute: Modifica o agrega un atributo
titulo.setAttribute("data-version", "1.0");
console.log("Atributo 'data-version' agregado con valor: ", titulo.getAttribute("data-version"));

// removeAttribute: Elimina un atributo
titulo.removeAttribute("data-curso");
console.log("¿Atributo 'data-curso' eliminado?: ", !titulo.hasAttribute("data-curso"));

// ========================
// Manipulación de Estilos y Propiedades CSS
// ========================
const botonEstilos = document.getElementById("boton-estilos");
botonEstilos.addEventListener("click", () => {
  // Cambiar estilo directamente
  titulo.style.fontSize = "3rem";
  titulo.style.textTransform = "uppercase";

  // Usar la lista de estilos classList y sus métodos
  if (!titulo.classList.contains("highlight")) {
    titulo.classList.add("highlight"); // Agregar una clase
    console.log("Clase 'highlight' agregada al título.");
  } else {
    titulo.classList.remove("highlight"); // Eliminar una clase
    console.log("Clase 'highlight' eliminada del título.");
  }

  console.log("Estilos CSS modificados.");
});

// ==================================
// Manipulación de Elementos del DOM
// ==================================

const btnCrear = document.getElementById("btn-crear");
const btnModificar = document.getElementById("btn-modificar");
const btnEliminar = document.getElementById("btn-eliminar");

// Crear un nuevo nodo y añadirlo al DOM
btnCrear.addEventListener("click", () => {
  // Crear un nuevo elemento <li>
  const nuevoElemento = document.createElement("li");
  // Obtener el valor del input
  const textoLi = entrada.value;
  // Añadir el texto dentro del elemento
  nuevoElemento.textContent = textoLi;
  // Añadir el elemento al final de la lista
  lista.appendChild(nuevoElemento);
  console.log(`Se ha añadido "${textoLi}" a la lista.`);
});

// Añadir nuevo nodo con insertBefore
btnCrear.addEventListener("click", () => {
  // Crear un nuevo elemento <li>
  const nuevoElemento = document.createElement("li");
  const textoLi = entrada.value;
  nuevoElemento.textContent = textoLi;
  // Insertar el nuevo elemento antes del hijo que seleccionemos
  lista.insertBefore(nuevoElemento, lista.children[2]);
});

// Eliminar un nodo del DOM
// Eliminamos el último <li> de la lista.
btnEliminar.addEventListener("click", () => {
  const ultimoElemento = lista.lastElementChild;
  if (!ultimoElemento) {
    console.warn("No hay elementos para eliminar.");
    return;
  }

  lista.removeChild(ultimoElemento);
  console.log("Se ha eliminado el último elemento de la lista.");
});

// Modificar un nodo del DOM
// Modificamos el primer <li> de la lista.
btnModificar.addEventListener("click", () => {
  const primerElemento = lista.firstElementChild;
  if (!primerElemento) {
    console.warn("No hay elementos para modificar.");
    return;
  } 
  const nuevoNombre = entrada.value;
  primerElemento.textContent = nuevoNombre;
  console.log(`El primer elemento ha sido modificado a "${nuevoNombre}".`);
});

// ========================
// Manipulación de Cookies
// ========================

// Crear una cookie
document.cookie = "usuario=Estudiante; max-age=60; path=/";
document.cookie = "idioma=es; expires=Fri, 3 Dec 2025 23:59:59 GMT";
document.cookie = "tema=claro";

const botonCookies = document.getElementById("boton-cookies");
botonCookies.addEventListener("click", () => {
  // Modificar una cookie
  document.cookie = "usuario=Estudiante; max-age=3600; path=/";
  console.log("Cookie creada: ", document.cookie);

  // Leer las cookies actuales. Devuelve una cadena con todas las cookies separadas por ; donde cada cookie es un par clave=valor
  const cookies = document.cookie;
  console.log("Cookies actuales: ", cookies);

  // Borrar una cookie
  document.cookie = "usuario=; max-age=0; path=/";
  console.log("Cookie 'usuario' eliminada.");
});

// Ejercicio cookie count

let cont = 0;
// Función para obtener el valor de una cookie por su nombre
function getCookie(name) {
  const cookies = document.cookie.split("; "); // Divide las cookies en un array
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split("="); // Divide el nombre y el valor de cada cookie
    if (cookie[0] === name) {
      return cookie[1]; // Devuelve el valor de la cookie si el nombre coincide
    }
  }
  return null; // Devuelve null si no encuentra la cookie
}

if (getCookie("contador") === null) {
  document.cookie = "contador=0";
}
else {
  cont = parseInt(getCookie("contador"));
}
if (cont > 0) {
  let bienvenida = document.getElementById("bienvenida");
  bienvenida.textContent = `Bienvenido de nuevo! Has visitado esta página ${cont + 1} veces.`;
}
cont += 1;
document.cookie = `contador=${cont}`;
console.log(`Esta página se ha cargado ${cont} veces.`);
