import card from "../assets/images/tournament.webp";
import author from "../assets/images/zemestagame-logo.png";
// import author from "../assets/images/bg-image.webp";

const Card = ({ tournament }) => {
  return (
    <div className="card">
      <div className="card-header animated-bg">
        <img src={card} alt="" />
      </div>

      <div className="card-content">
        <h3 className="card-title animated-bg animated-bg-text">
          {tournament.title}
        </h3>
        <p className="card-excerpt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
          deleniti! Quibusdam porro ratione, non aspernatur fuga nemo quisquam
          iusto! Quibusdam excepturi sit cumque sequi tempora modi molestiae
          adipisci, commodi placeat.
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
