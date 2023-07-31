import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink,useLocation } from "react-router-dom";
import { Container, Table } from "react-bootstrap";





const Base_deptById = () => {
  const [departments, setDepartments] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // Fetch data based on the selected radio button

    axios
      .get(
        `https://localhost:44333/api/Master/getbasedetpbyid/${location?.state?.value}`
      )
      .then((response) => {
        setDepartments(response?.data?.table);
        console.log(response?.data?.table);
      })

      .catch((error) => {
        console.error("Error fetching pending data:", error);
      });
  }, []);


//    let shiv= ((department) => {
//    console.log("this is value",department);
//   });
console.log(location?.state?.value);

  

  
  

  return (
    <>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Country</th>
              <th>State</th>
              <th>Base Deparment</th>
              <th>Office Level Code</th>
              <th>Office Level Name</th>
            </tr>
          </thead>
          <tbody >

            {departments.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>India</td>
                <td>Chattisgarh</td>
                <td>{item.dept_name}</td>
                <td>{item.officeLevelCode}</td>
                <td>{item.officeLevelName}</td>
        
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};



export default Base_deptById;
