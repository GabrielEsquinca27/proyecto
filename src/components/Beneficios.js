import React from 'react';
import registro from '../img/registrarse.png';
import cita from '../img/calendario.png';
import educacion from '../img/graduacion.png';
import promocion from '../img/promocion.png';

function Beneficios() {
    return (
        <div className="ben-contenedor" id='seccion-beneficios'>
            <h1>Beneficios al unirte con nosotros</h1>
            <div className="beneficios">
                <div className="divs">
                    <div className="imagen">
                        <img src={registro} alt="Imagen 1" />
                    </div>
                    <div className="informacion" id='ben1'>
                        <p id='ben-titulo'>Facilidad de Registro</p>
                        <p>Regístrate en minutos y accede rápidamente.</p>
                    </div>
                </div>
                <div className="divs">
                    <div className="imagen">
                        <img src={cita} alt="Imagen 2" />
                    </div>
                    <div className="informacion" id='ben2'>
                        <p id='ben-titulo'>Citas en línea</p>
                        <p>Programa citas médicas desde la comodidad de tu hogar.</p>
                    </div>
                </div>
                <div className="divs">
                    <div className="imagen">
                        <img src={educacion} alt="Imagen 3" />
                    </div>
                    <div className="informacion" id='ben3'>
                        <p id='ben-titulo'>Educación en Salud</p>
                        <p>Aprende sobre tu bienestar con recursos educativos en línea.</p>
                    </div>
                </div>
                <div className="divs">
                    <div className="imagen">
                        <img src={promocion} alt="Imagen 4" />
                    </div>
                    <div className="informacion" id='ben4'>
                        <p id='ben-titulo'>Promociones y descuentos</p>
                        <p>Disfruta de ofertas exclusivas con nosotros.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Beneficios;
