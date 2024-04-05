import { useState } from "react";
import ResourceList from "../../General/ResourceList";

const RecursosClase = () => {

  const [ recursos, setRecursos ] = useState([
    { name: 'Recurso 1', type: 'pdf' },
    { name: 'Recurso 2', type: 'excel' },
    { name: 'Recurso 3', type: 'word' },
    { name: 'Recurso 4', type: 'video' },
    { name: 'Recurso 5', type: 'imagen' },
  ])

  return (
    <section className="contenido-clase">
        <div className="recursos-clase">
          <h1 className="fs-3">Lista de Recursos</h1>
          <ResourceList recursos={recursos} />
        </div>
    </section>
  )
}

export default RecursosClase;