import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';

const District = () => {
    const [districtData, setDistrictData] = useState([]);


    useEffect(() => {
        axios.get("https://localhost:44333/api/Master/GetDistrict ")
          .then(response => setDistrictData(response.data))
          .catch(error => console.log(error));
      }, []);
  return (
    <>
    <Container>

      <Table striped bordered hover >
  <thead>
    <tr>
      <th>Serial No.</th>
      <th>District Code</th>
      <th>District Name</th>
    </tr>
  </thead>
  <tbody>
    {districtData.map((district, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{district.value}</td>
        <td>{district.name}</td>
      </tr>
    ))}
  </tbody>
</Table>
</Container>
    </>
  )
}

export default District
