import { Button } from "./components/Button.jsx";
import { Contador } from "./components/Contador.jsx";
import { Separador } from "./components/Separador.jsx";
import { ListaAlumnos } from "./components/ListaAlumnos.jsx";
import { FormularioSaludo } from "./components/FormularioSaludo.jsx";
import { ListaTareas } from "./components/ListaTareas.jsx";
import { Modal } from "./components/Modal.jsx";
import { useState } from "react";
import './App.css';

export function App() {

  const [showModal, setShowModal] = useState(false);

  const hideModal = () => {
    setShowModal(false);
  }

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
    <button onClick={() => setShowModal(true)}>Mostrar modal</button>
    <Modal isOpen={showModal} onClose={hideModal}>
      <h3>Este es un modal</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, qui neque earum vel corrupti quam incidunt necessitatibus dolore! Doloribus sapiente eos explicabo, qui in voluptatum vel excepturi eveniet impedit inventore?</p>
      <ul key={1}>
        <li>Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
      </ul>
    </Modal>

    <br /><br /><br /><br />
  </>)
}
