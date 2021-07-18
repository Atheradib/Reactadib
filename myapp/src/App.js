import logo from './logo.svg';
import './App.css';
import { CourseInfo } from "./components/CourseInfo";

function App() {
  return (
    <div className="App">
    <CourseInfo coursename="PDAC" instituteName="pickupbiz"/><br />
    <CourseInfo coursename="CDAC" instituteName="faisal insti"/><br />
    <CourseInfo coursename="HTML" instituteName="ather institute" />br
    </div>
  );
}

export default App;
