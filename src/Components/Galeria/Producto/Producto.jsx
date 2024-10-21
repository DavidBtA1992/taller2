import { useState, useEffect } from "react";
import { cargaData } from "../../../Functions/apireq";
import { url1 } from "../../../static/js/urls";

export default function Producto({ index }) {
  const [data, setData] = useState({
    titulo: "",
    img: "",
    descripcion: "uknown",
    rating: "uknown",
  });

  useEffect(() => {
    cargaData(url1).then((datos) => {
      setData({
        titulo: datos[index].title,
        img: datos[index].image,
        descripcion: datos[index].description,
        rating: datos[index].rating.rate,
      });
    });
  });

  return (
    <div>
      <h3>{data.titulo}</h3>
      <img src={data.img}></img>
      <p>Descripcion: {data.descripcion}</p>
      <p>Calificacion: {data.rating}</p>
    </div>
  );
}
