import shadow from "../assets/images/grad.png";
import character from "../assets/images/pubg-character.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        {/* <p>REGISTRATION</p>
        <p>TBA</p> */}
        <div className="event">
          <h2>ZEMESTAGAME</h2>
          <h1>PUBGM</h1>
          <h2>CHAMPIONSHIP</h2>
        </div>
      </div>
      <img className="character" src={character} alt="" />
      <img className="shadow" src={shadow} alt="" />
    </div>
  );
};

export default Hero;
