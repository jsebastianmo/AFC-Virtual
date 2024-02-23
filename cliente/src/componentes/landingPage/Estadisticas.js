import React, { useEffect } from 'react'

const Estadisticas = () => {

    useEffect(()=>{
        const targetElement = document.getElementById('estadisticasLanding');
        const counter1 = document.getElementById('counter-1');
        const counter2 = document.getElementById('counter-2');
        const counter3 = document.getElementById('counter-3');
        const counter4 = document.getElementById('counter-4');

        // Opciones para el Intersection Observer
        const options = {
            root: null, // Utiliza el viewport como el contenedor
            rootMargin: '0px', // Sin margen adicional
            threshold: 0.5 // Umbral del 50% de visibilidad
        };

        // Función de callback que se ejecutará cuando el elemento entre en la visibilidad
        const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counter1.innerHTML = 0
                counter2.innerHTML = 0
                counter3.innerHTML = 0
                counter4.innerHTML = 0

                const target1 = Number(counter1.getAttribute('data-target'));
                const target2 = Number(counter2.getAttribute('data-target'));
                const target3 = Number(counter3.getAttribute('data-target'));
                const target4 = Number(counter4.getAttribute('data-target'));
                
                const NumberCounter = () => {
                    const valor1 = Number(counter1.innerHTML);
                    const valor2 = Number(counter2.innerHTML);
                    const valor3 = Number(counter3.innerHTML);
                    const valor4 = Number(counter4.innerHTML);
                    if(valor1 < target1){
                        counter1.innerHTML = Math.ceil(valor1 + 1);
                    }
                    if(valor2 < target2){
                        counter2.innerHTML = Math.ceil(valor2 + 1);
                    }
                    if(valor3 < target3){
                        counter3.innerHTML = Math.ceil(valor3 + 1);
                    }
                    if(valor4 < target4){
                        counter4.innerHTML = Math.ceil(valor4 + 1);
                    }
                    setTimeout(() => {
                        NumberCounter()
                    }, 5);
                }

                NumberCounter()
            }
        });
        };

        // Crea una instancia del Intersection Observer con la función de callback y las opciones
        const observer = new IntersectionObserver(callback, options);

        // Observa el elemento objetivo
        observer.observe(targetElement);
    }, [])

  return (
    <section className='estadisticas mt-5' id='estadisticasLanding'>
        <section className='items container'>
            <div className='item'>
                <h1 id='counter-1' data-target="150"> 150 </h1>
                <div className="progress">
                    <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-2"> lorem ipsum </p>
            </div>
            <div className='item'>
                <h1 id='counter-2' data-target="2800"> 2800 </h1>
                <div className="progress">
                    <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-2"> lorem ipsum </p>
            </div>
            <div className='item'>
                <h1 id='counter-3' data-target="750"> 750 </h1>
                <div className="progress">
                    <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-2"> lorem ipsum </p>
            </div>
            <div className='item'>
                <h1 id='counter-4' data-target="1200"> 1200 </h1>
                <div className="progress">
                    <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-2"> lorem ipsum </p>
            </div>
        </section>
    </section>
  )
}

export default Estadisticas