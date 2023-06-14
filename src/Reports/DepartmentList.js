import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";





const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:44333/api/Master/Getbasedepartment ")
      .then((response) => setDepartments(response.data))
      .catch((error) => console.log(error));
  }, []);


   let shiv= ((department) => {
   console.log("this is value",department);
  });

  

  
  

  return (
    <>
      <Container>
        <table>
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Deparment Code</th>
              <th>Department Name</th>
            </tr>
          </thead>
          <tbody >

          

            {departments.map((department, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{department.value}</td>
                <td><NavLink style={{textDecoration:'none'}}>{department.name}</NavLink></td>
        
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
};



export default DepartmentList;
