import { useState } from 'react';
import DashboardCurso from './DashboardCurso';
import DashboardProfesores from './DashboardProfesores';
import DashboardPeriodos from './DashboardPeriodos';

const Dashboard = () => {

  const [ vista, setVista ] = useState("cursos");

  return (
    <section className='dashboard'>
      <ul className="nav nav-pills mb-5">
        <li className={ vista === "cursos" ? "nav-link dashboard-activo" : "nav-link"} onClick={()=>{setVista("cursos")}}>
          <span className="nav-link" href="#">Cursos</span>
        </li>
        <li className={ vista === "profesores" ? "nav-link dashboard-activo" : "nav-link"} onClick={()=>{setVista("profesores")}}>
          <span className="nav-link" href="#">Profesores</span>
        </li>
        <li className={ vista === "periodos" ? "nav-link dashboard-activo" : "nav-link"} onClick={()=>{setVista("periodos")}}>
          <span className="nav-link" href="#">Periodos</span>
        </li>
      </ul>
      {
        vista === "cursos" && (<DashboardCurso />)
      }
      {
        vista === "profesores" && (<DashboardProfesores />)
      }
      {
        vista === "periodos" && (<DashboardPeriodos />)
      }
    </section>
  )
}

export default Dashboard;