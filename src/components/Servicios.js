import React, { useState } from 'react';
import consulta from '../img/consulta.png';
import laboratorio from '../img/laboratorio.png';
import cirugía from '../img/cirugia.png';
import rehabilitación from '../img/rehabilitacion.png';
import telemedicina from '../img/telemedicina.png';

function Servicios() {
    const [valor, setSeleccionado] = useState(null);

    const divs = [
        { 
            imagen: consulta, 
            texto: 'Consulta médica', 
            info: 'Brindamos consultas médicas de calidad y atención personalizada para el cuidado de tu salud'
        },{ 
            imagen: laboratorio, 
            texto: 'Laboratorio clínico',
            info: 'Contamos con el mejor laboratorio clínico para realizar diagnósticos y análisis de laboratorio precisos y confiables' 
        },{ 
            imagen: cirugía, 
            texto: 'Cirugía',
            info: 'Contamos con diversos procedimientos quirúrgicos en nuestras instalaciones, realizados por cirujanos altamente calificados' 
        },{ 
            imagen: rehabilitación,
            texto: 'Rehabilitación',
            info: 'Ofrecemos programas de rehabilitación integral diseñados para acelerar su recuperación y mejorar su calidad de vida' 
        },{ 
            imagen: telemedicina, 
            texto: 'Telemedicina',
            info: 'Brindamos acceso a servicios médicos en línea para consultas remotas y seguimiento médico sin salir de su hogar' 
        },
    ];

    return (
        <div id='se-contenedor'>
            <div id="se-titulo">
                <h1>Servicios</h1>
            </div>
            <div className="servicios">
                {divs.map((div, index) => (
                    <div
                        key={index}
                        className={`div ${valor === index ? 'seleccionado' : ''}`}
                        onClick={() => setSeleccionado(index)}
                        >
                        <img src={div.imagen} alt="Imagen"></img>
                        <p>
                            {div.texto}
                        </p>
                    </div>
                ))}
            </div>
            <div id='circulo'>
                <div className="cir"></div>
            </div>
            <div className="texto-seleccionado">
                {valor !== null ? divs[valor].info : ''}
            </div>
        </div>
    );
}
export default Servicios;
