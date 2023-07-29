import React from "react";
import { Button, Col, Container, Row,Form } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CreateCounter = () => {
  const [district, setDistrict] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState([]);
  const [counterlocation, setCounterlocation] = useState([]);
  const [selectedCoutnterlocation, setSelectedCounterlocation] = useState([]);
  const [counter, setCounter] = useState([]);

  // useEffect(() => {
  // 	axios.get("https://localhost:44333/api/Master/GetDistrict").then((response) => {
  // 	  setdistrict(response.data);
  // 	});
  //   }, []);

  useEffect(() => {
    const fetchdistricts = async () => {
      const response = await axios.get(
        "https://localhost:44333/api/Master/GetDistrict"
      );
      setDistrict(response.data);
    };
    fetchdistricts();
  }, []);

  // useEffect(() => {
  //   axios.get("https://localhost:44333/api/Master/GetCounterLocation").then((response) => {
  //     setcounterlocation(response.data);
  //   });
  //   }, []);

  useEffect(() => {
    const fetchCounterlocation = async () => {
      if (selectedDistrict) {
        const response = await axios.get(
          "https://localhost:44333/api/Master/GetCounterLocation"
        );
        setCounterlocation(response.data);
      }
    };
    fetchCounterlocation();
  }, [selectedDistrict]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://localhost:44333/api/Master/Countermaster",
        {
          location_code: selectedCoutnterlocation,
          district_code: selectedDistrict,
          counter_name: counter,
        }
      );

      console.log(response.data); // do something with the response data
    } catch (error) {
      console.log(error); // handle error
    }
  };

  return (
    <>
      <Container fluid style={{backgroundImage:'url("/Images/image_admin_bg.jpg")'}}>
        <Row >
          <Col md={12} style={{marginTop:'25px' }}>
            <Row>
              <Col md={3} >
              <h3
                  className="text-center"
                  style={{
                    background: "#FA0C00",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius:'10px',
                    borderTopRightRadius:'10px',
                    color:'white'
                  

                  }}
                >
                  Admin Menu
                </h3> 
                <div style={{border:'1px solid whitesmoke',borderTopLeftRadius:'10px',
                    borderTopRightRadius:'10px',background:'#eaf9ff'}}>            
                  <a>
                   <NavLink to="/getLogin" style={{ textDecoration: "none",color:'#2e415c' }}>                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />
Create Counter Location</NavLink>
                  </a><hr />
                  <a>
                  <NavLink to="/createCounter" style={{ textDecoration: "none",color:'#2e415c' }}>                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />
Create Counter</NavLink>
                  </a><hr />
                  <a>
                  <NavLink to="/CreateOffice" style={{ textDecoration: "none",color:'#2e415c' }}>                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />
Create Office</NavLink>
                  </a><hr />
                  <a>
                  <NavLink to="/createOfficeLevel" style={{ textDecoration: "none",color:'#2e415c' }}>                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />
Create Office Level</NavLink>
                  </a><hr />
                  <a>
                  <NavLink to="/createEmployee" style={{ textDecoration: "none",color:'#2e415c' }}>                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />
Create Employee</NavLink>
                  </a><hr />

                  <a>
                  <NavLink to="/alloteEmployeeOffice" style={{ textDecoration: "none",color:'#2e415c' }}>                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />
 Allote Employee Office Or section</NavLink>
                  </a>
                  <hr />
                  <a>
                  <NavLink to="/alloteOfficeRole" style={{ textDecoration: "none",color:'#2e415c' }}>                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />
Allote Employee Office/Section Role</NavLink>
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/admin/CreatePassword"
                      style={{ textDecoration: "none",color:'#2e415c' }}
                    >
                                         <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                      Create Employee Password
                    </NavLink>
                  </a>

                  <hr />
                  <a>
                    <NavLink
                      to="/admin/ResetEmplPwd"
                      style={{ textDecoration: "none",color:'#2e415c' }}
                    >
                                         <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                       Reset Employee Password
                    </NavLink>
                  </a>

                  <hr />
                  <a>
                    <NavLink
                      to="/admin/Section"
                      style={{ textDecoration: "none",color:'#2e415c' }}
                    >
                                         <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                       Create Section
                    </NavLink>
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/admin/counter_allotement"
                      style={{ textDecoration: "none",color:'#2e415c' }}
                    >
                                         <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                       Allote Counter To User
                    </NavLink>
                  </a><hr />
                  <a>
                    <NavLink
                      to="/admin/countercat_mapping"
                      style={{ textDecoration: "none",color:'#2e415c' }}
                    >
                                         <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />

                       Counter Category Mapping
                    </NavLink>
                  </a>
                  </div><hr />
              
              </Col>
              &nbsp;&nbsp;
             &nbsp;&nbsp;
             &nbsp;&nbsp;
              <Col md={8} style={{borderRadius:'3px', border:'1px solid black', marginTop:'40px'}}>
                <div className="bg-success  text-center mt-3 mb-3 "
                  style={{
                    height: "10vh",
                    fontSize: "35px",
                    color: "white",
                    fontFamily: "Times New Roman,Arial, sans-serif",
                  }}>
                Create Counter
                </div>
                <form onSubmit={handleSubmit}>
                
                 
                 
                 <Row>
                 <Col>
                  
                    <Form.Label for="district">जिला :</Form.Label>
                    <Form.Select
                      class="form-control"
                      value={selectedDistrict}
                      onChange={(event) =>
                        setSelectedDistrict(event.target.value)
                      }
                    >
                      <option value="">Select a country</option>
                      {district.map((district) => (
                        <option key={district.value} value={district.value}>
                          {district.name}
                        </option>
                      ))}
                    </Form.Select>
                    </Col>
                    <Col>
               
                  <Form.Label for="State">Counter Location :</Form.Label>
                  <Form.Select
                    class="form-control"
                    value={selectedCoutnterlocation}
                    onChange={(event) =>
                      setSelectedCounterlocation(event.target.value)
                    }
                    disabled={!selectedDistrict}
                  >
                    <option value="">Select a state</option>
                    {counterlocation.map((j) => (
                      <option key={j.value} value={j.value}>
                        {j.name}
                      </option>
                    ))}
                  </Form.Select>
                  </Col>
                </Row>
                <br />
                <div>
                  <Form.Label>Counter : </Form.Label>
                  <Form.Control
                    value={counter}
                    onChange={(event) => setCounter(event.target.value)}
                  />
                </div>
                <br />

                <div>
                  <Button type="submit"> submit</Button>
                  &nbsp;
                  <Button className="bg-danger">Cancel</Button>
                </div>
                </form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateCounter;
