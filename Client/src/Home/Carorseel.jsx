import Carousel from "react-bootstrap/Carousel";
import ban1 from "../images/ban1.png";
import multi from "../images/multi.png";
function Carorseel() {
  return (
    <Carousel data-bs-theme="dark" className="carousel-fade car" data-aos="fade-up">
      <Carousel.Item>
        <img className="d-block w-100" src={ban1} alt="First slide" width="640" height="660px"/>
        
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={multi} alt="Second slide"  height="660px" />
       
      </Carousel.Item>
    </Carousel>
  );
}

export default Carorseel;
