 export const CourseInfo = ({coursename,instituteName,contact}) => {
    return (
         
        <table border="4px" color="red">
        
          <td>Course Name</td>
          <td>:</td>
          <td><span style={{color:"red"}}>{coursename}</span></td>
        
        <tr>
          <td>Institute</td>
          <td>:</td>
          <td><span style={{color:"green"}}>{instituteName}</span></td>
        </tr>
        <tr>
          <td>contact</td>
          <td>:</td>
          <td>{contact}</td>
        </tr>
        <tr>
          <td>City</td>
          <td>:</td>
          <td>Nanded</td>
        </tr>
      </table>
    )
}