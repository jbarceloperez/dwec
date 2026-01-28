import { useState } from "react";

export function FormularioSaludo() {

    const [nombre, setNombre] = useState("");

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        alert(`Hola usuario ${nombre}`);
    }

    const actualizarNombre = (evento) => {
        setNombre(evento.target.value);
    }

    return(
        <form onSubmit={manejarEnvio}>
            <label>
                Nombre:
                <input type="text" 
                onChange={actualizarNombre}/>
            </label>
            <button type="submit">Enviar</button>
        </form>
    )
}