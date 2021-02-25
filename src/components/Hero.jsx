import bottomCircle from "../assets/images/bottom-circle.svg";
import shadow from "../assets/images/grad.webp";
import character from "../assets/images/pubg-character.webp";
import circle from "../assets/images/circle.svg";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <img className="shadow-up" src={shadow} alt="" />
        <img className="circle" src={circle} alt="" />

        <div className="event">
          <Fade bottom>
            <h2 className="text-left">ZEMESTAGAME</h2>
            <h1>PUBGM</h1>
            <h2 className="text-right">CHAMPIONSHIP</h2>
          </Fade>
        </div>
      </div>

      <img className="bottom-circle" src={bottomCircle} alt="" />
      <div className="date">
        <p>REGISTRATION</p>
        <p className="time">TBA</p>
      </div>
      <Fade right>
        <img className="character" src={character} alt="" />
      </Fade>
      <img className="shadow-down" src={shadow} alt="" />
    </div>
  );
};

export default Hero;
