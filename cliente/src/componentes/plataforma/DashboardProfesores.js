import React, { useState } from 'react';
import Table from '../General/Table';
import useProfesores from '../../hooks/useProfesores';
import CardProfe from './CardProfe';

const DashboardProfesores = () => {
    const { profesores } = useProfesores();
    const [ listaProfesores, setListaProfesores ] = useState(profesores);
    const [ vista, setVista ] = useState(1);
    
      const columns = [
        {
          Header: 'ID',
          accessor: 'id',
        },
        {
          Header: 'Nombre',
          accessor: 'nombre',
        },
        {
          Header: 'Apellido',
          accessor: 'apellido',
        }
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
      }
    
      const urlAcciones = {
        entrar: "/inicio/informacion/teologia",
        editar: "/inicio/informacion/teologia",
        eliminar: "/inicio/informacion/teologia"
      }

  return (
    <section className='dashboard-curso'>
        <h1> Profesores </h1>
      <section className='controles-dashboard'>
        <div className='tipos'>
          <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="on" defaultChecked onClick={() => handleVista(1)}/>
            <label className="btn btn-outline-primary" htmlFor="btnradio2"><i className="bi bi-grid-fill"></i></label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="on" onClick={() => handleVista(2)}/>
            <label className="btn btn-outline-primary" htmlFor="btnradio1"><i className="bi bi-list-task"></i></label>
          </div>
        </div>
      </section>
      <section className='modulos'>
        {
          vista === 1
          ?
          (
            <>
              {
                listaProfesores.length === 0
                ? (<h1> Sin Profesores por mostrar </h1>)
                :
                    listaProfesores.map((profesor, index) => (
                    <CardProfe profesor={profesor} index={index} key={profesor.id}/>
                  ))
              }
            </>
          )
          :
          (
            <Table columns={columns} data={listaProfesores} urlAcciones={urlAcciones}/>
          )
        }
      </section>
    </section>
  )
}

export default DashboardProfesores;