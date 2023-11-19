import React from 'react';
import logo from '../img/logo.png';
import notificacion from '../img/notificacion.png';
import usuario from '../img/usuario.png';

function Menu() { 
    return (
        <div className="menu">
            <div className='header'>
                <div className='logo'>
                    <img src={logo} alt='logo'></img>
                    <p>Cruz Roja Yajalón</p>
                </div>
                <div className='usuario'>
                    <div className='noti'>
                        <img src={notificacion} alt='notificacion'></img>
                    </div>
                    <div className='nombre'>
                        <p><b>¡</b>Hola <span>Usuario</span><b>!</b></p>
                    </div>                    
                    <div className='icono'>
                        <img src={usuario} alt='usuario'></img>
                    </div>
                </div>
            </div>
            <div className='menubar'>
                <ul>
                    <li><a href="#" id='op'>Inicio</a></li>
                    <li><a href="#seccion-beneficios" id='op'>Beneficios</a></li>
                    <li><a href="#se-contenedor" id='op'>Servicios</a></li>
                    <li><a href="#" id='op'>Acerca</a></li>
                    <li><a href="#seccion-contacto" id='op'>Contacto</a></li>
                    <li><a href="#seccion-registro" id='reg'>Registrarse</a></li>
                </ul>
            </div>
        </div>
    );
}
export default Menu;
