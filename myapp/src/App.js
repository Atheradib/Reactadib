import logo from './logo.svg';
import './App.css';
import { CourseInfo } from "./components/CourseInfo";

function App() {
  return (
    
    <div className="App">
      <center>
      <h1 style={{color:"green", fontSize:"larger"}}>List Of Employees</h1>
    <tr>
    <td><CourseInfo coursename="PDAC" instituteName="pickupbiz" contact="789456123"/></td>
    <td><CourseInfo coursename="CDAC" instituteName="Faisal Institute" contact="457891265"/></td>
   <td> <CourseInfo coursename="HTML" instituteName="Ather Institute" contact="4456665" /></td>
   </tr>
   <hr />
   <td>
    <CourseInfo coursename="PDAC" instituteName="pickupbiz" contact="789456123"/></td>
    <td><CourseInfo coursename="CDAC" instituteName="Faisal Institute" contact="457891265"/></td>
    <td> <CourseInfo coursename="HTML" instituteName="Ather Institute" contact="4456665" /></td>
   <hr/>
   
   <td>
    <CourseInfo coursename="PDAC" instituteName="pickupbiz" contact="789456123"/></td>
    <td><CourseInfo coursename="CDAC" instituteName="Faisal Institute" contact="457891265"/></td>
   <td> <CourseInfo coursename="HTML" instituteName="Ather Institute" contact="4456665" /></td>
   <br/>
   <br/>
   </center>
    </div>
    
  );
}

export default App;
