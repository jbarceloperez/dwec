export function ListaAlumnos({alumnos=[], clase}) {

    // const alumnos = ["Javi", "David", "Antonio"];

    return (
        <div>
            <h2>Lista de alumnos de la clase de {clase}:</h2>
            <ul>
                {alumnos.map((alumno) => <li>-{alumno}</li>)}
            </ul>
        </div>
    )
}