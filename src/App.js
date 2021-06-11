import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Research from "./components/Research/Research";
import Team from "./components/Team/Team";
import News from "./components/News/News";
import Publications from "./components/Publications/Publications";
import Teachings from "./components/Teachings/Teachings";
import Openings from "./components/Openings/Openings";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
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
          <Route exact path="/openings">
            <Openings />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
