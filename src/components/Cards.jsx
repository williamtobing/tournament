import Card from "./Card";
import Fade from "react-reveal";

const Cards = ({ tournaments }) => {
  return (
    <>
      {tournaments.map((tournament) => (
        <Fade>
          <Card key={tournament.game_id} tournament={tournament} />
        </Fade>
      ))}
    </>
  );
};

export default Cards;
