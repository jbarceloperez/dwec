import { useState } from "react";

export function ListaTareas() {

    const [nuevaTarea, setNuevaTarea] = useState("");
    const [tareas, setTareas] = useState([]);

    // let tareas = [];

    const actualizarNuevaTarea = (evento) => {
        setNuevaTarea(evento.target.value);
    }

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        setTareas([...tareas, nuevaTarea])
        console.log(tareas);
    }

    return (
        <div>
            <h2>Lista de Tareas</h2>
            <form onSubmit={manejarEnvio}>
                <label>Nueva tarea: 
                    <input type="text"
                    onChange={actualizarNuevaTarea}/>
                </label>
                <button type="submit">Añadir Tarea</button>
            </form>
            <br />
            <ul>
                {tareas.map((tarea) => <li>-{tarea}</li>)}
            </ul>
        </div>
    )
}