import React from 'react'

const BuscadorCursos = () => {
  return (
    <section className='buscador mt-5 pt-5 pb-5'>
        <section className='container'>
            <h1 className='text-center mb-5'> Buscar por cursos </h1>
            <form className='d-flex gap-2'>
                <select className="form-select select text-muted">
                    <option defaultValue={0}>Categoria</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select className="form-select select text-muted">
                    <option defaultValue={0}>Costo Curso</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select className="form-select select text-muted">
                    <option defaultValue={0}>Buscar texto</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <button type="submit" className="btn btn-warning">Buscar</button>
            </form>
        </section>
    </section>
  )
}

export default BuscadorCursos;