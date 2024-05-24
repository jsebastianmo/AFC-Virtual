import { NavLink } from 'react-router-dom';

const CardCurso = ({curso, index}) => {
  return (
    <div className="card modulo">
      <img src={`https://picsum.photos/200/300?${index}`} className="card-img-top" alt="imagen" />
      <div className="content card-body">
        <div className='control-header-card d-flex justify-content-center align-items-center gap-2'>
          <h5 className="card-title"> { curso.curso } </h5>
          <i className="bi bi-pencil"></i>
        </div>
        <div className='acciones'>
            <NavLink to="informacion/teologia" className="btn btn-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar">
              <i className="bi bi-box-arrow-right"></i>
              <span className='tooltip-nav'> Entrar </span>
            </NavLink>
            <NavLink to="inicio" className="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas">
              <i className="bi bi-journal-check"></i>
              <span className='tooltip-nav'> Tareas </span>
            </NavLink>
            <NavLink to="estudiantes/teologia" className="btn btn-warning" data-bs-toggle="tooltip" data-bs-placement="top" title="Estudiantes">
              <i className="bi bi-list-ol"></i>
              <span className='tooltip-nav'> Estudiantes </span>
            </NavLink>
        </div>
      </div>
      
      {/* Modal editar */}
      <div
        className="modal fade"
        id="modalEditarCurso"
        tabIndex="-1"
        aria-labelledby="crearEditarLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="crearEditarLabel">
                Editar Curso
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={()=>handleCancelareditarCurso}
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
                    id="floatingPeriodoE"
                  />
                  <Selector
                    opciones={profesoresSelect}
                    placeholder="Profesores"
                    selectedOption={opcionSeleccionadaProfesorModal}
                    setSeleccion={setOpcionSeleccionadaProfesorModal}
                    id="floatingProfesorE"
                  />
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={()=>handleCancelarCreaCurso}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={()=>handleGuardarCreaCurso}
              >
                Editar Curso
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardCurso;