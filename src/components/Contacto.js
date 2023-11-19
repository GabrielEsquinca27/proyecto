import React from 'react';
import user from '../img/user.png';
import correo from '../img/correo.png';
import telefono from '../img/telefono.png';
import contacto from '../img/contacto.png';

function Contacto() {
    return (
        <div className="contacto" id='seccion-contacto'>
            <div className="cont-img">
                <img src={contacto} alt="Imagen" />
            </div>
            <div className="formu">
                <h2>Contacto</h2>
                <form>
                    <div className="input">
                        <img src={user}></img>
                        <input type="text" placeholder="Nombre" />
                    </div>
                    <div className="input">
                        <img src={correo}></img>
                        <input type="email" placeholder="Correo" />
                    </div>
                    <div className="input">
                        <img src={telefono}></img>
                        <input type="tel" placeholder="Teléfono" />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}
export default Contacto;
