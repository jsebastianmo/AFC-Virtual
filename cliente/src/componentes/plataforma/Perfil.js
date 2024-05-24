import React from 'react'

const Perfil = () => {
  return (
    <section className='perfilUsuario container mt-5'>
        <div className='foto-nombre'>
          <div className='perfilUsuario-foto'>
            <img src='/activos/perfil.jpg' alt='imagen'/>
          </div>
          <div className='perfilUsuario-nombre'>
            <span className="badge bg-primary"> Jhon Sebastian Mosquera Ocampo </span>
            <i className="bi bi-pencil" data-bs-toggle="tooltip" data-bs-placement="top" title="Editar"></i>
          </div>
        </div>
        <div className='perfilUsuario-informacion'>
          <h1> Perfil </h1>
          <form className="row g-3">
            <div className="col-md-6">
              <label for="inputNombre" className="form-label">Nombre</label>
              <input type="text" className="form-control input-group-text" id="inputNombre" />
            </div>
            <div className="col-md-6">
              <label for="inputApellido" className="form-label">Apellido</label>
              <input type="text" className="form-control input-group-text" id="inputApellido" />
            </div>
            <div className="col-md-6">
              <label for="inputZona" className="form-label">Zona Horaria</label>
              <select id="inputZona" className="form-select input-group-text">
                <option>+5 GMT</option>
                <option>+4 GMT</option>
              </select>
            </div>
            <div className="col-md-6">
              <label for="inputTelefono" className="form-label">Teléfono</label>
              <input type="number" className="form-control input-group-text" id="inputTelefono" />
            </div>
            <div className="col-12">
              <label for="inputAddress" className="form-label">Correo</label>
              <input type="email" className="form-control input-group-text" id="inputAddress" placeholder="ejemplo@ejemplo.com" />
            </div>
          </form>
        </div>
    </section>
  )
}

export default Perfil;