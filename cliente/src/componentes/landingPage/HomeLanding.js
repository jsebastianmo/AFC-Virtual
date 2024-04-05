import React from 'react'

const HomeLanding = () => {
  return (
    <main className="contenedor-carrusel">
        <div id="carouselExampleControls" className="carousel slide container-fluid flex-grow-1" data-bs-ride="carousel">
            <div className="carousel-inner container header-screens">
                <div className="carousel-item active">
                    <div className='caja-carrusel w-50'>
                        <h1 className='fs-1 text-white font-weight-bolder'> Seminario Aviamiento Faith College  </h1>
                        <p className='fs-5 text-white'> Un ministerio de los Pastores Ricardo y Ma. Patricia Rodríguez </p>
                        <div className='d-flex gap-2 botones-carrusel'> 
                            <button className='btn btn-warning text-white btn-lg rounded-0'> Más Info </button>
                            <button className='btn btn-light text-dark btn-lg rounden-0'> Inscribirma ya </button>
                        </div>
                    </div>
                </div>

                {/* <div className="carousel-item">
                    <div className='caja-carrusel w-50'>
                        <h1 className='fs-1 text-white font-weight-bolder'> Titulo </h1>
                        <p className='fs-5 text-white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nobis aliquam labore, inventore minima ab! </p>
                        <div className='d-flex gap-2 botones-carrusel'> 
                            <button className='btn btn-warning text-white btn-lg rounded-0'> Nuestros cursos </button>
                            <button className='btn btn-light text-dark btn-lg rounden-0'> Contáctenos </button>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='caja-carrusel w-50'>
                        <h1 className='fs-1 text-white font-weight-bolder'> Titulo </h1>
                        <p className='fs-5 text-white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nobis aliquam labore, inventore minima ab! </p>
                        <div className='d-flex gap-2 botones-carrusel'> 
                            <button className='btn btn-warning text-white btn-lg rounded-0'> Nuestros cursos </button>
                            <button className='btn btn-light text-dark btn-lg rounden-0'> Contáctenos </button>
                        </div>
                    </div>
                </div> */}
            </div>
            {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button> */}
        </div>
    </main>
  )
}

export default HomeLanding;