import { Button } from "./components/Button.jsx";
import { Contador } from "./components/Contador.jsx";
import { Separador } from "./components/Separador.jsx";
import { ListaAlumnos } from "./components/ListaAlumnos.jsx";
import { FormularioSaludo } from "./components/FormularioSaludo.jsx";
import { ListaTareas } from "./components/ListaTareas.jsx";
import './App.css';

export function App() {
  return (<>

    <h1>Aplicación React de ejemplo</h1>
    <Separador />

    <Button initIsLiked={true}>
      <strong>Me gusta esto</strong>
    </Button>
    <Button initIsLiked={false}>
      <strong>Me gusta</strong>
    </Button>
    <Button initIsLiked={false} bcolor="aquamarine">
      <strong>Me gusta</strong>
    </Button>
    <Separador />

    <Contador />
    <Separador />

    <ListaAlumnos alumnos={["María", "Judit", "Jorge", "Pedro"]} clase="IPE"></ListaAlumnos>
    <ListaAlumnos alumnos={["Javi", "Pablo", "Cristina"]} clase="Interfaces"/>
    <ListaAlumnos clase="Clase tal cual"/>
    <Separador />

    <FormularioSaludo />
    <Separador />

    <ListaTareas />
    
    <Separador />
    <br /><br /><br /><br />
  </>)
}
