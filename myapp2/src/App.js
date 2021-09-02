import logo from "./logo.svg";
import "./App.css";
import { DynamicComp } from "./Components/DynamicComp";
// import { EmiCal } from "./Components/EmiCal";

function App() {
  return (
    <div className="App">
      {/* <EmiCal /> */}
      <DynamicComp />
    </div>
  );
}

export default App;
