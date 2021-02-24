import shadow from "../assets/images/grad.png";
import character from "../assets/images/pubg-character.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="date-wrapper">
            <div className="text">
              <p>REGISTRATION</p>
              <p className="tba">TBA</p>
            </div>
          </div>
          <div className="hero-graphic">
            <h2>ZEMESTAGAME</h2>
            <h1>PUBGM</h1>
            <img src={character} alt="" />
            <h2>CHAMPIONSHIP</h2>
          </div>
          <div className="circle"></div>
        </div>
        <img src={shadow} alt="" />
      </div>
    </div>
  );
};

export default Hero;
