import React from 'react';
import logo from '../img/logofoo.png';
import tel from '../img/tel.png';
import mail from '../img/mail.png';
import facebook from '../img/facebook.png';
import twitter from '../img/twitter.png';
import tiktok from '../img/tiktok.png';
import youtube from '../img/youtube.png';

function Footer() {
    return (
        <div className="foo-contenedor">
            <div className="contenido">
                <div className="image">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="foo-info">
                    <p id='foo-titulo'>Contáctanos</p>
                    <div id='inf'>
                        <img src={tel}></img>
                        <p>+52 961 5555 555</p>
                    </div>
                    <div id='inf'>
                        <img src={mail}></img>
                        <p>cruzrojamexyaj@gmail.com</p>
                    </div>                    
                </div>
                <div className="info">
                    <p id='foo-titulo'>Síguenos en</p>
                    <div className="redes">
                        <img src={facebook} alt="Imagen 1" />
                        <img src={twitter} alt="Imagen 2" />
                        <img src={tiktok} alt="Imagen 3" />
                        <img src={youtube} alt="Imagen 4" />
                    </div>
                </div>
            </div>
            <div className="foo-final">
                <p>2023 Cruz Roja Yajalón || Aviso Legal y Política de Privacidad</p>
            </div>
        </div>
    );
}
export default Footer;
