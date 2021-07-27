import logo from "./logo.svg";
import "./App.css";
import { ToggleComps } from "./Components/ToggleComps";
// import { Forms } from "./Components/Forms";
// import { Form1 } from "./Components/Form1";

function App() {
  return (
    <div className="App">
      {/* <div>
        <Forms />
      </div>
      <hr />
      <div>
        <Form1 />
      </div>
    </div> */}
      <ToggleComps />
    </div>
  );
}

export default App;
