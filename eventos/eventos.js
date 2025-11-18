
// ========================
// Introducción a Eventos
// ========================

// Escuchar un evento y propagación de eventos
const clicks = document.getElementById("contador");
let count = 0;
clicks.addEventListener("click", (event) => {
    count++;
    document.getElementById("contador").textContent = count;
    console.log("Click número: ", count);
    if (count > 4) {   
        event.stopPropagation();   // al llegar a 4 clicks, detiene la propagación de eventos
    }

}); // añadir true como ultimo argumento tras la función

let miSection = document.getElementsByTagName("section")[0];
let miP = document.getElementsByTagName("p")[1];
// // contador es el elemento span, en la variable clicks

miSection.addEventListener("click", () => {
    console.log("Click en <section>");
}); // añadir true como ultimo argumento tras la función
miP.addEventListener("click", () => {
    console.log("Click en <p>");
}); // añadir true como ultimo argumento tras la función

// Aunque haya definido primero el evento del span, luego el del section y luego el del p,
// el evento del span se ejecuta primero, luego el del p y luego el del section. Esto es
// porque se ejecutan desde dentro hacia fuera, desde el elemento más interno al más externo.

// Usando true como siguiente argumento invierto el orden de ejecución de los eventos.
// Con stopPropagation se detiene la propagación de eventos.


// stopPropagation también funciona de fuera hacia adentro
const contenedor = document.getElementById("contenedor");
const innerElement = document.getElementById("inner-element");
innerElement.addEventListener("click", (event) => {
  console.log("Evento en el elemento interno.");
  event.stopPropagation(); // Detener propagación del evento
});
contenedor.addEventListener("click", () => {
  console.log("Evento en el contenedor.");
});

// Event: Detalles del evento
innerElement.addEventListener("click", (event) => {
  console.log("Detalles del evento:");
  console.log("Tipo de evento: ", event.type);
  console.log("Elemento objetivo: ", event.target);
});

// Event: Detalles del evento
innerElement.addEventListener("mouseover", (event) => {
    console.log("Detalles del evento:");
    console.log("Tipo de evento: ", event.type);
    console.log("Elemento objetivo: ", event.target);
  });

// removeEventListener: Quitar un evento
const logEvento = () => console.log("Evento registrado.");
innerElement.addEventListener("click", logEvento);  // creamos un listener sencillito

const eliminarEvento = () => {
    innerElement.removeEventListener("click", logEvento);
    console.log("Listener eliminado del elemento interno.");
  };
setTimeout(eliminarEvento, 5000); // quitar el listener después de 5 segundos

// ========================
// Lanzar Eventos
// ========================
const botonLanzarEvento = document.getElementById("lanzar-evento");

// Crear un evento personalizado
const eventoPersonalizado = new Event("miEvento");

botonLanzarEvento.addEventListener("miEvento", (event) => {
  console.log("¡Evento personalizado lanzado!");
  console.log("Detalles del evento:");
    console.log("Tipo de evento: ", event.type);
    console.log("Elemento objetivo: ", event.target);
});

botonLanzarEvento.addEventListener("click", (event) => {
  // Lanzar el evento personalizado
  botonLanzarEvento.dispatchEvent(eventoPersonalizado);
  console.log("Detalles del evento:");
    console.log("Tipo de evento: ", event.type);
    console.log("Elemento objetivo: ", event.target);
});


setTimeout(() => {
    // Lanzar el evento personalizado
    botonLanzarEvento.dispatchEvent(eventoPersonalizado);
}, 3000); // lanzar el evento después de 3 segundos

// ===========================
// Eventos de Formularios
// ===========================

// Seleccionar formulario por su ID
const formulario = document.getElementById("formulario-ejemplo");

// Escuchar el evento submit para enviar el formulario
formulario.addEventListener("submit", function () {
  console.log("Formulario enviado con los siguientes datos:");
  console.log("Nombre: ", formulario.elements["nombre"].value);
  console.log("Email: ", formulario.elements["email"].value);
});

// Escuchar el evento reset para limpiar el formulario
formulario.addEventListener("reset", function (event) {
  // event.preventDefault(); // Evita que el formulario se reinicie
  console.log("Formulario reiniciado.");
});

// Cambiar valores de un campo de forma programática
formulario.elements["nombre"].value = "Valor predefinido";


// ===========================
// Propiedades y métodos de formularios
// ===========================

console.log("Action del formulario:", formulario.action);
console.log("Número de elementos:", formulario.length);
console.log("Elementos del formulario:", formulario.elements);

// ===========================
// Eventos del Ratón
// ===========================

const botonClick = document.getElementById("boton-click");

