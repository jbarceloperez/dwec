// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
const RETARDO = 2000; // Retardo max simulado en ms

// Permite conexion desde cualquier origen (*)
app.use(cors()); 
// Permite al servidor entender JSON en el body de las peticiones
app.use(express.json()); 

// "BASE DE DATOS" SIMULADA
// Cada vez que reinicies el servidor, se vuelve a este estado inicial
let posts = [
    { id: 1, title: 'Bienvenida', content: '¡Hola a todos! Este es el primer post del servidor.' },
    { id: 2, title: 'Recordatorio', content: 'Podeis usar promesas normales o async/await en los ejercicios.' }
];

let postsCount = posts.length + 1; // Para asignar IDs únicos

// ENDPOINTS

// GET /posts - Devuelve la lista
app.get('/posts', (req, res) => {
    console.log(`📥 GET request recibido desde: ${req.ip}`);
    
    // Pequeó retardo simulado artificialmente
    setTimeout(() => {
        res.json(posts);
    },  Math.random() * RETARDO + 1000);
});

// POST /posts - Crea un nuevo post
app.post('/posts', (req, res) => {
    const { title, content } = req.body;

    console.log(`📤 POST request recibidodesde: ${req.ip}. Datos:`, req.body);

    // Validación básica
    if (!title || !content) {
        return res.status(400).json({ error: 'Faltan datos (title y content son obligatorios)' });
    }

    // Crear el nuevo objeto
    const newPost = {
        id: postsCount++,
        title,
        content
    };

    // Guardar en "base de datos"
    posts.push(newPost);

    // Responder al alumno (201 significa Created)
    // Retrasamos un poco también para dramatismo
    setTimeout(() => {
        res.status(201).json(newPost);
    }, Math.random() * RETARDO + 200);
});

// 4. INICIAR SERVIDOR
// Escucha en 0.0.0.0 para estar disponible en la red local
app.listen(PORT, '0.0.0.0', () => {
    console.log(`
    🚀 SERVIDOR FUNCIONANDO!
    --------------------------------------------------
    Escuchando peticiones en: http://localhost:${PORT}/posts
    --------------------------------------------------
    `);
});