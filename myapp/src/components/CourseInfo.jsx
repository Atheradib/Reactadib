 export const CourseInfo = ({coursename,instituteName}) => {
    return (
        <table border="4px">
        
          <td>Course Name</td>
          <td>:</td>
          <td>{coursename}</td>
        
        <tr>
          <td>Institute</td>
          <td>:</td>
          <td>{instituteName}</td>
        </tr>
        <tr>
          <td>contact</td>
          <td>:</td>
          <td>8446158196</td>
        </tr>
        <tr>
          <td>City</td>
          <td>:</td>
          <td>Nanded</td>
        </tr>
      </table>
    )
}