// eventos con clicks
botonClick.addEventListener("click", () => console.log("Click simple detectado"));
botonClick.addEventListener("dblclick", () => console.log("Doble click detectado"));
botonClick.addEventListener("mousedown", () => console.log("Botón presionado"));
botonClick.addEventListener("contextmenu", (e) => {
  e.preventDefault();   // elimina la acción del evento por defecto
  console.log("Menú contextual bloqueado.");
});

// eventos con la posición del cursor
// botonClick.addEventListener("mouseup", () => console.log("Botón liberado"));


// Diferencias entre mouseover y mouseenter
botonClick.addEventListener("mouseover", () => console.log("mouseover: entra, incluye elementos hijos"));
botonClick.addEventListener("mouseout", () => console.log("mouseout: sale, incluye elementos hijos"));

const areaRaton = document.getElementById('area-raton');

areaRaton.addEventListener('mousemove', (e) => {
    areaRaton.textContent = `Posición del ratón: X=${e.offsetX}, Y=${e.offsetY}`;
});

areaRaton.addEventListener("mouseenter", () => console.log("Cursor entra en el area"));
areaRaton.addEventListener("mouseleave", () => console.log("Cursor sale del area"));

// // Elementos coloreados
// // TODO hacer en clase

let elementos = document.getElementById('coloreados');
for (let i=0; i < elementos.children.length; i++) {
  elementos.children[i].addEventListener("mouseover", (e) => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    elementos.children[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });

  elementos.children[i].addEventListener("mouseout", (e) => {
    elementos.children[i].style.backgroundColor = "white";
  });
}


// ===========================
// Eventos del Teclado
// ===========================

const inputTexto = document.getElementById("campo-teclado");

inputTexto.addEventListener("keypress", (evento) => console.log("Tecla presionada: ", evento.key));
inputTexto.addEventListener("keydown", (evento) => console.log("Tecla abajo: ", evento.key));
inputTexto.addEventListener("keyup", (evento) => console.log("Tecla liberada: ", evento.key));

// ===========================
// Eventos de arrastrar y soltar (drag & drop)
// ===========================

// Inicio del arrastre
const elementoDraggable = document.getElementById('elemento-draggable');
const areaDrop = document.getElementById('area-drop');

elementoDraggable.addEventListener('dragstart', () => {
    console.log("Arrastre iniciado.");
    elementoDraggable.style.opacity = '0.5';
});

elementoDraggable.addEventListener('dragend', () => {
    console.log("Arrastre finalizado.");
    elementoDraggable.style.opacity = '1';
});

areaDrop.addEventListener('dragover', (e) => {
  e.preventDefault();
  areaDrop.textContent = 'Elemento pasando por encima';
});

areaDrop.addEventListener('drop', () => {
  areaDrop.textContent = 'Elemento soltado';
});


// ===========================
// Eventos de reproducción multimedia
// ===========================
const audio = document.getElementById("audio-ejemplo");

audio.addEventListener("play", () => console.log("Reproducción iniciada."));
audio.addEventListener("pause", () => console.log("Reproducción pausada."));
audio.addEventListener("ended", () => console.log("Reproducción finalizada."));

// ===========================
// Eventos extra
// ===========================

// Evento de carga de la página
window.addEventListener("load", () => console.log("La página ha terminado de cargar."));

// Evento de scroll
window.addEventListener("scroll", () => console.log("Scroll detectado."));

// Evento de redimensionamiento
window.addEventListener("resize", () => console.log("Ventana redimensionada."));

// Evento del portapapeles
window.addEventListener("copy", () => console.log("Contenido copiado al portapapeles."));
window.addEventListener("paste", () => console.log("Contenido pegado desde el portapapeles."));
window.addEventListener("cut", () => console.log("Contenido cortado al portapapeles."));

// Ejemplo scroll
const botonScroll = document.getElementById('boton-scroll');
    botonScroll.addEventListener('click', () => {
      window.scrollTo({ top: 3000, behavior: 'smooth' });
});

let botondoc = document.getElementById("boton-doc");
botondoc.addEventListener("click", () => {
  location.assign("https://www.w3schools.com/jsref/dom_obj_event.asp");
});

// Ej1
/* 
Crea una rutina que no permita que el ratón se coloque encima de una caja 
azul de 100x100 px. Cada vez que el ratón intente colocarse 
encima, la posición de la caja debe cambiar aleatoriamente por la página.
*/

// Ej2
/*
Crea una aplicación que contenga un párrafo con mucho texto. 
Debajo del párrafo debe haber un botón por cada vocal.
Al pulsar sobre una vocal, esa vocal desaparecerá del texto.
*/