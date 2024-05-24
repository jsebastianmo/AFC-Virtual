import React, { useState } from 'react';
import Table from "../General/Table";
import { useParams } from 'react-router-dom';

const EstudiantesMateria = () => {
    const estudiantes = [
        { id: "1", nombre: "Nombre 1", apellido: "apellido 1", diagnostico: "Revisar" },
        { id: "2", nombre: "Nombre 2", apellido: "apellido 2", diagnostico: "Correcto" },
        { id: "3", nombre: "Nombre 3", apellido: "apellido 3", diagnostico: "Revisar" },
        { id: "4", nombre: "Nombre 4", apellido: "apellido 4", diagnostico: "Revisar" },
        { id: "5", nombre: "Nombre 5", apellido: "apellido 1", diagnostico: "Correcto" },
        { id: "6", nombre: "Nombre 6", apellido: "apellido 2", diagnostico: "Correcto" },
        { id: "7", nombre: "Nombre 7", apellido: "apellido 3", diagnostico: "Revisar" },
        { id: "8", nombre: "Nombre 8", apellido: "apellido 4", diagnostico: "Revisar" },
        { id: "9", nombre: "Nombre 9", apellido: "apellido 1", diagnostico: "Revisar" },
        { id: "10", nombre: "Nombre 10", apellido: "apellido 2", diagnostico: "Revisar" },
        { id: "11", nombre: "Nombre 11", apellido: "apellido 3", diagnostico: "Revisar" },
        { id: "12", nombre: "Nombre 12", apellido: "apellido 4", diagnostico: "Correcto" },
        { id: "13", nombre: "Nombre 13", apellido: "apellido 1", diagnostico: "Correcto" },
        { id: "14", nombre: "Nombre 14", apellido: "apellido 2", diagnostico: "Correcto" },
        { id: "15", nombre: "Nombre 15", apellido: "apellido 3", diagnostico: "Correcto" },
        { id: "16", nombre: "Nombre 16", apellido: "apellido 4", diagnostico: "Correcto" },
        { id: "17", nombre: "Nombre 17", apellido: "apellido 5", diagnostico: "Revisar" },
        { id: "18", nombre: "Nombre 18", apellido: "apellido 5", diagnostico: "Revisar" },
        { id: "19", nombre: "Nombre 19", apellido: "apellido 1", diagnostico: "Revisar" },
        { id: "20", nombre: "Nombre 20", apellido: "apellido 2", diagnostico: "Revisar" },
        { id: "21", nombre: "Nombre 21", apellido: "apellido 3", diagnostico: "Revisar" },
        { id: "22", nombre: "Nombre 22", apellido: "apellido 4", diagnostico: "Revisar" },
        { id: "23", nombre: "Nombre 23", apellido: "apellido 5", diagnostico: "Revisar" },
        { id: "24", nombre: "Nombre 24", apellido: "apellido 5", diagnostico: "Correcto" },
        { id: "25", nombre: "Nombre 25", apellido: "apellido 4", diagnostico: "Correcto" },
        { id: "26", nombre: "Nombre 26", apellido: "apellido 3", diagnostico: "Revisar" },
        { id: "27", nombre: "Nombre 27", apellido: "apellido 2", diagnostico: "Revisar" },
        { id: "28", nombre: "Nombre 28", apellido: "apellido 1", diagnostico: "Correcto" },
        { id: "29", nombre: "Nombre 29", apellido: "apellido 1", diagnostico: "Correcto" },
        { id: "30", nombre: "Nombre 30", apellido: "apellido 2", diagnostico: "Correcto" },
      ];
    
      const [listaEstudiantes, setListaEstudiantes] = useState(estudiantes);

      const {materia} = useParams();

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
          Header: "Diagnóstico",
          accessor: "diagnostico",
        }
    ]

    const urlAcciones = {
        entrar: "/inicio/perfil",
        editar: "/inicio/perfil",
        eliminar: "/inicio/perfil/eliminar"
    }

  return (
    <section className='estudiantesMateria container mt-5'>
        <h1> Listado de estudiantes - {materia} </h1>
        <Table columns={columns} data={listaEstudiantes} urlAcciones={urlAcciones}/>
    </section>
  )
}

export default EstudiantesMateria;