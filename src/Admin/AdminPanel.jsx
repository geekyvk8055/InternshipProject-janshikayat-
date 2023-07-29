import React, { useState, useEffect, useRef  } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIconName } from '@fortawesome/free-solid-svg-icons';


const AdminPanel = () => {
  const [CounterLocationName, setCounterLocationName] = useState("");
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const[message, setMessage] = useState([])

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get(
        "https://localhost:44333/api/Master/GetCountry"
      );
      setCountries(response.data);
    };
    fetchCountries();
  }, []);

  // fetch the list of states when a country is selected
  useEffect(() => {
    const fetchStates = async () => {
      if (selectedCountry) {
        const response = await axios.get(
          "https://localhost:44333/api/Master/GetState"
        );
        setStates(response.data);
      }
    };
    fetchStates();
  }, [selectedCountry]);

  // fetch the list of districts when a state is selected
  useEffect(() => {
    const fetchDistricts = async () => {
      if (selectedState) {
        const response = await axios.get(
          "https://localhost:44333/api/Master/GetDistrict"
        );
        setDistricts(response.data);
      }
    };
    fetchDistricts();
  }, [selectedState]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://localhost:44333/api/Master/CounterLocation",
        {
          country_code: selectedCountry,
          state_code: selectedState,
          district_code: selectedDistrict,
          location_name: CounterLocationName,
        }
      );

      console.log(response.data); // do something with the response data
      if(response.data)
      {
        alert("submitted successfully");
      }
      else{
        alert("failed to submit");
      }
    } catch (error) {
      console.log(error); // handle error
      
    }
  };

  const formRef = useRef(null);

  const handleClear = () => {

    const shouldClear = window.confirm('Are you sure you want to clear all fields?');

    if (shouldClear && formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <>
      <Container  fluid style={{backgroundImage:'url("/Images/image_admin_bg.jpg")'}} >
      
        <Row >
          <Col md={12} style={{marginTop:'25px' }}>
            <Row>
              <Col md={3} striped bordered hover>
             
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
                    <NavLink to="/getLogin"
                    style={{color:'#2e415c',textDecoration:'none'}}>
                    <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />
                      Create Counter Location
                     
                    </NavLink>
                  </a>
                  
                  <hr />
                  <a>
                    <NavLink
                      to="/createCounter"
                      style={{ textDecoration: "none",color:'#2e415c' }}
                    >
                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />
                      Create Counter
                    </NavLink>
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/CreateOffice"
                      style={{ textDecoration: "none",color:'#2e415c' }}
                    >
                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />
                      Create Office
                    </NavLink>
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/createOfficeLevel"
                      style={{ textDecoration: "none",color:'#2e415c' }}
                    >
                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />
                      Create Office Level
                    </NavLink>
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/createEmployee"
                      style={{ textDecoration: "none",color:'#2e415c' }}
                    >
                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />
                      Create Employee
                    </NavLink>
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/alloteEmployeeOffice"
                      style={{ textDecoration: "none",color:'#2e415c' }}
                    >
                       <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />
                      Allote Employee Office Or section
                    </NavLink>
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/alloteOfficeRole"
                      style={{ textDecoration: "none",color:'#2e415c' }}
                    >
                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />
                      Allote Employee Office/Section Role
                    </NavLink>
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
                  </a>
                  <hr />
                  <a>
                    <NavLink
                      to="/admin/countercat_mapping"
                      style={{ textDecoration: "none",color:'#2e415c' }}
                    >
                     <img style={{height:'4vh',width:'4vw'}} src="/Images/icons8-arrow-48.png"  />
                       Counter Category Mapping
                    </NavLink>
                  </a>
                  <br />
                
                </div>
              </Col>
             
             &nbsp;&nbsp;
             &nbsp;&nbsp;
             &nbsp;&nbsp;
              <Col
                md={8}
                style={{ borderRadius: "3px", border: "1px solid blue", marginTop:'40px' }}
              >
               
              
              
                  
                 
                  <Row className="mt-3">
                    <Col>  आवेदन की स्थिति हेतु आवेदन नंबर डालें :</Col>
                    <Col> <Form.Group>
                      <Form.Control
                       type="number"
                       placeholder="आवेदन की स्थिति हेतु आवेदन नंबर डालें"
                       name="alloted_number"
                       />
                        </Form.Group>
                       </Col>
                       <Col><Button>देखें </Button></Col>
                  </Row>

                
                   
                   
                <div style={{border:'1px solid white',background:'whitesmoke',marginTop:'20px'}}>
                <div className="bg-success  text-center mt-3 mb-3 "
                  style={{
                    height: "10vh",
                    fontSize: "35px",
                    color: "white",
                    fontFamily: "Times New Roman,Arial, sans-serif",
                  }}>
                  Create Counter Location
                </div>
                
                <Form>
                <Row>
                <Col>
                  <Form.Group class=" form-group">
                    <Form.Label htmlFor="country">Country:</Form.Label>
                    <Form.Select
                      className="form-control"
                      id="country"
                      value={selectedCountry}
                      onChange={(event) =>
                        setSelectedCountry(event.target.value)
                      }
                    >
                      <option value="">Select a country</option>
                      {countries.map((country) => (
                        <option key={country.value} value={country.value}>
                          {country.value} {country.name}
                        </option>
                      ))}
                    </Form.Select>
                    </Form.Group>
                    </Col>

                    <Col >
                      <Form.Group>
                        <Form.Label htmlFor="state">State:</Form.Label>
                        <Form.Select
                          className="form-control"
                          id="state"
                          value={selectedState}
                          onChange={(event) =>
                            setSelectedState(event.target.value)
                          }
                          disabled={!selectedCountry}
                        >
                          <option value="">Select a state</option>
                          {states.map((state) => (
                            <option key={state.value} value={state.value}>
                              {state.name}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                      
                      
                   
                  
                  </Col>
                  </Row>
                  <Row>
                  <Col>
                  <div>
                    <label htmlFor="district">District:</label>
                    <select
                      className="form-control"
                      id="district"
                      value={selectedDistrict}
                      onChange={(event) =>
                        setSelectedDistrict(event.target.value)
                      }
                      disabled={!selectedState}
                    >
                      <option value="">Select a district</option>
                      {districts.map((district) => (
                        <option key={district.value} value={district.value}>
                          {district.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  </Col>
                  <Col>
                  <Form.Group class=" form-group">
                    <Form.Label htmlFor="name">Name:</Form.Label>
                    <Form.Control
                      className="form-control"
                      id="name"
                      type="text"
                      value={CounterLocationName}
                      onChange={(event) =>
                        setCounterLocationName(event.target.value)
                      }
                    />
                  </Form.Group>
                  </Col>
                  </Row>
                      <br />
                  <Button onClick={handleSubmit}>Submit</Button>
                  &nbsp;
                  <Button onClick={handleClear}  className="bg-danger">Clear</Button>
                </Form>
                </div>
          
              </Col>
            </Row>
          </Col>
        </Row>
        <br />
        
      </Container>
    </>
  );
};

export default AdminPanel;
