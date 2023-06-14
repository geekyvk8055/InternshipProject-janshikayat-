import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const OfficeList = () => {
    const [office, setOffice] = useState([]);


    useEffect(() => {
        axios.get("https://localhost:44333/api/Master/GetNewOfficejoin")
          .then(response => setOffice(response.data))
          .catch(error => console.log(error));
      }, []);
  return (
    <>
    <Container>

      <table>
  <thead>
    <tr>
      <th>Serial No.</th>
      <th>Office Code</th>
      <th>District Name</th>
      <th>Base Dept Name</th>
      <th>Office Name</th>
    </tr>
  </thead>
  <tbody>
    {office.map((ofc, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{ofc.officecode}</td>
        <td>{ofc.districtname}</td>
        <td>{ofc.basedeptcode}</td>
        <td>{ofc.officename}</td>
      </tr>
    ))}
  </tbody>
</table>
</Container>
    </>
  )
}

export default OfficeList;
