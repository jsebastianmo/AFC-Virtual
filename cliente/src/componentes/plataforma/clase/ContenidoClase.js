import Lectura from "../../General/Lectura";
import Video from "../../General/Video";

const ContenidoClase = () => {

  const pages = [
    {
      text: {
        titulo: 'Titulo 1 del contenido de la lectura',
        contenido: 'Contenido 1 de la lectura'
      },
      // images: ["/activos/imagen1.png", "/activos/imagen2.png"] // Rutas de las imágenes asociadas a la página 1
    },
    {
      text: {
        titulo: 'Titulo 2 del contenido de la lectura',
        contenido: 'Contenido 2 de la lectura'
      },
      images: ["/activos/imagen3.png", "/activos/imagen4.png"] // Rutas de las imágenes asociadas a la página 2
    },
    // Agrega más páginas según sea necesario
  ];

  // const info = {
  //   tipoClase: "lectura",
  //   src: pages
  // }

  const info = {
    tipoClase: "video",
    src: "/activos/NuevoProyecto.mp4"
  }

  return (
    <>
        <section className="contenido-clase">
            <div className="contenido-clase-material">
              {
                info.tipoClase === "video"
                ?
                (
                  <Video src={info.src}/>
                )
                :
                (
                  <Lectura src={info.src}/>
                )
              }
            </div>
        </section>
    </>
  )
}

export default ContenidoClase;