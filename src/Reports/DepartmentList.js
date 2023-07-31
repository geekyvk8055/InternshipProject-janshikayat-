import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Container, Table } from "react-bootstrap";





const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);






  // useEffect(() => {
  //   const response = (
  //   axios
  //     .get("https://localhost:44333/api/Master/Getbasedepartment ")
  //     .then((response) => setDepartments(response.data)))
    
  //     .catch((error) => console.log(error));
  // }, []);

  // console.log(response.data);
  //  let shiv= ((department) => {
  //  console.log("this is value",department);
  // });

  
useEffect(() => {
    const fetchdepartment = async () => {
      const response = await axios.get(
        "https://localhost:44333/api/Master/Getbasedepartment"
      );
      setDepartments(response.data);
      console.log(response.data);
    };
    fetchdepartment();
  }, []);
  
  

  return (
    <>
      <Container>
        <Table>
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
                <td><NavLink to= "/DepartmentList/byId" state={department} style={{textDecoration:'none'}} >{department.name}</NavLink></td>
        
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};



export default DepartmentList;
