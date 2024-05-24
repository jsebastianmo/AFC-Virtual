import React from 'react'
import { NavLink } from 'react-router-dom'

const CardPeriodo = ({ periodo, index }) => {
  return (
    <div className="card modulo">
      <img src={`https://picsum.photos/200/300?${index}`} className="card-img-top" alt="imagen" />
      <div className="content card-body">
        <h5 className="card-title"> { periodo.nombre } </h5>
        <div className='acciones'>
            <NavLink to="informacion/teologia" className="btn btn-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Ver periodo">
              <i className="bi bi-box-arrow-right"></i>
              <span className='tooltip-nav'> Ver periodo </span>
            </NavLink>
        </div>
      </div>
    </div>
  )
}

export default CardPeriodo