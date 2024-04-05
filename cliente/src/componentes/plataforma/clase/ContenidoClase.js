import VerPdf from "../../General/VerPdf";
import Video from "../../General/Video";

const ContenidoClase = () => {
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
                  <VerPdf />
                )
              }
            </div>
        </section>
    </>
  )
}

export default ContenidoClase;