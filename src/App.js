import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contest from "./components/Contest";

import "./scss/main.scss";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" render={Hero} exact />
      <Route path="/contest" render={Contest} />
    </Router>
  );
}

export default App;
