document.getElementById("btn").addEventListener("click", () => {
    location.assign("https://www.freecodecamp.org/espanol/news/programacion-asincrona-en-javascript-guia-para-principiantes/");
});


/*
En JavaScript, el código generalmente se ejecuta de forma secuencial y bloqueante.
Esto significa que si una tarea toma mucho tiempo, el código posterior no se ejecuta hasta que esa tarea termina.
A continuación, mostramos un ejemplo de una función bloqueante.
*/

function funcionBloqueante() {
    const inicio = Date.now();
    let tiempo = 0;
    while (tiempo < 3000) { // Bucle que "bloquea" durante 3 segundos
        tiempo = Date.now() - inicio;
    }
    console.log("La función bloqueante ha terminado.");
}

console.log("Inicio del código.");
funcionBloqueante();
console.log("Esto no se muestra hasta que la función bloqueante termina.");

/*
En el ejemplo anterior, la función bloqueante detiene el flujo del programa,
evita que el usuario interactúe y no permite que otras tareas continúen hasta que finaliza.
Esto es ineficiente y debe evitarse.
*/

// ========================================
// SOLUCIÓN: USO DE setTimeout PARA ASINCRONÍA
// ========================================

/*
En lugar de bloquear el código, podemos usar funciones asíncronas, como `setTimeout`,
para ejecutar tareas después de un periodo de tiempo sin bloquear la ejecución.
*/

function funcionAsincrona() {
    setTimeout(() => {
        console.log("La función asíncrona ha terminado.");
    }, 3000); // Ejecuta el código después de 3 segundos
}

console.log("Inicio del código.");
funcionAsincrona();
console.log("Esto se muestra inmediatamente, sin esperar los 3 segundos.");

/*
En este caso, `setTimeout` permite continuar con la ejecución del código principal,
mientras la tarea de 3 segundos se ejecuta en segundo plano.
*/

// ============================
// USO DE CALLBACKS
// ============================

/*
Los callbacks son funciones que se pasan como parámetros a otras funciones y se ejecutan
cuando una tarea asíncrona ha finalizado.
*/

function realizarTarea(tiempo, callback) {
    setTimeout(() => {
        console.log(`Tarea realizada en ${tiempo} ms`);
        callback(); // Llamada al callback una vez que la tarea ha terminado
    }, tiempo);
}

console.log("Inicio de tareas");
realizarTarea(1000, () => {
    console.log("Primera tarea completada");
    realizarTarea(2000, () => {
        console.log("Segunda tarea completada");
    });
});

console.log("Fin de las tareas de blablalba");

/*
Este patrón permite manejar tareas asíncronas de manera secuencial.
Cuando la primera tarea termina, se ejecuta el callback para la segunda tarea.
*/

// =============================
// CALLBACK HELL (Infierno de Callbacks)
// =============================

/*
El "callback hell" ocurre cuando hay demasiados callbacks anidados,
lo que hace que el código sea difícil de leer y mantener.
*/

console.log("Inicio de tareas anidadas");
realizarTarea(1000, () => {
    console.log("Primera tarea completada");
    realizarTarea(1000, () => {
        console.log("Segunda tarea completada");
        realizarTarea(1000, () => {
            console.log("Tercera tarea completada");
            realizarTarea(1000, () => {
                console.log("Cuarta tarea completada");
            });
        });
    });
});
console.log("Fin de las tareas anidadas");

/*
Este código es difícil de leer y propenso a errores.
Para resolver este problema, se introdujeron las Promesas y posteriormente async/await.
Pero primero es importante entender por qué los callbacks pueden ser problemáticos.
*/

// Nuevo concepto: PROMESAS

/*
Una Promesa (Promise) en JavaScript representa una operación que aún no se ha completado,
pero se espera que lo haga en el futuro. Una promesa tiene tres posibles estados:
- `pending` (pendiente)
- `fulfilled` (cumplida)
- `rejected` (rechazada)
*/

let myPromise = new Promise((resolve, reject) => {});
console.log(myPromise); // Promise pendiente

// La promesa tiene un estado pendiente y un valor indefinido.

myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("¡Saludos desde la promesa!");
    }, 2000);
});

console.log(myPromise);

// Ahora la promesa tiene un estado fullfilled y un valor definido.
// Las promesas pueden estar pending, fullfilled o rejected

