import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Producto from "../Producto/Producto";
import { cargaData } from "../../../Functions/apireq";
import { url1 } from "../../../static/js/urls";
import { useEffect, useState } from "react";

export default function PagGaleria(props) {
  const [length, setlength] = useState(0);

  useEffect(() => {
    cargaData(url1).then((datos) => {
      setlength(datos.length);
    });
  });

  const items = [];
    for (let ind = 0; ind < length; ind++) {
      items.push(<Producto key={ind} index={ind}/>)
    }
  return (
    <div>
      {items}
    </div>
  );
}
