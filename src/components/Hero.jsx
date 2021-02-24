import shadow from "../assets/images/grad.png";

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
          <div className="hero-graphic"></div>
        </div>
        <img src={shadow} alt="" />
      </div>
    </div>
  );
};

export default Hero;
