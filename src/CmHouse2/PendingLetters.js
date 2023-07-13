import { useEffect, useState} from 'react';
import React from 'react';

import { Container, Row, Col, Form, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const PendingLetters = () => {
  const [tableData,setTableData] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  const test = "hello";
  const navigate = useNavigate();

  // const onrowClick = () => {
  //   navigate('/cmHouse/ShowLetter',{state:test})
  // }

  const handleRowData = (rowData) => {
    navigate('/cmHouse/ShowLetter',{state:rowData})
    console.log('Row data:', rowData);
  };

  useEffect(() => {
    // Fetch data based on the selected radio button
    if (selectedOption === 'P') {
      axios.get('https://localhost:44333/api/userApplication/GetUserApplicaton')
        .then(response => {
          setTableData(response.data.table);
        })
        .catch(error => {
          console.error('Error fetching pending data:', error);
        });
    } else if (selectedOption === 'A') {
      axios.get('https://localhost:44333/api/userApplication/GetUserApplicaton')
        .then(response => {
          setTableData(response.data.table);
        })
        .catch(error => {
          console.error('Error fetching approved data:', error);
        });
    } 
  }, [selectedOption]);


  
  return (
    <>
      <Container fluid >
       <Row>
        <Col md={12} >
        <Row>
            <Col md={2} style={{boxShadow:'6px 2px 15px 1px whitesmoke'}}>
                <div>
                  <h5 style={{marginTop:'25px',background:'red'}}>
                    ऑनलईन जनशिकायत 
                  </h5>
                </div>

                <div style={{textAlign:'center'}}>

                <NavLink>पत्र देखें </NavLink>
              </div>
            </Col>
            
            <Col md={10}>
           <form class="row g-3 mt-5">
  
   <div class="mb-3 row">
    <label for="inputPassword"
     class="col-sm-2 col-form-label"
    >टोकन नंबर :</label>
    <div class="col-sm-7">
      <input type="password"
       class="form-control"
      placeholder='enter token number' />
   
    
     </div>
     <button type="submit" class="col-sm-1 btn btn-primary ">Submit</button>
  </div>
  <div className='text-center'>
    ऑनलईन आवेदनों  की स्थिति 
  </div>
  <div>
                      <input
                          type="radio"
                          name="pending"
                          value="P"
                          checked={selectedOption === "P"}
                          onChange={(event) => setSelectedOption(event.target.value)}

                        /> विचाराधीन(प्रेषण हेतु )
                        &nbsp;&nbsp;

                        <input
                          type="radio"
                          name="approved"
                          value="A"
                          checked={selectedOption ==="A"}
                          onChange={(event) => setSelectedOption(event.target.value)}
                        /> स्वीकृत (प्रेषण हेतु)
                        </div>

                        
                          
                            <Table>
                              <thead>

                                <tr>
                                  <th>
                                    S. NO.
                                  </th>
                                  <th>आवेदन क्रमांक </th>
                                  <th >नाम </th>
                                  <th >पता  </th>
                                  <th >विषय </th>
                                  <th >आवेदन दिनांक </th>
                                  <th >राज्य  </th>
                                  <th >जिला  </th>
                                </tr>
                              </thead>
                              <tbody>
                              {tableData?.map((item, index) => (
                                <tr key={index}>
                                  <td> {index + 1}</td>
                                  <td onClick={() => handleRowData(item.complaintID)}><NavLink> {item.complaintID}</NavLink></td>
                                  <td>{item.name} </td>
                                  <td> {item.address}</td>
                                  <td>{item.subject}</td>
                                  <td>{item.entrydate}</td>
                                  <td>{item.stateName}</td>
                                  <td>{item.district_Name} </td>
                                 
                                </tr>
                                ))} 
                              </tbody>
                            </Table>

                    </form>
            </Col>
        </Row>

        </Col>
       </Row>
      </Container>
    </>
  )
}

export default PendingLetters;