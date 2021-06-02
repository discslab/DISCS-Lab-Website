import "./App.css";

import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";
import Research from "./components/Research/Research.js";
import Team from "./components/Team/Team.js";
import News from "./components/News/News.js";
import Publications from "./components/Publications/Publications.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <News />
      <Team />
      <Research />
      <Publications />
    </div>
  );
}

export default App;
