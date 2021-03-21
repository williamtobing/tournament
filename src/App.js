import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contest from "./components/Contest";

import "./scss/main.scss";

function App() {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    const getTournaments = async () => {
      const res = await fetch("https://api.zemestagame.id/tournaments");
      const data = await res.json();
      setTournaments(data);
    };

    getTournaments();
  }, []);

  return (
    <Router>
      <Navbar />
      <Route path="/" render={Hero} exact />
      <Route
        path="/contest"
        render={(props) => <Contest tournaments={tournaments} />}
      />
    </Router>
  );
}

export default App;
