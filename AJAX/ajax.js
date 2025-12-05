// Uso de la API Fetch

// Básico: Realizar una petición GET a un servidor usando fetch
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Datos obtenidos:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

/*
Explicación:
- fetch() realiza una petición HTTP.
- Devuelve una promesa que se resuelve con un objeto Response.
- response.ok indica si la petición fue exitosa.
*/

//-----------------------------------------------------

// **Propiedades y métodos del objeto Response:**
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('Headers:', response.headers); // Headers HTTP
    console.log('Body (ReadableStream):', response.body);
    console.log('Status code:', response.status); // Código de estado
    console.log('Status text:', response.statusText);
    console.log('Request was successful:', response.ok);
    console.log('Redirected:', response.redirected);
    console.log('Final URL:', response.url);
    console.log('Response type:', response.type); // 'basic', 'cors', etc.
    return response.text();
  })
  .then(text => {
    console.log('Contenido de la respuesta:', text);
  })
  .catch(console.error);

//-----------------------------------------------------

// **Obtener respuestas en formato texto y JSON:**
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.text())
  .then(text => {
    console.log('Texto plano:', text);
  });

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(jsonData => {
    console.log('Respuesta en formato JSON:', jsonData);
  });

//-----------------------------------------------------

// **Propiedades del objeto Request:**
const request = new Request('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: new Headers({ 'Content-Type': 'application/json' }),
  body: JSON.stringify({ title: 'Nuevo Post', body: 'Contenido del post', userId: 1 })
});

console.log('URL de la petición:', request.url);
console.log('Método HTTP:', request.method);
console.log('Cabeceras:', request.headers);
console.log('Modo de petición:', request.mode);
console.log('Caché:', request.cache);

//-----------------------------------------------------

// **Modificación de cabeceras HTTP y envío de datos JSON:**
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ title: 'Hola Mundo', body: 'Este es un post de prueba', userId: 2 })
})
  .then(response => response.json())
  .then(data => {
    console.log('Respuesta del servidor:', data);
  })
  .catch(console.error);

//-----------------------------------------------------

// // **Envío de datos de un formulario:**
// const formData = new FormData();
// formData.append('nombre', 'Juan');
// formData.append('edad', 30);



//-----------------------------------------------------

// **Asincronía de fetch con async/await:**
async function obtenerDatosAsync() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    console.log('Datos obtenidos con async/await:', data);
  } catch (error) {
    console.error('Error en la petición:', error);
  }
}

obtenerDatosAsync();

//-----------------------------------------------------

// **Conclusión:**
// La API Fetch es una herramienta poderosa para realizar peticiones HTTP en JavaScript.
// Su combinación con async/await y las capacidades de manejo de cabeceras, respuestas y solicitudes personalizadas
// hacen que sea fundamental para el desarrollo web moderno.
