import React, { useEffect } from 'react'

const CursosLanding = () => {

	useEffect(()=>{
		var derecha = document.getElementById('derecha');
		var izquierda = document.getElementById('izquierda');
		var contenedor = document.querySelector('.cursos-landing');
		const primerElementoDefault = contenedor.firstElementChild;
		const ultimoElementoDefault = contenedor.lastElementChild;

		derecha.addEventListener('click', function(){
			var primerElemento = contenedor.firstElementChild;
			if(ultimoElementoDefault == primerElemento){
				return;
			}
			contenedor.appendChild(primerElemento);
		})

		izquierda.addEventListener('click', function(){
			var ultimoElemento = contenedor.lastElementChild;
			var primerElemento = contenedor.firstElementChild;
			if(primerElementoDefault == primerElemento){
				console.log("aqui")
				return;
			}
    		contenedor.insertBefore(ultimoElemento, contenedor.firstElementChild);
		})
	}, [])
	

  return (
    <section className='cursosLanding container mt-5'>
		<h1 className='mb-5'> Cursos más populares </h1>
		<section className='cursos-landing'>
			<div className="curso-landing card">
				<div className="box-imagen">
					<img src="https://picsum.photos/700/400?1" className='card-img-top' alt="imagen" />
					<div className='overlay'></div>
				</div>
				<div className="card-body">
					<span className="badge bg-info text-white">$99.00</span>
					<h1 className='fs-4'> Curso 1 </h1>
					<div className='d-flex align-items-center gap-4'>
						<img src='https://picsum.photos/700/400?1'/>
						<p className='m-0'> Nombre instructor </p>
					</div>
				</div>
				<div className="card-footer text-muted d-flex justify-content-between">
					<div className='informacion d-flex gap-3'>
						<div className='people'>
							<i className="bi bi-people-fill"></i>
							<span> 98 </span>
						</div>
						<div className='chat'>
							<i className="bi bi-chat-fill"></i>
							<span> 10 </span>
						</div>
					</div>
					<div className='calificacion d-flex'>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
					</div>
				</div>
			</div>
			<div className="curso-landing card">
			<div className="box-imagen">
					<img src="https://picsum.photos/700/400?2" className='card-img-top' alt="imagen" />
					<div className='overlay'></div>
				</div>
				<div className="card-body">
					<span className="badge bg-info text-white">$99.00</span>
					<h1 className='fs-4'> Curso 2 </h1>
					<div className='d-flex align-items-center gap-4'>
						<img src='https://picsum.photos/700/400?1'/>
						<p className='m-0'> Nombre instructor </p>
					</div>
				</div>
				<div className="card-footer text-muted d-flex justify-content-between">
					<div className='informacion d-flex gap-3'>
						<div className='people'>
							<i className="bi bi-people-fill"></i>
							<span> 98 </span>
						</div>
						<div className='chat'>
							<i className="bi bi-chat-fill"></i>
							<span> 10 </span>
						</div>
					</div>
					<div className='calificacion d-flex'>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
					</div>
				</div>
			</div>
			<div className="curso-landing card">
			<div className="box-imagen">
					<img src="https://picsum.photos/700/400?3" className='card-img-top' alt="imagen" />
					<div className='overlay'></div>
				</div>
				<div className="card-body">
					<span className="badge bg-info text-white">$99.00</span>
					<h1 className='fs-4'> Curso 3 </h1>
					<div className='d-flex align-items-center gap-4'>
						<img src='https://picsum.photos/700/400?1'/>
						<p className='m-0'> Nombre instructor </p>
					</div>
				</div>
				<div className="card-footer text-muted d-flex justify-content-between">
					<div className='informacion d-flex gap-3'>
						<div className='people'>
							<i className="bi bi-people-fill"></i>
							<span> 98 </span>
						</div>
						<div className='chat'>
							<i className="bi bi-chat-fill"></i>
							<span> 10 </span>
						</div>
					</div>
					<div className='calificacion d-flex'>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
					</div>
				</div>
			</div>
			<div className="curso-landing card">
			<div className="box-imagen">
					<img src="https://picsum.photos/700/400?4" className='card-img-top' alt="imagen" />
					<div className='overlay'></div>
				</div>
				<div className="card-body">
					<span className="badge bg-info text-white">$99.00</span>
					<h1 className='fs-4'> Curso 4 </h1>
					<div className='d-flex align-items-center gap-4'>
						<img src='https://picsum.photos/700/400?1'/>
						<p className='m-0'> Nombre instructor </p>
					</div>
				</div>
				<div className="card-footer text-muted d-flex justify-content-between">
					<div className='informacion d-flex gap-3'>
						<div className='people'>
							<i className="bi bi-people-fill"></i>
							<span> 98 </span>
						</div>
						<div className='chat'>
							<i className="bi bi-chat-fill"></i>
							<span> 10 </span>
						</div>
					</div>
					<div className='calificacion d-flex'>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
					</div>
				</div>
			</div>
			<div className="curso-landing card">
			<div className="box-imagen">
					<img src="https://picsum.photos/700/400?5" className='card-img-top' alt="imagen" />
					<div className='overlay'></div>
				</div>
				<div className="card-body">
					<span className="badge bg-info text-white">$99.00</span>
					<h1 className='fs-4'> Curso 5 </h1>
					<div className='d-flex align-items-center gap-4'>
						<img src='https://picsum.photos/700/400?1'/>
						<p className='m-0'> Nombre instructor </p>
					</div>
				</div>
				<div className="card-footer text-muted d-flex justify-content-between">
					<div className='informacion d-flex gap-3'>
						<div className='people'>
							<i className="bi bi-people-fill"></i>
							<span> 98 </span>
						</div>
						<div className='chat'>
							<i className="bi bi-chat-fill"></i>
							<span> 10 </span>
						</div>
					</div>
					<div className='calificacion d-flex'>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
					</div>
				</div>
			</div>
			<div className="curso-landing card">
			<div className="box-imagen">
					<img src="https://picsum.photos/700/400?6" className='card-img-top' alt="imagen" />
					<div className='overlay'></div>
				</div>
				<div className="card-body">
					<span className="badge bg-info text-white">$99.00</span>
					<h1 className='fs-4'> Curso 6 </h1>
					<div className='d-flex align-items-center gap-4'>
						<img src='https://picsum.photos/700/400?1'/>
						<p className='m-0'> Nombre instructor </p>
					</div>
				</div>
				<div className="card-footer text-muted d-flex justify-content-between">
					<div className='informacion d-flex gap-3'>
						<div className='people'>
							<i className="bi bi-people-fill"></i>
							<span> 98 </span>
						</div>
						<div className='chat'>
							<i className="bi bi-chat-fill"></i>
							<span> 10 </span>
						</div>
					</div>
					<div className='calificacion d-flex'>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
					</div>
				</div>
			</div>
			<div className="curso-landing card">
			<div className="box-imagen">
					<img src="https://picsum.photos/700/400?7" className='card-img-top' alt="imagen" />
					<div className='overlay'></div>
				</div>
				<div className="card-body">
					<span className="badge bg-info text-white">$99.00</span>
					<h1 className='fs-4'> Curso 7 </h1>
					<div className='d-flex align-items-center gap-4'>
						<img src='https://picsum.photos/700/400?1'/>
						<p className='m-0'> Nombre instructor </p>
					</div>
				</div>
				<div className="card-footer text-muted d-flex justify-content-between">
					<div className='informacion d-flex gap-3'>
						<div className='people'>
							<i className="bi bi-people-fill"></i>
							<span> 98 </span>
						</div>
						<div className='chat'>
							<i className="bi bi-chat-fill"></i>
							<span> 10 </span>
						</div>
					</div>
					<div className='calificacion d-flex'>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
					</div>
				</div>
			</div>
			<div className="curso-landing card">
			<div className="box-imagen">
					<img src="https://picsum.photos/700/400?8" className='card-img-top' alt="imagen" />
					<div className='overlay'></div>
				</div>
				<div className="card-body">
					<span className="badge bg-info text-white">$99.00</span>
					<h1 className='fs-4'> Curso 8 </h1>
					<div className='d-flex align-items-center gap-4'>
						<img src='https://picsum.photos/700/400?1'/>
						<p className='m-0'> Nombre instructor </p>
					</div>
				</div>
				<div className="card-footer text-muted d-flex justify-content-between">
					<div className='informacion d-flex gap-3'>
						<div className='people'>
							<i className="bi bi-people-fill"></i>
							<span> 98 </span>
						</div>
						<div className='chat'>
							<i className="bi bi-chat-fill"></i>
							<span> 10 </span>
						</div>
					</div>
					<div className='calificacion d-flex'>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
						<i className="bi bi-star-fill text-warning"></i>
					</div>
				</div>
			</div>
		</section>
		<div className='controles mt-4'>
			<div className='d-flex flechas gap-2'>
				<div className='box' id='izquierda'>
					<div className='flecha izquierda'></div>
				</div>
				<div className='box' id='derecha'>
					<div className='flecha derecha'></div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default CursosLanding