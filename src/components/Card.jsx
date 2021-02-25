import card from "../assets/images/tournament.webp";
import author from "../assets/images/zemestagame-logo.png";
// import author from "../assets/images/bg-image.webp";

const Card = () => {
  return (
    <div className="card">
      <div className="card-header animated-bg">
        <img src={card} alt="" />
      </div>

      <div className="card-content">
        <h3 className="card-title animated-bg animated-bg-text">
          Lorem ipsum dolor sit amet
        </h3>
        <p className="card-excerpt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          perferendis
          <span className="animated-bg animated-bg-text">&nbsp;</span>
          <span className="animated-bg animated-bg-text">&nbsp;</span>
          <span className="animated-bg animated-bg-text">&nbsp;</span>
        </p>
        <div className="author">
          <div className="profile-img animated-bg">
            <img src={author} alt="" />
          </div>
          <div className="author-info">
            <strong className="animated-bg animated-bg-text">
              ZemestaGame
            </strong>
            <small className="animated-bg animated-bg-text">Feb 25, 2021</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
