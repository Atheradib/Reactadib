import logo from "./logo.svg";
import "./App.css";
// import { Navigation } from "./Components/Routes/Navigation";
// import { AboutUs } from "./Components/Routes/AboutUs";
// import { ContactUs } from "./Components/Routes/ContactUs";
// import Services from "./Components/Routes/Services";
// import { Home } from "./Components/Routes/Home";
// import { Courses } from "./Components/Routes/Courses";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation } from "./Components/Pages/Navigation";
import { Benefits } from "./Components/Pages/Benefits";
import { ZAMS } from "./Components/Pages/ZAMS";
import { Sales } from "./Components/Pages/Sales";
import { Services } from "./Components/Pages/Services";
function App() {
  return (
    <div className="App">
      {/* <Router>
        <Navigation />
        <Switch>
          <div>
            <Route path="/AboutUs">
              <AboutUs />
            </Route>
            <Route path="/ContactUs">
              <ContactUs />
            </Route>
            <Route path="/Services">
              <Services />
            </Route>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/Courses">
              <Courses />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </div>
        </Switch>
      </Router> */}
      <Router>
        <Navigation />
        <Switch>
          <div>
            <Route path="/Benefits">
              <Benefits />
            </Route>
            <Route path="/ZAMS">
              <ZAMS />
            </Route>
            <Route path="/Sales">
              <Sales />
            </Route>
            <Route path="/Services">
              <Services />
            </Route>
            <Route exact path="/">
              <ZAMS />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
