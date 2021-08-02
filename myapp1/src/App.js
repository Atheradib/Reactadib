import logo from "./logo.svg";
import "./App.css";
import { Navigation } from "./Components/Routes/Navigation";
import { AboutUs } from "./Components/Routes/AboutUs";
import { ContactUs } from "./Components/Routes/ContactUs";
import Services from "./Components/Routes/Services";
import { Home } from "./Components/Routes/Home";
import { Courses } from "./Components/Routes/Courses";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
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
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
