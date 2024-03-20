import { NavLink } from 'react-router-dom';

const CardCurso = ({curso}) => {
  return (
    <div className="card modulo">
      <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
      <div className="card-body">
        <h5 className="card-title"> { curso.nombre } </h5>
        <div className='acciones'>
          <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i className="bi bi-box-arrow-right"></i></NavLink>
          <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i className="bi bi-journal-check"></i></NavLink>
          <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i className="bi bi-question-circle"></i></NavLink>
        </div>
      </div>
    </div>
  )
}

export default CardCurso;