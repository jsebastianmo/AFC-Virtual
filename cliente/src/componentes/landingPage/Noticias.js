import React from 'react'

const Noticias = () => {
  return (
    <section className='noticias container mt-5'>
		<h1 className='text-center'> Noticias recientes </h1>
        <p className='text-center text-muted mb-5 '> Informacion sobre las noticias que se exponen en este apartado </p>
		<section className='noticias-landing'>
			<div className="noticia-landing card">
				<div className="box-imagen">
					<img src="https://picsum.photos/700/400?1" className='card-img-top' alt="imagen" />
					<div className='overlay'></div>
				</div>
				<div className="card-body">
					<h1 className='fs-4'> Noticia 1 </h1>
					<p> contenido de la noticia </p>
                    <p> Febrero 5 by <span> Jhon Mosquera </span> </p>
				</div>
			</div>
			<div className="noticia-landing card">
				<div className="box-imagen">
					<img src="https://picsum.photos/700/400?2" className='card-img-top' alt="imagen" />
					<div className='overlay'></div>
				</div>
				<div className="card-body">
					<h1 className='fs-4'> Noticia 2 </h1>
					<p> contenido de la noticia </p>
                    <p> Febrero 5 by <span> Jhon Mosquera </span> </p>
				</div>
			</div>
			<div className="noticia-landing card">
				<div className="box-imagen">
					<img src="https://picsum.photos/700/400?3" className='card-img-top' alt="imagen" />
					<div className='overlay'></div>
				</div>
				<div className="card-body">
					<h1 className='fs-4'> Noticia 3 </h1>
					<p> contenido de la noticia </p>
                    <p> Febrero 5 by <span> Jhon Mosquera </span> </p>
				</div>
			</div>
		</section>
	</section>
  )
}

export default Noticias;