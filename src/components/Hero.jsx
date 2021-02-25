import shadow from "../assets/images/grad.webp";
import character from "../assets/images/pubg-character.webp";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        {/* <p>REGISTRATION</p>
        <p>TBA</p> */}
        <div className="event">
          <Fade bottom>
            <h2>ZEMESTAGAME</h2>
            <h1>PUBGM</h1>
            <h2>CHAMPIONSHIP</h2>
          </Fade>
        </div>
      </div>
      <Fade right>
        <img className="character" src={character} alt="" />
      </Fade>
      <img className="shadow" src={shadow} alt="" />
    </div>
  );
};

export default Hero;
