import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink,useNavigate } from "react-router-dom";
import { Container, Table } from "react-bootstrap";







const UserApplicationDetail = () => {
    const navigate = useNavigate();

  const [userApplication, setUserApplication] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:44333/api/userApplication/GetUserApplicaton")
      .then((response) => setUserApplication(response.data.table))
      .catch((error) => console.log(error));
  }, []);


   let shiv= ((department) => {
   console.log("this is value",department);
  });

  

  
  

  return (
    <>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>आवेदन क्रमांक</th>
              <th>आवेदक का नाम </th>
              <th>जिला </th>
              <th>विषय </th>
              <th>दिनांक </th>
              <th>स्थिति </th>
              <th>PG portal Registration No. </th>
            </tr>
          </thead>
          <tbody >

          

            {userApplication.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.complaintID}</td>
                <td>{item.name}</td>
                <td>{item.district_Name}</td>
                <td>{item.subject}</td>
                <td>{item.entrydate}</td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};



export default UserApplicationDetail;
