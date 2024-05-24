import { useRef } from "react";
import { useState } from "react";
import useFormatoTiempo from "../../hooks/useFormatoTiempo";

const Video = ({src}) => {
  const [ muted, setMuted ] = useState(false);
  const [ paused, setPaused ] = useState(false);
  const [ valorVolumen, setValorVolumen ] = useState('');
  const [ playing, setPlaying ] = useState(false);
  const [ currentTime, setCurrentTime ] = useState(0);
  const [ duration, setDuration ] = useState(0);
  const { formatTime } = useFormatoTiempo();

  const videoRef = useRef(null);

  const handleMuted = () => {
    setMuted(state => !state);
    if(!muted){
      setValorVolumen(0);
      videoRef.current.volume = 0;
    }else{
      setValorVolumen(0.5);
      videoRef.current.volume = 0.5
    }
  };

  const handlePaused = () => {
    setPaused(state => !state);
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause(); // Pausar el video si está reproduciendo
      } else {
        videoRef.current.play(); // Reproducir el video si está pausado
      }
      setPlaying(!playing); // Invertir el estado de reproducción
    }
  };

  const handlevalorVolumen = (e) => {
    setValorVolumen(e.target.value);
    videoRef.current.volume = e.target.value;
  };

  const toggleFullScreen = () => {
    videoRef.current.requestFullscreen();
  };

  const retroceder = () => {
    videoRef.current.currentTime -= 10; 
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime); // Actualiza el tiempo actual del video
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration); // Establece la duración total del video
    }
  };

  const handleProgreso = (e) => {
    videoRef.current.currentTime = e.target.value; 
    setCurrentTime(videoRef.current.currentTime);
  }

  return (
    <>
      <video src={src} ref={videoRef} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata} controls/>
      <div className="tiempo">
            <i className="bi bi-record-circle-fill"></i>
            <span> {formatTime(currentTime)} / {formatTime(duration)} </span>
      </div>
      <input type="range" className="progreso-video" id="volumeControl" min="0" max={duration} step="0.01" value={currentTime} onChange={handleProgreso} />
      {/* Controles */}
      <section className="controles-video">
        <div className="volumen">
          <div className="volumen-control">
            {
              muted ? 
              (
                <i className="bi bi-volume-mute" data-bs-toggle="tooltip" data-bs-placement="top" title="Unmute" onClick={handleMuted}></i>
              )
              :
              (
                <i className="bi bi-volume-up" data-bs-toggle="tooltip" data-bs-placement="top" title="Mute" onClick={handleMuted}></i>
              )
            }
            <input type="range" className="volumeControl" id="volumeControl" min="0" max="1" step="0.01" value={valorVolumen} onChange={handlevalorVolumen} />
          </div>
          <span className="texto-volumen"> Volumen </span>
        </div>
        <div className="pausa-subtitulos-completa">
          <div className="back">
            <i className="bi bi-arrow-counterclockwise" onClick={retroceder}></i>
          </div>
          <div className="pausa">
            {
              paused ? 
              (
                <i className="bi bi-pause" data-bs-toggle="tooltip" data-bs-placement="top" title="Pause" onClick={handlePaused}></i>
              )
              :
              (
                <i className="bi bi-play" data-bs-toggle="tooltip" data-bs-placement="top" title="Play" onClick={handlePaused}></i>
              )
            }
          </div>
          <div className="subtitulos">
            <i className="bi bi-badge-cc" data-bs-toggle="tooltip" data-bs-placement="top" title="Subtitles"></i>
          </div>
          <div className="completa">
            <i className="bi bi-arrows-angle-expand" data-bs-toggle="tooltip" data-bs-placement="top" title="Expand" onClick={toggleFullScreen}></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Video;