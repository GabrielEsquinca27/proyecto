import React from 'react';
import user from '../img/user.png';
import correo from '../img/correo.png';
import passw from '../img/passw.png';

function Registrarse() {
    return (
        <div className="registrarse" id='seccion-registro'>
            <div className="re-form">
                <form>
                    <h2>Registrarse</h2>
                    <div className="input">
                        <img src={user}></img>
                        <input type="text" placeholder="Nombre de usuario" />
                    </div>
                    <div className="input">
                        <img src={correo}></img>
                        <input type="email" placeholder="Correo electrónico" />
                    </div>
                    <div className="input">
                        <img src={passw}></img>
                        <input type="password" placeholder="Contraseña" />
                    </div>
                    <div className="input">
                        <img src={passw}></img>
                        <input type="password" placeholder="Repetir contraseña" />
                    </div>
                    <b><p>Tengo cuenta</p></b>
                    <button type="submit">Registrar</button>                    
                </form>
            </div>
        </div>
    );
}
export default Registrarse;
