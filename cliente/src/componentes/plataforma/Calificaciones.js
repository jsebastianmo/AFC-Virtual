import { useEffect, useState } from "react";
import Selector from "../General/Selector"
import Calificacion from "./Calificacion";

const Calificaciones = () => {
  const [opcionSeleccionadaMateria, setOpcionSeleccionadaMateria] = useState(null);
  const [opcionSeleccionadaPeriodo, setOpcionSeleccionadaPeriodo] = useState(null);
  const [materia, setMateria] = useState("");
  const [periodo, setPeriodo] = useState("");

  useEffect(() => {
    if (opcionSeleccionadaMateria != null) {
      setMateria(opcionSeleccionadaMateria.label);
    }
  }, [opcionSeleccionadaMateria]);

  useEffect(() => {
    if (opcionSeleccionadaMateria != null) {
      setPeriodo(opcionSeleccionadaPeriodo.label);
    }
  }, [opcionSeleccionadaPeriodo]);

  const opcionesMateria = [
    { value: "1", label: "Materia 1" },
    { value: "2", label: "Materia 2" },
    { value: "3", label: "Materia 3" },
    { value: "4", label: "Materia 4" },
    { value: "5", label: "Materia 5" },
    { value: "6", label: "Materia 6" },
  ];

  const opcionesPeriodo = [
    { value: "1", label: "Periodo 1" },
    { value: "2", label: "Periodo 2" },
    { value: "3", label: "Periodo 3" },
    { value: "4", label: "Periodo 4" },
    { value: "5", label: "Periodo 5" },
    { value: "6", label: "Periodo 6" },
  ];

  return(
    <section className="calificaciones container mt-5">
      <h1> CALIFICACIONES </h1>
      <p> No olvide seleccionar la materia y periodo del cual quiere consultar las calificaciones </p>
      <Selector
        opciones={opcionesMateria}
        placeholder="Seleccione una materia"
        selectedOption={opcionSeleccionadaMateria}
        setSeleccion={setOpcionSeleccionadaMateria}
      />
      <br />
      {
        opcionSeleccionadaMateria != null && 
        (
        <Selector
          opciones={opcionesPeriodo}
          placeholder="Seleccione un periodo"
          selectedOption={opcionSeleccionadaPeriodo}
          setSeleccion={setOpcionSeleccionadaPeriodo}
        />
        )
      }
      {
        opcionSeleccionadaPeriodo != null && 
          (
            <>
              <h1 className="fs-5 mt-4">Calificaciones: { materia } - {periodo} </h1>
              <Calificacion />
            </>
          )
      }
    </section>
  )
}
    

export default Calificaciones;