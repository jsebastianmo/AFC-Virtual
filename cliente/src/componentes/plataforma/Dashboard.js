import React from 'react';
import { NavLink } from 'react-router-dom';
import Select from 'react-select';

const Dashboard = () => {

  const opcionesPeriodos = [
    { value: '1', label: 'Periodo 1' },
    { value: '2', label: 'Periodo 2' },
    { value: '3', label: 'Periodo 3' },
    { value: '4', label: 'Periodo 4' },
    { value: '5', label: 'Periodo 5' },
  ];

  const opcionesProfesores = [
    { value: '1', label: 'Laura Castañeda' },
    { value: '2', label: 'Jhon Sebastian' },
    { value: '3', label: 'lorem ipsum 1' },
    { value: '4', label: 'lorem ipsum 2' },
    { value: '5', label: 'lorem ipsum 3' },
  ];

  return (
    <section className='dashboard'>
      <h1> Módulos </h1>
      <section className='controles-dashboard'>
        <div className='selectores-dashboard'>
          <Select
            styles={{ control: (provided) => ({ ...provided, width: 170 }) }}
            className='select-dashboard'
            options={opcionesPeriodos}
            isClearable
            isSearchable // Habilita la funcionalidad de búsqueda
            placeholder="Periodo"
          />
          <Select
            styles={{ control: (provided) => ({ ...provided, width: 170 }) }}
            className='select-dashboard'
            options={opcionesProfesores}
            isClearable
            isSearchable // Habilita la funcionalidad de búsqueda
            placeholder="Profesores"
          />
        </div>
        <div className='tipos'>
          <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="on" />
            <label className="btn btn-outline-primary" htmlFor="btnradio1"><i className="bi bi-list-task"></i></label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="on" defaultChecked/>
            <label className="btn btn-outline-primary" htmlFor="btnradio2"><i className="bi bi-grid-fill"></i></label>
          </div>
        </div>
      </section>
      <section className='modulos'>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
        <div className="card modulo">
          <img src="https://picsum.photos/200/300?random" className="card-img-top" alt="imagen" />
          <div className="card-body">
            <h5 className="card-title">Laura Valentina</h5>
            <div className='acciones'>
              <NavLink to="/" className="btn btn-success rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Entrar"><i class="bi bi-box-arrow-right"></i></NavLink>
              <NavLink to="/" className="btn btn-primary rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tareas"><i class="bi bi-journal-check"></i></NavLink>
              <NavLink to="/" className="btn btn-warning rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Evaluaciones"><i class="bi bi-question-circle"></i></NavLink>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Dashboard;