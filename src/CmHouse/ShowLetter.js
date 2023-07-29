import { useEffect, useState} from 'react';
import React from 'react';

import { Container, Row, Col, Form, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const ShowLetter = () => {
  const [tableData,setTableData] = useState([]);
  const [selectedOption, setSelectedOption] = useState({});
  const test = "hello";
  const navigate = useNavigate();

  // const onrowClick = () => {
  //   navigate('/cmHouse/ShowLetter',{state:test})
  // }

  const handleRowData = (rowData) => {
    navigate('/cmHouse/ShowLetter',{state:{rowDatas:rowData,options:selectedOption}})
    console.log('option:', selectedOption , rowData);
    // console.log('rowdata', complaintID);
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
      axios.get('https://localhost:44333/api/userApplication/GetUseracceptapplicaton')
        .then(response => {
          setTableData(response.data.table);
        })
        .catch(error => {
          console.error('Error fetching approved data:', error);
        });
    } 
  }, [selectedOption]);
  console.log(selectedOption);



  return (
    <>
      <Container fluid style={{backgroundImage:'url("/Images/image_admin_bg.jpg")'}}>
       <Row>
        <Col md={12} >
        <Row>
            <Col md={2} style={{ background: '#eaf9ff',   border: "1px solid grey",
                  boxShadow: "1px 1px 5px 3px grey"}}>
                <div  style={{}}>
                  
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
                 
              <hr />

                <a>
                <img style={{ height: '4vh', width: '4vw' }} src="/Images/icons8-arrow-48.png" />
                <NavLink style={{textDecoration:'none',fontSize:'20px'}}>पत्र देखें </NavLink>
              </a>
              <hr />
              <br />
              </div>
            </Col>
            &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
           
            <Col md={9}>
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
  <div className='text-center' style={{fontSize:'30px', fontWeight:'bold'}}>
    ऑनलईन आवेदनों  की स्थिति 
  </div>
  <div>
                      <input
                          type="radio"
                          name="pending"
                          value="P"
                          checked={selectedOption === "P"}
                          onChange={(event) => setSelectedOption(event.target.value)}

                        /> <label>विचाराधीन(प्रेषण हेतु )</label>
                        &nbsp;&nbsp;

                        <input
                          type="radio"
                          name="approved"
                          value="A"
                          checked={selectedOption ==="A"}
                          onChange={(event) => setSelectedOption(event.target.value)}
                        /> <label>स्वीकृत (प्रेषण हेतु)</label>
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
                                  <td onClick={() => handleRowData(item?.complaintID)}><NavLink> {item?.complaintID}</NavLink></td>
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

export default ShowLetter;