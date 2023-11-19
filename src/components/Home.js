import banner1 from '../img/banner1.png';

function Home() {
    return (
        <div>
            <div className="contenedor">
                <div className="fondo-izq"></div>
                <div className="fondo-der"></div>
                <div className='seccion'>
                    <div className="left-section">
                        <p id='t1'>"Tu Bienestar es Nuestra Prioridad"</p>
                        <h1 id='titulo'>Bienvenido</h1>
                        <p id='t2'>¡Únete a la Familia Cruz Roja!</p>
                        <button>Unirse ahora</button>
                    </div>
                    <div className="right-section">
                        <img src={banner1} alt="Banner 1"></img>
                        <div class="capa"></div>
                    </div>
                </div>           
            </div>
            <div class="opciones">
                <div class="opcion"></div>
                <div class="opcion"></div>
                <div class="opcion"></div>
                <div class="opcion"></div>
                <div class="opcion"></div>
            </div> 
        </div>
    );
}
export default Home;
