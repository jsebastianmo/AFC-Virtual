const InformacionClase = () => {
  return (
    <section className="informacion-clase container">
        <div className="informacion-clase-principal">
          <div className="anterior-clase">
            <i className="bi bi-chevron-left"></i>
            <h1 className="fs-3 mb-0"> Meet 5 - Apologética </h1>
          </div>
          <span className="badge bg-info text-dark"> Laura Valentina </span>
        </div>
        <div className="informacion-clase-control">
          <div className="siguiente-clase">
            <h1 className="fs-5"> Meet 6 - Apologética 2 </h1>
            <i className="bi bi-chevron-right"></i>
          </div>
        </div>
    </section>
  )
}

export default InformacionClase;