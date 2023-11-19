import './App.css';
import Home from './components/Home';
import Menu from './components/Menu';
import Beneficios from './components/Beneficios';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import Registrarse from './components/Registrarse';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Menu />
      <Home />
      <Beneficios />
      <Servicios />
      <Contacto />
      <Registrarse />
      <Footer />
    </div>    
  );
}
export default App;
