import logo from '../../static/img/logo.jpeg';
import './Header.css'

export default function Header(props) {
  return (
    <header>
      <h1>Tienda de Ropa XYZ</h1>
      <img src={logo} alt="Logo"></img>
      <div className="topnav">
        <a>INICIO</a>
        <a>GALERIA</a>
        <a>DETALLES PRODUCTOS</a>
        <a>CONTACTOS</a>
      </div>
    </header>
  );
}
