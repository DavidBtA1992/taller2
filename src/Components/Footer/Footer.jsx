import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer(props) {
  return (
    <footer>
      <FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon>
      <p>Direccion: Av.Larrea 1120 - Buenos Aires - Argentina</p>
      <p>Telefonos: +57 5555555</p>
      <p>
        BootCampt Talento Tech Desarrollo Web. David Calderon. Todos los
        derechos reservados.
      </p>
      <a href="">Contactanos</a>
    </footer>
  );
}