/*
Una promesa recibe una función con dos argumentos: `resolve` y `reject`.
- `resolve` se llama cuando la operación es exitosa.
- `reject` se llama cuando hay un error.
 
Adjuntar callbacks a una promesa: Una vez que tienes una referencia, 
puedes adjuntar funciones de callback utilizando los métodos .then y 
.catch. El método .then se llama cuando una promesa se cumple y el 
método .catch se llama cuando una promesa se rechaza. También se puede
añadir el método finally() para ejecutar código después de que la 
promesa se resuelva o se rechace.
*/

myPromise
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    //aquí va el código que será ejecutado independientemente de que la promesa se cumpla o se rechace. 
  });

/*
En este ejemplo, cada tarea se encadena usando `then()`, lo que permite
una estructura de código mucho más legible y mantenible.
Si ocurre algún error, `catch()` lo captura.
*/

// Ahora vamos a ver el ejemplo anterior de callback hell pero con promesas

console.log("Inicio de tareas con promesas");

function tareaAsincrona(tiempo) {
    return new Promise((resolve) => {
        if (tiempo < 1000) {
            throw new Error("Error: El tiempo debe ser mayor o igual a 1000 ms");
        }
        setTimeout(() => {
            console.log(`Tarea completada en ${tiempo} ms`);
            resolve(); // Llamamos a `resolve` cuando la tarea termina
        }, tiempo);
    });
}

tareaAsincrona(1000)
    .then(() => tareaAsincrona(1001))
    .then(() => tareaAsincrona(1002))
    .then(() => tareaAsincrona(993))
    .then(() => console.log("Todas las tareas completadas"))
    .catch((error) => console.error("Error:", error));

// console.log("Tareas promesas");

// Al trabajar con varias promesas a la vez, puedo querer esperar a que 
// todas se resuelvan antes de continuar con el código. Para eso, se usa
// el método Promise.all().

let promesa1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
let promesa2 = fetch('https://jsonplaceholder.typicode.com/posts/2');
let promesa3 = fetch('https://jsonplaceholder.typicode.com/posts/3');

Promise.all([promesa1, promesa2, promesa3])
.then(respuestas => {
    console.log('Todas las promesas se han cumplido:', respuestas);
})
.catch(error => {
    console.error('Error en alguna de las promesas:', error);
});

// async Y await
/*
Las funciones `async` permiten escribir código asíncrono que parece síncrono,
haciendo que trabajar con Promesas sea más simple y limpio.
- Una función marcada como `async` devuelve siempre una Promesa.
- El operador `await` se usa dentro de funciones `async` para "esperar"
  a que una Promesa se resuelva.

Esto elimina la necesidad de anidar múltiples `then()` y mejora la legibilidad.
*/

// Ejemplo básico: una función que retorna una Promesa
function tareaAsincronaSimple(tiempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Tarea completada en ${tiempo} ms`);
        }, tiempo);
    });
}

// Definición de una función `async`
async function ejecutarTareas() {
    console.log("Inicio de la función `async`");

    // Espera a que la primera promesa se resuelva
    const resultado1 = await tareaAsincronaSimple(1000);
    console.log(resultado1);

    // Espera a que la segunda promesa se resuelva
    const resultado2 = await tareaAsincronaSimple(2000);
    console.log(resultado2);

    console.log("Todas las tareas completadas.");
}

ejecutarTareas();
console.log("Post-Funcion async")

/*
El uso de `await` permite ejecutar el código de manera secuencial,
sin necesidad de encadenar múltiples `then()`.
*/

// ===============================
// MANEJO DE ERRORES CON `try/catch`
// ===============================

/*
Las funciones `async` pueden usar `try/catch` para manejar errores,
similar al manejo de excepciones en código síncrono. Si una Promesa es 
rechazada, await lanza una excepciónque puede ser capturada con try/catch.
*/

async function ejecutarConErrores() {
    try {
        console.log("Iniciando tarea con posible error");

        // Simulación de una tarea que falla
        const resultado = await new Promise((_, reject) =>
            setTimeout(() => reject("Error en la tarea"), 1500)
        );

        console.log(resultado); // No se ejecutará si hay un error

    } catch (error) {
        console.error("Capturado en `catch`: ", error);
    }
}

ejecutarConErrores();

