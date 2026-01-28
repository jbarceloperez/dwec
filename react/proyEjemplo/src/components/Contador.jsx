import { useState } from "react";

export function Contador() {

    const [contador, setContador] = useState(0);

    const addContador = () => {
        setContador(contador + 1);
    }

    const restarContador = () => {
        setContador(contador -1);
    }

    return (
        <div>
            <h2>Contador: {contador}</h2>
            <button onClick={addContador}>Añadir</button>
            <button onClick={restarContador}>Restar</button>
        </div>
    );
}