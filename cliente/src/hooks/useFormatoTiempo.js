const useFormatoTiempo = () => {

    function formatTime(seconds) {
        const date = new Date(seconds * 1000);
        const hh = date.getUTCHours();
        const mm = date.getUTCMinutes();
        const ss = date.getUTCSeconds().toString().padStart(2, '0');
        return hh ? `${hh}:${mm.toString().padStart(2, '0')}:${ss}` : `${mm}:${ss}`;
    }

  return {
    formatTime
  }
}

export default useFormatoTiempo;