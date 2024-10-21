import "./App.css";
import { cargaData } from "./Functions/apireq";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import PagGaleria from "./Components/Galeria/PagGaleria/PagGaleria";

//TODO: PENDIENTE CREAR ARCHIVOS DE CARPETA PRODUCTO, CREAR FORMULARIO, DAR FUNCIONALIDAD A LOS BOTONES DEL MENU Y DAR ESTILO A TODO EL PROYECTO


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <PagGaleria />
      <Footer />
    </div>
  );
}

export default App;
