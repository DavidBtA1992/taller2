import './App.css';
import { cargaData } from './Functions/apireq';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

const url1 = "https://fakestoreapi.com/products";

function App() {

/*   const data = cargaData(url1).then((datos) =>{
    console.log(datos[0].title)
  }) */


  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
