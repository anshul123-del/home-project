import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css";
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div
      id="arro"
      className="carousel-button-group gap-4"
      style={{ position: "relative" }}
    >
      <button
        className={currentSlide === 0 ? "disable" : ""}
        onClick={() => previous()}
        style={{ position: "absolute", bottom: "220px", left: "-31px" }}
      >
        <span className="seller"><FaArrowLeft /></span>
      </button>
      {/* <button onClick={() => next()} /> */} 
      <button 
        onClick={() => goToSlide(currentSlide + 1)}
        style={{ position: "absolute", bottom: "220px", right: "-15px"}}
      >
        {" "}
       <span className="seller"> <FaArrowRight /></span>
      </button>
    </div>
  );
};
export default ButtonGroup;
