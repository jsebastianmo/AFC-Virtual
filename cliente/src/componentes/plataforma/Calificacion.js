import { useEffect, useState } from "react";
import Selector from "../General/Selector";
import Table from "../General/Table";

const Calificacion = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
  const [tipo, setTipo] = useState("");

  const estudiantes = [
    { id: "1", nombre: "Nombre 1", apellido: "apellido 1", nota: "5" },
    { id: "2", nombre: "Nombre 2", apellido: "apellido 2", nota: "4" },
    { id: "3", nombre: "Nombre 3", apellido: "apellido 3", nota: "3" },
    { id: "4", nombre: "Nombre 4", apellido: "apellido 4", nota: "1" },
    { id: "5", nombre: "Nombre 5", apellido: "apellido 1", nota: "" },
    { id: "6", nombre: "Nombre 6", apellido: "apellido 2", nota: "" },
    { id: "7", nombre: "Nombre 7", apellido: "apellido 3", nota: "5" },
    { id: "8", nombre: "Nombre 8", apellido: "apellido 4", nota: "5" },
    { id: "9", nombre: "Nombre 9", apellido: "apellido 1", nota: "" },
    { id: "10", nombre: "Nombre 10", apellido: "apellido 2", nota: "4.5" },
    { id: "11", nombre: "Nombre 11", apellido: "apellido 3", nota: "4.5" },
    { id: "12", nombre: "Nombre 12", apellido: "apellido 4", nota: "5" },
    { id: "13", nombre: "Nombre 13", apellido: "apellido 1", nota: "5" },
    { id: "14", nombre: "Nombre 14", apellido: "apellido 2", nota: "5" },
    { id: "15", nombre: "Nombre 15", apellido: "apellido 3", nota: "5" },
    { id: "16", nombre: "Nombre 16", apellido: "apellido 4", nota: "5" },
    { id: "17", nombre: "Nombre 17", apellido: "apellido 5", nota: "4.0" },
    { id: "18", nombre: "Nombre 18", apellido: "apellido 5", nota: "4.0" },
    { id: "19", nombre: "Nombre 19", apellido: "apellido 1", nota: "4.0" },
    { id: "20", nombre: "Nombre 20", apellido: "apellido 2", nota: "4.0" },
    { id: "21", nombre: "Nombre 21", apellido: "apellido 3", nota: "5" },
    { id: "22", nombre: "Nombre 22", apellido: "apellido 4", nota: "5" },
    { id: "23", nombre: "Nombre 23", apellido: "apellido 5", nota: "4.5" },
    { id: "24", nombre: "Nombre 24", apellido: "apellido 5", nota: "5" },
    { id: "25", nombre: "Nombre 25", apellido: "apellido 4", nota: "5" },
    { id: "26", nombre: "Nombre 26", apellido: "apellido 3", nota: "4.0" },
    { id: "27", nombre: "Nombre 27", apellido: "apellido 2", nota: "4.0" },
    { id: "28", nombre: "Nombre 28", apellido: "apellido 1", nota: "5" },
    { id: "29", nombre: "Nombre 29", apellido: "apellido 1", nota: "4.0" },
    { id: "30", nombre: "Nombre 30", apellido: "apellido 2", nota: "4.5" },
  ];

  const [listaEstudiantes, setListaEstudiantes] = useState(estudiantes);

  useEffect(() => {
    if (opcionSeleccionada != null) {
      setTipo(opcionSeleccionada.label);
      setListaEstudiantes(
        estudiantes.filter(
          (estudiante) => estudiante.id === opcionSeleccionada.value
        )
      );
    }
  }, [opcionSeleccionada]);

  const opciones = [
    { value: "1", label: "Todas" },
    { value: "2", label: "Actividad lectura" },
    { value: "3", label: "Evaluacion clase" },
    { value: "4", label: "Lectura" },
    { value: "5", label: "Resumen" },
    { value: "6", label: "Nota" },
  ];

  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Nombre",
      accessor: "nombre",
    },
    {
      Header: "Apellido",
      accessor: "apellido",
    },
    {
      Header: "Nota",
      accessor: "nota",
      Cell: ({ row }) => (
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={row.original.nota}
            onChange={(e) => handleNotaChange(e, row.original.id)}
          />
          <label for="floatingInput">Nota</label>
        </div>
      ),
    },
  ];

  const urlAcciones = {
      entrar: "/inicio/clase",
      editar: "/inicio/clase",
      eliminar: "/inicio/clase"
  }
  

  const handleNotaChange = (e, id) => {
    console.log(e, id);
  };
  return (
    <section className="container mt-5">
      <Selector
        opciones={opciones}
        placeholder="Filtrar por nota"
        selectedOption={opcionSeleccionada}
        setSeleccion={setOpcionSeleccionada}
      />
      <h1> {tipo} </h1>
      <Table columns={columns} data={listaEstudiantes} urlAcciones={urlAcciones}/>
    </section>
  );
};

export default Calificacion;
