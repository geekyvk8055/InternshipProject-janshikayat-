import { useEffect, useState } from 'react';
import React from 'react';

import { Container, Row, Col, Form, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';



const PendingLetters = () => {
  const [tableData, setTableData] = useState([]);
  const [tableDataOne, setTableDataOne] = useState([]);
  const [tableDataTwo, setTableDataTwo] = useState([]);
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

  // useEffect(() => {
  //   // Fetch data based on the selected radio button
  //   if (selectedOption === 'P') {
  //     axios.get('https://localhost:44333/api/userApplication/GetUserApplicaton')
  //       .then(response => {
  //         setTableData(response.data.table);
  //       })
  //       .catch(error => {
  //         console.error('Error fetching pending data:', error);
  //       });
  //   } else if (selectedOption === 'A') {
  //     axios.get('https://localhost:44333/api/userApplication/GetUserApplicaton')
  //       .then(response => {
  //         setTableData(response.data.table);
  //       })
  //       .catch(error => {
  //         console.error('Error fetching approved data:', error);
  //       });
  //   }
  // }, [selectedOption]);



  // useEffect(() => {
  //   // Fetch data based on the selected radio button
    
  //     axios.get('https://localhost:44333/api/ComplaintDetailTbl/gettotalcomplaint')
  //       .then(response => {
  //         setTableData(response.data.table);
  //       })
  //       .catch(error => {
  //         console.error('Error fetching pending data:', error);
  //       });
  //   } 
  // , []);



  useEffect(() => {
    // Fetch data based on the selected radio button
    
      axios.get('https://localhost:44333/api/ComplaintDetailTbl/getpendingcomplaint')
        .then(response => {
          setTableDataOne(response.data.table);
          
        })
        .catch(error => {
          console.error('Error fetching pending data:', error);
        });
    } 
  , []);




  useEffect(() => {
    axios.get(`https://localhost:44333/api/ComplaintDetailTbl/gettotalcomplaintstatusbyid/${location?.state}`)
    .then((response) => {
      setTableData(response?.data?.table);



    })
    .catch(error => {
      console.error('Error fetching pending data:', error);
    });
  }
, []);



console.log(location?.state?.userDataTwo?.order_count);

console.log(tableData?.[0]?.order_count);
  return (
    <>
      <Container fluid style={{backgroundImage:'url("/Images/image_admin_bg.jpg")'}}>
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
                  <Card style={{ width: '35rem' }}>
         <div style={{background:'#017e7e'}}>         
        <Card.Title className='text-center text-white  mt-3'style={{justifyContent:'center',alignItems:'center'}}><b>जनशिकायत के पत्र</b> </Card.Title><hr />
        </div>
      <Card.Body>
     
       <br />
        {/*<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>*/}
       
        <pre style={{fontSize:'20px', color:'darkblue'}}>    <b>Total Letter : </b>               {location?.state?.userDataTwo?.total_count_all_categories}</pre>
        
        <pre style={{fontSize:'20px', color:'red'}}>  <b>Pending Letter : </b>              <NavLink to= "/pendingList" state={location?.state?.userDataTwo?.userid}   style={{textDecoration:'none'}}> {location?.state?.userDataTwo?.total_count_all_categories}</NavLink></pre>
        <pre style={{fontSize:'20px', color:'green'}}><b>Completed Letter : </b>               <NavLink  style={{textDecoration:'none'}}></NavLink></pre>
        <pre style={{fontSize:'20px', color:'darkblue'}}><b>Forworded Letter : </b>               <Card.Link href="#" style={{textDecoration:'none'}}>0</Card.Link></pre>
        <pre style={{fontSize:'20px', color:'darkblue'}}>          <b>Status : </b>        </pre>
      </Card.Body>
    </Card>
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

export default PendingLetters;