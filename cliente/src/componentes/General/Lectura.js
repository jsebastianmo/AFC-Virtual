import { useState } from "react";

const Lectura = ({ src }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    if (currentPage < src.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < src.length) {
      setCurrentPage(newPage);
    }
  };

  return (
    <section className="lectura">
      <div className="lectura-controles">
        <div className="lectura-controles-indicadores">
          {/* Indicador pagina */}
          <span>Página {currentPage + 1} de {src.length}</span>
          {/* Controles de siguiente pagina */}
          <div className="lectura-controles-indicadores-anterior-siguiente">
            <button className="btn" onClick={handlePrevPage} disabled={currentPage === 0}><i className="bi bi-chevron-left"></i></button>
            <button className="btn " onClick={handleNextPage} disabled={currentPage === src.length - 1}><i className="bi bi-chevron-right"></i></button>
          </div>
          {/* Marcadores para navegar directamente a una página */}
          <div className="lectura-controles-indicadores-paginado">
            {src.map((_, index) => (
              <button className="btn" key={index} onClick={() => handlePageChange(index)}>
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <section className="lectura-contenido">
          <h1>{src[currentPage].text.titulo}</h1>
          <p>{src[currentPage].text.contenido}</p>
          {
            src[currentPage].images &&
            (
              <div>
                {src[currentPage].images.map((image, index) => (
                  <img key={index} src={image} alt={`Imagen ${index + 1}`} />
                ))}
              </div>
            )
          }
      </section>
    </section>
  );
};

export default Lectura;