// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";

const TodoList = () => {

//   const [numeroTodo, setNumeroTodo] = useState(0);
//   const [numeroCurso, setNumeroCurso] = useState(0);
//   const [numeroHaciendo, setNumeroHaciendo] = useState(0);
//   const [numeroFinalizadas, setNumeroFinalizadas] = useState(0);

  // useEffect(() => {
  //   handleDrag();
  //    // Añade un event listener para actualizar la cantidad de elementos cuando ocurre un evento de "drag and drop"
  //    document.addEventListener('dragend', contarTareas);

  //    // Limpia el event listener cuando el componente se desmonta
  //    return () => {
  //      document.removeEventListener('dragend', contarTareas);
  //    };

  // }, []);

  // useEffect(() => {
  //   contarTareas();
  // }, [])

  // const handleDrag = () => {
  //   let draggedElement = null;

  //   document.querySelectorAll(".card").forEach((item) => {
  //     item.addEventListener("dragstart", function (e) {
  //       draggedElement = item;
  //       e.dataTransfer.setData("text/pain", null);
  //     });
  //   });

  //   document.querySelectorAll(".destino").forEach((destino) => {
  //     destino.addEventListener("dragover", function (e) {
  //       e.preventDefault();
  //     });
  //     destino.addEventListener("drop", function (e) {
  //       e.preventDefault();
  //       if (draggedElement && destino !== draggedElement.parentNode.parentNode) {
  //         var tasksContainer = destino.querySelector('.tasks');
  //         tasksContainer.appendChild(draggedElement);
  //       }
  //       draggedElement = null;
  //     });
  //   });
  // };

  // const contarTareas = () => {
  //   enCurso();
  //   haciendo();
  //   finalizadas();
  //   const tasksContainer = document.querySelector('.todo .tasks');
  //   if (tasksContainer) {
  //     const tasks = tasksContainer.querySelectorAll('.card');
  //     setNumeroTodo(tasks.length);
  //   }
  // }

  // const enCurso = () => {
  //   const tasksContainer = document.querySelector('.enCurso .tasks');
  //   if (tasksContainer) {
  //     const tasks = tasksContainer.querySelectorAll('.card');
  //     setNumeroCurso(tasks.length);
  //   }
  // }

  // const haciendo = () => {
  //   const tasksContainer = document.querySelector('.haciendo .tasks');
  //   if (tasksContainer) {
  //     const tasks = tasksContainer.querySelectorAll('.card');
  //     setNumeroHaciendo(tasks.length);
  //   }
  // }

  // const finalizadas = () => {
  //   const tasksContainer = document.querySelector('.finalizadas .tasks');
  //   if (tasksContainer) {
  //     const tasks = tasksContainer.querySelectorAll('.card');
  //     setNumeroFinalizadas(tasks.length);
  //   }
  // }

  return (
    // <section className="todolist">
    //   <section className="list todo">
    //     <h1> Para hacer ({ numeroTodo }) </h1>
    //     <div className="tasks">
    //       <div className="card shadow">
    //         <div className="card-body">
    //           <h5 className="card-title">Titulo de la actividad</h5>
    //           <h6 className="card-subtitle mb-2 text-muted">
    //             Fecha entrega: 20/05/2024
    //           </h6>
    //           <p className="card-text">
    //             Quedan 5 días para que la tarea finalice
    //           </p>
    //           <div className="acciones-tarea">
    //             <NavLink to="/">
    //               <i className="bi bi-eye"></i>
    //             </NavLink>
    //             <NavLink to="/">
    //               <i className="bi bi-chat"></i> <span>2</span>
    //             </NavLink>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="card shadow">
    //         <div className="card-body">
    //           <h5 className="card-title">Titulo de la actividad</h5>
    //           <h6 className="card-subtitle mb-2 text-muted">
    //             Fecha entrega: 20/05/2024
    //           </h6>
    //           <p className="card-text">
    //             Quedan 5 días para que la tarea finalice
    //           </p>
    //           <div className="acciones-tarea">
    //             <NavLink to="/">
    //               <i className="bi bi-eye"></i>
    //             </NavLink>
    //             <NavLink to="/">
    //               <i className="bi bi-chat"></i> <span>2</span>
    //             </NavLink>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section className="list destino enCurso" id="dest1">
    //     <h1> En curso ({ numeroCurso }) </h1>
    //     <div className="tasks">
    //       <div className="card shadow" draggable="true">
    //         <div className="card-body">
    //           <h5 className="card-title">Titulo de la actividad</h5>
    //           <h6 className="card-subtitle mb-2 text-muted">
    //             Fecha entrega: 20/05/2024
    //           </h6>
    //           <p className="card-text">
    //             Quedan 5 días para que la tarea finalice
    //           </p>
    //           <div className="acciones-tarea">
    //             <NavLink to="/">
    //               <i className="bi bi-eye"></i>
    //             </NavLink>
    //             <NavLink to="/">
    //               <i className="bi bi-chat"></i> <span>2</span>
    //             </NavLink>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section className="list destino haciendo" id="dest2">
    //     <h1> En revisión ({ numeroHaciendo }) </h1>
    //     <div className="tasks">
    //       <div className="card shadow" draggable="true">
    //         <div className="card-body">
    //           <h5 className="card-title">Titulo de la actividad</h5>
    //           <h6 className="card-subtitle mb-2 text-muted">
    //             Fecha entrega: 20/05/2024
    //           </h6>
    //           <p className="card-text">
    //             Quedan 5 días para que la tarea finalice
    //           </p>
    //           <div className="acciones-tarea">
    //             <NavLink to="/">
    //               <i className="bi bi-eye"></i>
    //             </NavLink>
    //             <NavLink to="/">
    //               <i className="bi bi-chat"></i> <span>2</span>
    //             </NavLink>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section className="list destino finalizadas" id="dest3">
    //     <h1> Finalizadas ({ numeroFinalizadas }) </h1>
    //     <div className="tasks">
    //       <div className="card shadow" draggable="true">
    //         <div className="card-body">
    //           <h5 className="card-title">Titulo de la actividad</h5>
    //           <h6 className="card-subtitle mb-2 text-muted">
    //             Fecha entrega: 20/05/2024
    //           </h6>
    //           <p className="card-text">
    //             Quedan 5 días para que la tarea finalice
    //           </p>
    //           <div className="acciones-tarea">
    //             <NavLink to="/">
    //               <i className="bi bi-eye"></i>
    //             </NavLink>
    //             <NavLink to="/">
    //               <i className="bi bi-chat"></i> <span>2</span>
    //             </NavLink>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="card shadow" draggable="true">
    //         <div className="card-body">
    //           <h5 className="card-title">Titulo de la actividad</h5>
    //           <h6 className="card-subtitle mb-2 text-muted">
    //             Fecha entrega: 20/05/2024
    //           </h6>
    //           <p className="card-text">
    //             Quedan 5 días para que la tarea finalice
    //           </p>
    //           <div className="acciones-tarea">
    //             <NavLink to="/">
    //               <i className="bi bi-eye"></i>
    //             </NavLink>
    //             <NavLink to="/">
    //               <i className="bi bi-chat"></i> <span>2</span>
    //             </NavLink>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="card shadow" draggable="true">
    //         <div className="card-body">
    //           <h5 className="card-title">Titulo de la actividad</h5>
    //           <h6 className="card-subtitle mb-2 text-muted">
    //             Fecha entrega: 20/05/2024
    //           </h6>
    //           <p className="card-text">
    //             Quedan 5 días para que la tarea finalice
    //           </p>
    //           <div className="acciones-tarea">
    //             <NavLink to="/">
    //               <i className="bi bi-eye"></i>
    //             </NavLink>
    //             <NavLink to="/">
    //               <i className="bi bi-chat"></i> <span>2</span>
    //             </NavLink>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="card shadow" draggable="true">
    //         <div className="card-body">
    //           <h5 className="card-title">Titulo de la actividad</h5>
    //           <h6 className="card-subtitle mb-2 text-muted">
    //             Fecha entrega: 20/05/2024
    //           </h6>
    //           <p className="card-text">
    //             Quedan 5 días para que la tarea finalice
    //           </p>
    //           <div className="acciones-tarea">
    //             <NavLink to="/">
    //               <i className="bi bi-eye"></i>
    //             </NavLink>
    //             <NavLink to="/">
    //               <i className="bi bi-chat"></i> <span>2</span>
    //             </NavLink>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="card shadow" draggable="true">
    //         <div className="card-body">
    //           <h5 className="card-title">Titulo de la actividad</h5>
    //           <h6 className="card-subtitle mb-2 text-muted">
    //             Fecha entrega: 20/05/2024
    //           </h6>
    //           <p className="card-text">
    //             Quedan 5 días para que la tarea finalice
    //           </p>
    //           <div className="acciones-tarea">
    //             <NavLink to="/">
    //               <i className="bi bi-eye"></i>
    //             </NavLink>
    //             <NavLink to="/">
    //               <i className="bi bi-chat"></i> <span>2</span>
    //             </NavLink>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="card shadow" draggable="true">
    //         <div className="card-body">
    //           <h5 className="card-title">Titulo de la actividad</h5>
    //           <h6 className="card-subtitle mb-2 text-muted">
    //             Fecha entrega: 20/05/2024
    //           </h6>
    //           <p className="card-text">
    //             Quedan 5 días para que la tarea finalice
    //           </p>
    //           <div className="acciones-tarea">
    //             <NavLink to="/">
    //               <i className="bi bi-eye"></i>
    //             </NavLink>
    //             <NavLink to="/">
    //               <i className="bi bi-chat"></i> <span>2</span>
    //             </NavLink>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="card shadow" draggable="true">
    //         <div className="card-body">
    //           <h5 className="card-title">Titulo de la actividad</h5>
    //           <h6 className="card-subtitle mb-2 text-muted">
    //             Fecha entrega: 20/05/2024
    //           </h6>
    //           <p className="card-text">
    //             Quedan 5 días para que la tarea finalice
    //           </p>
    //           <div className="acciones-tarea">
    //             <NavLink to="/">
    //               <i className="bi bi-eye"></i>
    //             </NavLink>
    //             <NavLink to="/">
    //               <i className="bi bi-chat"></i> <span>2</span>
    //             </NavLink>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="card shadow" draggable="true">
    //         <div className="card-body">
    //           <h5 className="card-title">Titulo de la actividad</h5>
    //           <h6 className="card-subtitle mb-2 text-muted">
    //             Fecha entrega: 20/05/2024
    //           </h6>
    //           <p className="card-text">
    //             Quedan 5 días para que la tarea finalice
    //           </p>
    //           <div className="acciones-tarea">
    //             <NavLink to="/">
    //               <i className="bi bi-eye"></i>
    //             </NavLink>
    //             <NavLink to="/">
    //               <i className="bi bi-chat"></i> <span>2</span>
    //             </NavLink>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="card shadow" draggable="true">
    //         <div className="card-body">
    //           <h5 className="card-title">Titulo de la actividad</h5>
    //           <h6 className="card-subtitle mb-2 text-muted">
    //             Fecha entrega: 20/05/2024
    //           </h6>
    //           <p className="card-text">
    //             Quedan 5 días para que la tarea finalice
    //           </p>
    //           <div className="acciones-tarea">
    //             <NavLink to="/">
    //               <i className="bi bi-eye"></i>
    //             </NavLink>
    //             <NavLink to="/">
    //               <i className="bi bi-chat"></i> <span>2</span>
    //             </NavLink>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="card shadow" draggable="true">
    //         <div className="card-body">
    //           <h5 className="card-title">Titulo de la actividad</h5>
    //           <h6 className="card-subtitle mb-2 text-muted">
    //             Fecha entrega: 20/05/2024
    //           </h6>
    //           <p className="card-text">
    //             Quedan 5 días para que la tarea finalice
    //           </p>
    //           <div className="acciones-tarea">
    //             <NavLink to="/">
    //               <i className="bi bi-eye"></i>
    //             </NavLink>
    //             <NavLink to="/">
    //               <i className="bi bi-chat"></i> <span>2</span>
    //             </NavLink>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </section>
    <></>
  );
};

export default TodoList;
