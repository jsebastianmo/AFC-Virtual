import { NavLink } from "react-router-dom";

const EvaluacionesClase = () => {
  return (
    <section className="contenido-clase">
        <div className="list-group evaluaciones-clase">
          <NavLink to="/inicio/evaluacion/teologia/evaluacion1" className="list-group-item list-group-item-action" aria-current="true">
            <input className="form-check-input me-1" type="checkbox" value="" defaultChecked/>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">Some placeholder content in a paragraph.</p>
            <small>And some small print.</small>
          </NavLink>
          <NavLink to="/inicio/evaluacion/teologia/evaluacion1" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">Some placeholder content in a paragraph.</p>
            <small className="text-muted">And some muted small print.</small>
          </NavLink>
          <NavLink to="/inicio/evaluacion/teologia/evaluacion1" className="list-group-item list-group-item-action">
            <input className="form-check-input me-1" type="checkbox" value="" defaultChecked/>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">Some placeholder content in a paragraph.</p>
            <small className="text-muted">And some muted small print.</small>
          </NavLink>
        </div>
    </section>
  )
}

export default EvaluacionesClase;