import { useEffect, useState } from 'react';
import React from 'react';

import { Container, Row, Col, Form, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import DataTable from 'react-data-table-component';



const PendingReportsList = () => {
  const [tableData, setTableData] = useState([]);
  const [tableDataOne, setTableDataOne] = useState([]);
  const location = useLocation();

  const [selectedOption, setSelectedOption] = useState([]);
  const test = "hello";
  const navigate = useNavigate();

  // const onrowClick = () => {
  //   navigate('/cmHouse/ShowLetter',{state:test})
  // }

  const handleRowData = (rowData) => {
    navigate('/cmHouse/ShowLetter', { state: rowData })
    console.log('Row data:', rowData);
  };

  useEffect(() => {
    // Fetch data based on the selected radio button
    
      axios.get('https://localhost:44333/api/ComplaintDetailTbl/gettotalpendingcomplaint')
        .then(response => {
          setTableData(response?.data?.table);
        })
        .catch(error => {
          console.error('Error fetching pending data:', error);
        });
    } 
  , []);



  useEffect(() => {
    // Fetch data based on the selected radio button
    
      axios.get(`https://localhost:44333/api/ComplaintDetailTbl/gettotalcomplaintstatusbyid/${location?.state}`)
        .then(response => {
          setTableDataOne(response?.data?.table);
          console.log(response?.data?.table);
         
        })
        .catch(error => {
          console.error('Error fetching pending data:', error);
        });
    } 
  , []);

  console.log(location?.state);
  // console.log(tableDataOne?.[0]?.order_count);
  // console.log(tableDataOne?.[1]?.order_count);
  // console.log(tableDataOne?.[2]?.order_count);
  // console.log(tableDataOne?.[0]?.total_count_all_categories);

  return (
    <>
      <Container fluid >
        <Row>
          <Col md={12} >
            <Row>
            <Col md={2} style={{ background: '#eaf9ff',   border: "1px solid grey",
                  boxShadow: "1px 1px 5px 3px grey"}}>
                <div
                style={{
                    marginTop: '25px',
                    background: "#017e7e",
                    textAlign: 'center',
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius:'5px',

                    height: '6vh',
                    fontSize: '19px',
                    fontWeight: 'bold',
                    color: 'white'

                  }} 
                >
                  
                    ऑनलईन जनशिकायत
                  
                </div>
                <hr/>

                <a>
                <img style={{ height: '4vh', width: '4vw' }} src="/Images/icons8-arrow-48.png" />
                  <NavLink style={{textDecoration:'none', fontSize:'20px'}}>पत्र देखें </NavLink>
                </a>
                <hr/>
              </Col>

              <Col md={10}>
                <form class="row g-3 mt-5 mb-5">

                  <div class="mb-3 row">
                    <label for="inputPassword"
                      class="col-sm-4 col-form-label"
                    >आवेदन की स्थति हेतु आवेदन नंबर डालें :</label>
                    <div class="col-sm-5">
                      <input type="number"
                        class="form-control"
                        placeholder='enter application number' />


                    </div>
                    <button type="submit" class="col-sm-1 btn btn-primary">देखें </button>
                  </div>
                  <div className='text-center' style={{fontSize:'25px'}}>
                    <b>
                      जनशिकायत निवारण विभाग, मंत्रालय
                    </b>
                  </div>
                  <div className="d-flex justify-content-center">
                  <Table>
                              <thead>

                                <tr>
                                  <th>
                                    S. NO.
                                  </th>
                                  <th>ऑफिस का नाम </th>
                                  <th >VC द्वारा प्राप्त शिकायतें  </th>
                                  <th >वेब द्वारा प्राप्त शिकायतें  </th>
                                  <th >POST/MAIL द्वारा प्राप्त शिकायतें </th>
                                  <th >कुल पत्र </th>
                                  
                                </tr>
                              </thead>
                              <tbody>
                             
                                <tr >
                                  <td> 1 </td>
                                  <td>  जनशिकायत निवारण विभाग, मंत्रालय</td>
                                  <td>{tableDataOne?.[0]?.order_count} </td>
                                   <td> {tableDataOne?.[1]?.order_count}</td>
                                  <td>{tableDataOne?.[2]?.order_count}</td> 
                                  <td><NavLink to="/PendingList/ActionPendingLetters" state={location?.state?.userDataTwo?.userid}>{tableDataOne?.[0]?.total_count_all_categories}</NavLink></td>
                                  
                                 
                                </tr>
                              
                              </tbody>
                            </Table>
                  </div>

                </form>
              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PendingReportsList;