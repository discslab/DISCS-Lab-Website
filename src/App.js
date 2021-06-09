import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";
import Research from "./components/Research/Research.js";
import Team from "./components/Team/Team.js";
import News from "./components/News/News.js";
import Publications from "./components/Publications/Publications.js";
import Teachings from "./components/Teachings/Teachings";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route exact path="/">
          <Home />
          <News />
          <Team />
          <Research />
          <Publications />
        </Route>
        <Route exact path="/teachings">
          <Teachings />
        </Route>
        <Route exact path="/openings"></Route>
      </Router>
    </div>
  );
}

export default App;
