import { Slide } from "react-slideshow-image";
import InfoBox from "./InfoBox/InfoBox";
import fachada from '../../static/img/fachada.jpeg'
import interno from '../../static/img/interno.jpeg'
import modelo from '../../static/img/modelo.jpeg'

export default function Main(props) {
  return (
    <div>
      <Slide></Slide>
      <InfoBox imagen={fachada} />
      <InfoBox imagen={interno}/>
      <InfoBox imagen={modelo}/>
    </div>
  );
}
