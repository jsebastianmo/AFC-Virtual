import React, { useEffect, useRef, useState } from "react";
import useCursos from "../../hooks/useCursos";
import Selector from "../General/Selector";
import usePeriodos from "../../hooks/usePeriodos";
import CardCurso from "./CardCurso";
import Table from "../General/Table";
import useProfesores from "../../hooks/useProfesores";

const DashboardCurso = () => {
  const [tipo, setTipo] = useState("Modulos");
  const { periodosSelect, periodos } = usePeriodos();
  const { profesoresSelect, profesores } = useProfesores();
  const { cursos, agregar } = useCursos();
  const [opcionSeleccionadaPeriodo, setOpcionSeleccionadaPeriodo] =
    useState(null);
  const [opcionSeleccionadaProfesor, setOpcionSeleccionadaProfesor] =
    useState(null);
  const [opcionSeleccionadaPeriodoModal, setOpcionSeleccionadaPeriodoModal] =
    useState(null);
  const [opcionSeleccionadaProfesorModal, setOpcionSeleccionadaProfesorModal] =
    useState(null);
  const [listaCursos, setListaCursos] = useState(cursos);
  const [vista, setVista] = useState(1);
  const [ nombreCurso, setNombreCurso ] = useState("");
  const [ mensaje_error, setMensaje_error ] = useState("");

  useEffect(() => {
    if (opcionSeleccionadaPeriodo != null) {
      setOpcionSeleccionadaProfesor(null);
      setTipo(opcionSeleccionadaPeriodo.label);
      setListaCursos(
        cursos.filter(
          (curso) => curso.IdPeriodo === opcionSeleccionadaPeriodo.value
        )
      );
    }
  }, [opcionSeleccionadaPeriodo]);

  useEffect(() => {
    if (opcionSeleccionadaProfesor != null) {
      setOpcionSeleccionadaPeriodo(null);
      setTipo(opcionSeleccionadaProfesor.label);
      setListaCursos(
        cursos.filter(
          (curso) => curso.idProfesor === opcionSeleccionadaProfesor.value
        )
      );
    }
  }, [opcionSeleccionadaProfesor]);

  const handleDisable = () => {
    setOpcionSeleccionadaPeriodo(null);
    setOpcionSeleccionadaProfesor(null);
    setListaCursos(cursos);
    setTipo("Modulos");
  };

  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Curso",
      accessor: "curso",
    },
    {
      Header: "Periodo",
      accessor: "periodo",
    },
    {
      Header: "Profesor",
      accessor: "profesor",
    },
  ];

  const handleVista = (vista) => {
    switch (vista) {
      case 1:
        setVista(1);
        break;
      case 2:
        setVista(2);
        break;

      default:
        break;
    }
  };

  const urlAcciones = {
    entrar: "/inicio/informacion/teologia",
    editar: "/inicio/informacion/teologia",
    eliminar: "/inicio/informacion/teologia",
  };

  const handleCancelarCreaCurso = () => {
    setMensaje_error("");
    setNombreCurso("");
    setOpcionSeleccionadaPeriodoModal(null);
    setOpcionSeleccionadaProfesorModal(null);
  }

  const handleGuardarCreaCurso = () => {
    let modal = document.getElementById("modalCrearCurso");
    let backdrop = document.getElementsByClassName("modal-backdrop")[0];
    if (opcionSeleccionadaPeriodoModal != null && opcionSeleccionadaProfesorModal != null && !(nombreCurso.trim() === '')) {
      const cursoObjeto = {
        id: cursos.length,
        curso: nombreCurso,
        periodo: opcionSeleccionadaPeriodoModal.label,
        IdPeriodo: opcionSeleccionadaPeriodoModal.value,
        idProfesor: opcionSeleccionadaProfesorModal.value,
        profesor: opcionSeleccionadaProfesorModal.label
      }
      console.log(cursoObjeto);
      setNombreCurso("");
      setOpcionSeleccionadaPeriodoModal(null);
      setOpcionSeleccionadaProfesorModal(null);
      modal.classList.remove("show");
      backdrop.classList.remove("show");
      // agregar
    }else{
      setMensaje_error("Debe completar todos los campos");
    }
  } 

  return (
    <section className="dashboard-curso">
      <h1> {tipo} </h1>
      <section className="controles-dashboard">
        <div className="selectores-dashboard">
          <Selector
            opciones={periodosSelect}
            placeholder="Periodos"
            selectedOption={opcionSeleccionadaPeriodo}
            setSeleccion={setOpcionSeleccionadaPeriodo}
          />
          <Selector
            opciones={profesoresSelect}
            placeholder="Profesores"
            selectedOption={opcionSeleccionadaProfesor}
            setSeleccion={setOpcionSeleccionadaProfesor}
          />
        </div>
        <div className="tipos">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              autoComplete="on"
              defaultChecked
              onClick={() => handleVista(1)}
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio2">
              <i className="bi bi-grid-fill"></i>
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              autoComplete="on"
              onClick={() => handleVista(2)}
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio1">
              <i className="bi bi-list-task"></i>
            </label>
          </div>
        </div>
      </section>
      <section className="d-flex gap-5">
        <button
          className="btn btn rounded mt-3 filtro text-white"
          data-bs-toggle="modal"
          data-bs-target="#modalCrearCurso"
        >
          Crear Curso
        </button>
        <button
          className="btn btn rounded mt-3 filtro text-white"
          onClick={handleDisable}
          disabled={tipo === "Modulos"}
        >
          Limpiar Filtro
        </button>
      </section>
      <section className="modulos">
        {vista === 1 ? (
          <>
            {listaCursos.length === 0 ? (
              <h1> Sin cursos por mostrar </h1>
            ) : (
              listaCursos.map((curso, index) => (
                <CardCurso curso={curso} index={index} key={curso.id} />
              ))
            )}
          </>
        ) : (
          <Table
            columns={columns}
            data={listaCursos}
            urlAcciones={urlAcciones}
          />
        )}
      </section>

      <div
        className="modal fade"
        id="modalCrearCurso"
        tabIndex="-1"
        aria-labelledby="crearCursoLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="crearCursoLabel">
                Crear Curso
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={()=>handleCancelarCreaCurso}
              ></button>
            </div>
            <div className="modal-body">
              <h1 className="fs-4 text-danger"> { mensaje_error } </h1> 
              <br />
              <form className="row g-3 needs-validation" noValidate onClick={() => setMensaje_error("")}>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingInput" placeholder="nombre del curso" value={nombreCurso} onChange={(e) => setNombreCurso(e.target.value)} required/>
                  <label htmlFor="floatingInput">Nombre del curso</label>
                </div>
                  <Selector
                    opciones={periodosSelect}
                    placeholder="Periodos"
                    selectedOption={opcionSeleccionadaPeriodoModal}
                    setSeleccion={setOpcionSeleccionadaPeriodoModal}
                    id="floatingPeriodo"
                  />
                  <Selector
                    opciones={profesoresSelect}
                    placeholder="Profesores"
                    selectedOption={opcionSeleccionadaProfesorModal}
                    setSeleccion={setOpcionSeleccionadaProfesorModal}
                    id="floatingProfesor"
                  />
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleCancelarCreaCurso}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleGuardarCreaCurso}
              >
                Crear Curso
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardCurso;
